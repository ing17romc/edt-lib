# Library Alignment Spec

Date: 2026-04-16

## Context

`edt-lib` is a React component library built with React, TypeScript, Vite, Sass, and Storybook. The repository already contains a functioning component suite, Storybook coverage, and automated tests. The current effort is not a redesign of the library itself; it is a repository-wide alignment initiative to make the package correct, consistent, and scalable as an npm library and as a documentation source for humans and AI assistants.

## Problems Detected

### Public API mismatch

- the build entrypoint is `src/components/index.tsx`
- the repository also contains a root `index.tsx`, which is stale and not part of the actual package contract
- many components are exported only as defaults inside component modules
- the barrel uses `export *`, so several documented named imports are missing from the published package

### Packaging mismatch

- `types` points to `dist/index.d.ts`, but declarations are not generated
- `react` and `react-dom` are packaged as dependencies instead of peer dependencies
- `exports` does not declare the documented stylesheet subpath
- the style contract exists informally in docs, not formally in package metadata

### Documentation mismatch

- README usage examples do not match the real package output
- Storybook previews use private source paths instead of the public contract
- Storybook lacks library-level documentation sections such as installation, SSR, recipes, patterns, and migration
- no canonical AI context source exists

### CI mismatch

- CI validates TypeScript and tests only
- CI does not verify build, Storybook, tarball correctness, or consumer smoke usage

## Goals

1. Establish one official public JavaScript entrypoint for the library.
2. Ensure package exports, build output, README, Storybook, and examples all describe the same contract.
3. Generate and publish correct TypeScript declaration files.
4. Formalize the style contract for both compiled CSS and raw SCSS entrypoints.
5. Make the package safe for React consumers by using peer dependencies.
6. Strengthen Storybook from component gallery to documentation system.
7. Add canonical human docs, multi-AI docs, and machine-readable component metadata.
8. Add CI quality gates that fail when the package contract drifts.

## Non-goals

1. Redesign component visuals without a clear contract-driven reason.
2. Rename public components unless required for correctness.
3. Split the package into multiple npm packages.
4. Rewrite every story and every component doc block in one pass.
5. Introduce a design-token platform or theming engine beyond what the repository already needs.

## Proposed Decisions

### 1. Canonical JavaScript entrypoint

Adopt:

- `src/index.ts`

as the single official source entrypoint for the package.

Rationale:

- it cleanly represents package root API
- it removes ambiguity with root `index.tsx`
- it supports both Vite library build and TypeScript declaration generation

### 2. Canonical component export strategy

Use explicit named exports from the package root so consumers can reliably write:

```tsx
import { Button, ThemeProvider } from 'edt-lib';
```

Rationale:

- matches ecosystem expectations for React UI libraries
- aligns with current README direction
- avoids relying on internal source paths

### 3. Canonical stylesheet contract

Support both:

- `import 'edt-lib/styles.css';`
- `import 'edt-lib/index.scss';`

Contract positioning:

- `styles.css` becomes the recommended zero-configuration style import
- `index.scss` remains a supported advanced entry for Sass-aware consumers who want source-level integration

Rationale:

- compiled CSS is the safest default for Vite, Next.js, and Vercel consumers
- keeping `index.scss` avoids breaking the documented contract and preserves flexibility

### 4. React dependency policy

Move:

- `react`
- `react-dom`

to `peerDependencies`, and keep them in `devDependencies` for local development.

Rationale:

- avoids duplicate React installations
- reflects standard npm library practice for React component packages

### 5. Type declaration generation

Generate declarations with a dedicated TypeScript build config:

- `tsconfig.build.json`

Rationale:

- avoids coupling declaration generation to Vite output internals
- keeps the build explicit and inspectable

### 6. Storybook alignment

Storybook should consume the canonical source entry and public style entry where practical, and it should gain top-level docs pages for:

- Getting Started
- Theme and SSR
- Patterns
- Recipes
- Migration

Rationale:

- Storybook becomes both a component catalog and an integration guide

### 7. Documentation architecture

Human docs:

- architecture docs under `docs/architecture/`
- standards under `docs/standards/`
- guides under `docs/guides/`
- patterns and recipes under `docs/patterns/` and `docs/recipes/`

AI docs:

- `docs/ai/LLMS.md` as canonical source
- small adapter files for major assistants
- `docs/ai/component-manifest.json` as machine-readable metadata

Rationale:

- one canonical source, thin adapters, low duplication risk

### 8. CI quality gates

CI should validate:

- lint
- typecheck
- tests
- library build
- Storybook build
- tarball contents
- consumer smoke usage

Rationale:

- alignment failures should surface before publish, not after

## Implementation Phases

### Phase 1: Audit and spec

- capture the current package contract
- document mismatches
- record proposed architecture and rollout

### Phase 2: Package contract alignment

- add `src/index.ts`
- fix public exports
- remove entrypoint ambiguity
- generate declarations
- correct `package.json`
- formalize style exports
- update README baseline

### Phase 3: Storybook and human docs

- add Storybook top-level docs pages
- define Storybook standards
- define component doc template
- add architecture, styles, patterns, recipes, and migration docs

### Phase 4: Multi-AI layer

- create `docs/ai/LLMS.md`
- add assistant adapter files
- create `component-manifest.json`
- document the manifest schema

### Phase 5: Examples and CI

- add runnable or near-runnable examples
- add consumer smoke validation
- expand CI quality gates
- document quality gates

## Risks

### Breaking change risk

If the current published package unintentionally exposed only a subset of components, fixing the barrel may technically expand the public API surface. This is desirable but must still be documented carefully.

Mitigation:

- do not rename existing symbols
- add missing named exports rather than replacing current working ones
- document the official contract explicitly

### Styles compatibility risk

Changing the style entrypoint recommendation can confuse consumers if both SCSS and CSS paths are not explained clearly.

Mitigation:

- keep `index.scss` supported
- document `styles.css` as recommended
- export both subpaths explicitly

### Documentation drift risk

Creating many docs files can create maintenance burden if there is no canonical hierarchy.

Mitigation:

- keep architecture docs concise and normative
- make `docs/ai/LLMS.md` canonical for AI-facing guidance
- make README point outward rather than duplicating full references

### CI duration risk

Adding Storybook and smoke tests increases CI runtime.

Mitigation:

- keep consumer smoke intentionally small
- validate one strong packaging path rather than many redundant ones

## Migration Strategy

1. Preserve existing working exports such as `ThemeProvider`, `useTheme`, `Card`, `Pagination`, `Selector`, and `Title`.
2. Add missing named exports for components already documented publicly.
3. Preserve `edt-lib/index.scss` by exporting it formally.
4. Add `edt-lib/styles.css` as the recommended default style import.
5. Document all contract changes in README, `docs/migrations.md`, and `CHANGELOG.md`.

## Acceptance Criteria

The alignment work is accepted when all of the following are true:

- the official JS entrypoint is a single documented source file
- package root named imports work as documented
- declaration files are generated into `dist/`
- `react` and `react-dom` are peer dependencies
- `edt-lib/index.scss` and `edt-lib/styles.css` are both valid package subpaths
- README quick start is executable as written
- Storybook includes both component docs and top-level integration docs
- AI docs have one canonical source and thin adapters
- CI validates package build, Storybook build, tarball, and smoke consumption

## Detailed Checklist

- [x] Audit current repo state
- [x] Record public API mismatch
- [x] Record style contract mismatch
- [x] Record package metadata gaps
- [x] Record Storybook and CI gaps
- [ ] Create canonical `src/index.ts`
- [ ] Fix named exports for documented components
- [ ] Remove or neutralize root `index.tsx` ambiguity
- [ ] Generate declarations with a build TS config
- [ ] Update `package.json` metadata and scripts
- [ ] Export `./index.scss` and `./styles.css`
- [ ] Update README to the real package contract
- [ ] Add architecture docs
- [ ] Add styles/theme guide
- [ ] Add Storybook standard
- [ ] Add component documentation template
- [ ] Add patterns and recipes docs
- [ ] Add Storybook higher-level docs pages
- [ ] Add `docs/ai/LLMS.md`
- [ ] Add assistant adapter files
- [ ] Add machine-readable component manifest
- [ ] Add example consumer seeds
- [ ] Add CI quality gates and smoke validation
