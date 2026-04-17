# CI Quality Gates

## Goal

CI should validate the published contract of `edt-lib`, not only the internal source tree.

## Required Gates

### `npm run lint`

Validates:

- ESLint
- SCSS lint
- SCSS architecture rules
- TypeScript typecheck

### `npm run test`

Validates:

- component behavior through Vitest
- Storybook-backed unit tests already present in the repo

### `npm run build`

Validates:

- library JavaScript bundle generation
- declaration file generation
- stylesheet output generation

### `npm run build-sb`

Validates:

- Storybook can render and build the current component/documentation set

### `npm run pack:check`

Validates:

- npm tarball contents match `files` and `exports` expectations

### `npm run smoke:package`

Validates:

- a consumer can install the packed tarball
- named imports resolve from `edt-lib`
- `edt-lib/index.scss` resolves in a Vite build
- `edt-lib/styles.css` and `edt-lib/index.scss` both resolve as public subpaths

## Current Workflow

GitHub Actions runs:

1. `npm ci`
2. `npm run lint`
3. `npm run test`
4. `npm run build`
5. `npm run build-sb`
6. `npm run pack:check`
7. `npm run smoke:package`

## Drift Protection

These gates specifically protect against:

- README examples diverging from exported package paths
- missing `.d.ts` output
- broken style subpath exports
- broken npm tarball contents
- Storybook/documentation regressions
