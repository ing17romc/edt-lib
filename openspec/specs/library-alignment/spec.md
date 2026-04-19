# Library Alignment

## Purpose

This spec records the accepted repository-alignment contract for `edt-lib`. It defines the package, documentation, AI-context, and CI expectations that keep the published library, examples, docs, and automation in sync.

## Requirements

### Requirement: Canonical package root contract

The library SHALL expose one canonical JavaScript entrypoint, explicit public style entrypoints, and generated type declarations that match the documented package contract.

#### Scenario: Canonical JavaScript entrypoint

- WHEN the package is built
- THEN `src/index.ts` SHALL be the only canonical source-level package root
- AND package-root imports SHALL be supported from `edt-lib`
- AND the public API SHALL be assembled through `src/components/index.ts`

#### Scenario: Public style entrypoints

- WHEN a consumer imports library styles
- THEN `edt-lib/styles.css` SHALL be the recommended stylesheet entry
- AND `edt-lib/index.scss` SHALL remain a supported raw Sass entry

#### Scenario: Type declarations

- WHEN the package is built for publish
- THEN declarations SHALL be emitted to `dist/`
- AND the published `types` entry SHALL resolve correctly for consumers

### Requirement: React library packaging policy

The package SHALL follow React library packaging conventions that avoid bundling the React runtime into consumer applications.

#### Scenario: Peer dependencies

- WHEN consumers install `edt-lib`
- THEN `react` SHALL be declared as a peer dependency
- AND `react-dom` SHALL be declared as a peer dependency

### Requirement: Aligned documentation surfaces

The repository SHALL keep its human-facing documentation, AI-facing guidance, and package examples aligned with the same public contract.

#### Scenario: Human-readable documentation

- WHEN maintainers inspect repository documentation
- THEN `docs/architecture/`, `docs/guides/`, `docs/patterns/`, `docs/recipes/`, and `docs/standards/` SHALL describe the same package-root contract
- AND `docs/` SHALL remain the hub for human-readable reference material

#### Scenario: AI-facing documentation

- WHEN an agent reads repository guidance
- THEN `docs/ai/LLMS.md` SHALL act as the canonical AI-facing source of truth
- AND assistant-specific files SHALL remain thin adapters when they exist

#### Scenario: Consumer examples

- WHEN maintainers inspect top-level integration examples
- THEN those examples SHALL use package-root imports from `edt-lib`
- AND they SHALL prefer `edt-lib/styles.css` unless raw Sass is explicitly required

### Requirement: Public component change discipline

The repository SHALL update all public-facing surfaces together when a public component contract changes.

#### Scenario: Public component change

- WHEN a public component behavior, prop, or variant changes
- THEN the implementation SHALL be updated
- AND public exports SHALL be updated when relevant
- AND stories, tests, and docs SHALL be updated
- AND `docs/ai/component-manifest.json` SHALL be updated when public metadata changes

### Requirement: CI alignment checks

The repository SHALL verify the publishable package contract before changes are merged or released.

#### Scenario: CI verification

- WHEN the main CI workflow runs
- THEN it SHALL verify linting, tests, package build, Storybook build, tarball validation, and smoke-package usage
- AND failures in those checks SHALL block drift between the documented and published contract

## Notes

- This spec captures the accepted outcome of the library-alignment effort rather than a temporary migration plan.
- `docs/audit/library-audit.md` remains the observed-state record, while this spec states the normative aligned contract.
