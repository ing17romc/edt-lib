# `edt-lib` Library Audit

Date: 2026-04-16

## Executive Summary

`edt-lib` has a solid implementation base: the current repository builds successfully with Vite, all 340 tests pass, and Storybook builds successfully. The main risks are not runtime stability problems inside components, but contract-alignment problems between the source barrel, the published package metadata, the README, and the way Storybook is wired.

The most important issue is that the documented public API is not the same as the published public API. The repository documents `import { Button, ThemeProvider } from 'edt-lib'`, but the current bundle does not export `Button` as a named export. The package also claims to publish TypeScript declarations through `types: "dist/index.d.ts"`, but no declaration file is generated. In addition, the README documents `import 'edt-lib/index.scss'`, while `package.json` does not export that subpath.

## Verified Current State

### Repository and build status

- `npm run lint:ts`: passes
- `npm run test`: passes with 43 test files and 340 tests
- `npm run build`: passes
- `npm run build-sb`: passes
- `npm pack --dry-run`: passes and produces a tarball with 14 files

### Package and source footprint

- `src/components/`: 31 component folders
- Story files: 41
- Test files: 43
- Current root docs: only `docs/index.md` and `docs/styling-architecture.md`
- No `examples/` directory currently exists
- At audit time, no canonical multi-AI context files existed beyond an outdated `.github/copilot-instructions.md`

## Public API Audit

### Current build entrypoint

The Vite library build uses:

- `src/components/index.tsx`

This is the effective JavaScript entrypoint for the published package today.

### Competing or ambiguous entrypoints

The repository also contains:

- root `index.tsx`
- root `index.scss`

The root `index.tsx` is not used by the build and is not part of the published `files` set. It is also stale: it imports `./src/components/utils/functions`, which does not exist in the repository. Because `tsconfig.json` only includes `src/**/*`, this root file is currently excluded from typechecking and can drift silently.

This creates an avoidable ambiguity:

- humans may assume root `index.tsx` is the package entrypoint
- Vite actually builds from `src/components/index.tsx`
- the published package only exports `"."`

### Current barrel behavior

`src/components/index.tsx` mostly uses `export * from "./Component"` statements. For many components, the component module only exports a default export plus types. In that pattern, `export *` does not re-export the default component.

Impact:

- the component exists in source
- Storybook can render it via local source imports
- the package bundle does not expose it as a named import from `edt-lib`

### Actual bundle exports

The current built ESM bundle exports this set of named symbols:

- `ALL_ICONS`
- `ActionIcons`
- `AlertIcons`
- `AudioAndVideoIcons`
- `Card`
- `CardVariant`
- `CommunicationIcons`
- `ContentIcons`
- `DeviceIcons`
- `EditorIcons`
- `FileIcons`
- `Footer`
- `HardwareIcons`
- `Icon`
- `ImageIcons`
- `NavBar`
- `NavigationIcons`
- `NotificationIcons`
- `Pagination`
- `Selector`
- `SelectorVariant`
- `SocialIcons`
- `ThemeProvider`
- `Title`
- `TitleSize`
- `TitleVariant`
- `useTheme`

### Mismatch with documented API

The README currently promises:

- `import { Button, ThemeProvider } from 'edt-lib'`
- `import { ThemeProvider, useTheme } from 'edt-lib'`

Verified mismatch:

- `Button` is documented but is not actually exported by the built package
- the package therefore fails the most basic “README quick start matches bundle” rule

## Styles Contract Audit

### Current documented style import

The README and docs currently instruct consumers to use:

```tsx
import 'edt-lib/index.scss';
```

### What is actually published

`npm pack --dry-run` shows the tarball includes:

- `index.scss`
- `src/styles/*`
- `dist/edt-lib.css`

This means the raw SCSS entry and its backing source files are included in the tarball.

### What is not wired correctly

`package.json` only exports:

- `"."`

It does not export:

- `./index.scss`
- any compiled CSS subpath

Impact:

- modern bundlers and runtimes that honor package `exports` can reject `edt-lib/index.scss`
- the style contract is documented but not formalized as package API

### Additional style-consumption observation

The built JavaScript bundle does not import the compiled CSS file for the consumer. CSS is emitted as a separate asset. That means style setup is a required consumer step and must be documented as part of the package contract.

## Type Declarations Audit

`package.json` declares:

- `"types": "dist/index.d.ts"`

But the current `dist/` only contains:

- `dist/index.es.js`
- `dist/index.cjs.js`
- `dist/edt-lib.css`

There is no generated declaration file. This is a contract bug for TypeScript consumers and for editors such as VS Code and GitHub Copilot.

## `package.json` Audit

### Strengths

- Package name is consistent with repo name
- ESM package with explicit `main`, `module`, and `exports`
- React is externalized in the Vite build
- `files` limits publication surface area

### Gaps and risks

- `react` and `react-dom` are listed in `dependencies` instead of `peerDependencies`
- missing `bugs` metadata
- missing `keywords`
- missing `sideEffects`
- `types` points to a file that is not generated
- `exports` omits documented style entrypoints
- `files` publishes raw style source but not a formal style export contract
- `clean` script uses Unix-only `rm`
- current description is generic and not npm-facing
- homepage uses `http://` instead of `https://`

### React dependency risk

The current Vite config correctly externalizes:

- `react`
- `react-dom`
- `react/jsx-runtime`

But `package.json` still lists `react` and `react-dom` as direct runtime dependencies. This is the wrong contract for a public React component library because it increases the risk of duplicate React installations or version conflicts in consuming apps.

## Vite Build Audit

### Current strengths

- library mode is configured
- ESM and CJS outputs are generated
- React peer modules are externalized
- build succeeds

### Current issues

- build entrypoints are anchored to `src/components/index.tsx` instead of a canonical package root source such as `src/index.ts`
- type declarations are not generated as part of the build
- CSS output exists but is not exposed as documented API

## Storybook Audit

### Current strengths

- Storybook builds successfully
- `autodocs` is widely used
- component coverage is broad
- theme switching exists in preview

### Current gaps

- Storybook preview imports private source paths:
  - `../src/styles/index.scss`
  - `../src/components/ThemeProvider`
- only a subset of stories define rich docs metadata consistently
- layout usage is mostly global instead of intentional per story category
- there is no high-level documentation layer for installation, SSR, recipes, migration, or package contract

### Story metadata coverage snapshot

Across 41 story files:

- 39 use `tags: ['autodocs']`
- 27 define `parameters`
- 24 define a component-level docs description
- 13 define `argTypes`
- 6 override layout

This indicates a good foundation, but not a normalized documentation standard yet.

### Layout concern

Storybook preview currently sets a global `layout: 'centered'`. That is convenient for atomic components, but suboptimal for:

- page-shell components such as `Layout`
- navigation components such as `NavBar`
- richer composition stories and recipes

## Human Documentation Audit

### Current strengths

- README is concise
- repo docs already mention theming and SCSS architecture

### Current gaps

- README over-promises an API that the bundle does not expose
- README lacks package metadata guidance for peer deps and compiled CSS
- no public API reference doc exists
- no package contract doc exists
- no SSR/Next.js guide exists beyond a short README section
- no recipes or patterns docs exist
- no migration guide exists
- no architectural decision log exists

## AI Documentation Audit

### Existing state at audit time

- `.github/copilot-instructions.md` existed

### Problems

- it is encoding-corrupted
- it references outdated or inconsistent tooling details
- it is not backed by a canonical source-of-truth file
- there are no assistant adapters for Claude, Codex, Gemini, or generic agents
- there is no machine-readable component manifest

## CI Audit

### Current workflow

The current GitHub Actions workflow runs:

- `npm ci`
- `npx tsc --noEmit`
- `npm run test`

### Missing quality gates

- lint
- package build
- Storybook build
- tarball validation
- smoke consumption test
- export-contract validation
- example validation

Current CI verifies internal TypeScript and tests, but it does not verify that the published package contract works.

## Changelog and release audit

### Current strengths

- `CHANGELOG.md` exists and is fairly detailed

### Risks

- `CHANGES.md` also exists and overlaps semantically with `CHANGELOG.md`
- release documentation is not consolidated
- migration guidance for consumers is missing

## Recommended Priority Order

### Priority 0: Contract correctness

1. Define a single official JS entrypoint.
2. Remove or neutralize root entrypoint ambiguity.
3. Export the documented public API from the actual build.
4. Generate declaration files.
5. Move `react` and `react-dom` to `peerDependencies`.
6. Export documented stylesheet subpaths.

### Priority 1: Human-facing alignment

1. Rewrite README to match the real package contract.
2. Add public API, package contract, styles/theme, and CI architecture docs.
3. Add migration notes and architectural decisions.

### Priority 2: Documentation system maturity

1. Add Storybook higher-level docs pages.
2. Standardize component documentation expectations.
3. Add recipes, patterns, and examples.

### Priority 3: Multi-AI layer

1. Create `docs/ai/LLMS.md` as canonical AI context.
2. Add lightweight adapter files for major assistants.
3. Add a machine-readable component manifest.

## Acceptance Targets for the Alignment Work

The alignment project should be considered successful when all of the following are true:

- `README` import examples work exactly as written
- the build entrypoint, package `exports`, README, Storybook, and examples all point to the same public API
- `react` and `react-dom` are peer dependencies
- TypeScript declaration files are generated and published
- `edt-lib/index.scss` is either officially supported through `exports` or removed from docs
- Storybook documents both components and library-level integration guidance
- multi-AI documentation is canonicalized and non-duplicative
- CI verifies the published contract, not only local source health
