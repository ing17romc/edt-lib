# Current Library Structure

## Purpose

This spec documents the current structure of `edt-lib` as a baseline reference for future OpenSpec changes. It describes the repository as it exists today rather than proposing new behavior.

## Requirements

### Requirement: Canonical package entrypoints

The library SHALL expose a single canonical source entrypoint and explicit public style entrypoints.

#### Scenario: JavaScript entrypoint

- WHEN the package is built
- THEN the canonical source entrypoint SHALL be `src/index.ts`
- AND `src/index.ts` SHALL re-export the public API from `src/components/index.ts`
- AND the package SHALL emit `dist/index.es.js`, `dist/index.cjs.js`, and `dist/index.d.ts`

#### Scenario: Public style entrypoints

- WHEN a consumer imports library styles
- THEN the recommended public stylesheet SHALL be `edt-lib/styles.css`
- AND the supported raw Sass entry SHALL be `edt-lib/index.scss`

### Requirement: Primary source layout

The repository SHALL organize package source code under `src/` with clear boundaries for public implementation, styling, docs authoring, utilities, and tests.

#### Scenario: Public component implementation area

- WHEN inspecting the main package source
- THEN `src/components/` SHALL be the primary public implementation area
- AND public components SHOULD generally contain `index.tsx`, `types.tsx`, `stories/`, `tests/`, and `styles/`
- AND `src/components/index.ts` SHALL act as the public export assembly layer

#### Scenario: Shared styling area

- WHEN inspecting style sources
- THEN `src/styles/` SHALL contain the shared Sass foundations used by both the build output and the raw Sass entry
- AND this area SHALL include the stylesheet source of truth that feeds the compiled CSS asset

#### Scenario: Internal support areas

- WHEN inspecting non-package source folders
- THEN `src/docs/` SHALL contain Storybook MDX documentation pages
- AND `src/utils/` SHALL contain internal shared helpers
- AND `src/__mocks__/` SHALL contain test-support mocks

### Requirement: Distinct example and reference surfaces

The repository SHALL maintain separate areas for consumer integrations, internal examples, and non-package reference assets.

#### Scenario: Consumer integration examples

- WHEN inspecting the top-level `examples/` directory
- THEN it SHALL contain minimal consumer-facing integration seeds
- AND it SHALL include Vite, Next.js App Router, and Vercel-oriented examples

#### Scenario: Internal example source

- WHEN inspecting `src/Examples/`
- THEN it SHALL represent internal example compositions and supporting tests or stories
- AND it SHALL remain distinct from the top-level `examples/` directory

#### Scenario: Reference-only static surfaces

- WHEN inspecting `src/static/`
- THEN it SHALL contain reference or documentation-oriented assets such as color, grid, typography, or message surfaces
- AND these surfaces SHALL NOT be assumed to be part of the documented package-root API

### Requirement: Storybook and docs structure

The repository SHALL use Storybook and the `docs/` tree as parallel documentation surfaces.

#### Scenario: Storybook content sources

- WHEN Storybook is configured
- THEN it SHALL load content from `src/docs/**/*.mdx`
- AND it SHALL load component stories from `src/**/*.stories.@(js|jsx|ts|tsx)`

#### Scenario: Human-readable docs hub

- WHEN inspecting the top-level docs structure
- THEN `docs/` SHALL contain architecture, audit, spec, guides, patterns, recipes, standards, and AI-oriented documentation sections

### Requirement: Build, test, and CI surfaces

The repository SHALL preserve explicit build, test, and package verification entrypoints.

#### Scenario: Build configuration

- WHEN inspecting the build toolchain
- THEN `vite.config.ts` SHALL define the library bundle entry as `src/index.ts`
- AND the build SHALL externalize React runtime dependencies
- AND the build SHALL emit both ESM and CommonJS bundles plus a separate stylesheet asset

#### Scenario: Test configuration

- WHEN inspecting the test toolchain
- THEN `vitest.config.ts` and `src/setupTests.ts` SHALL define the test environment
- AND tests SHALL run in `jsdom`
- AND SCSS modules SHALL be supported during test execution

#### Scenario: CI verification

- WHEN the CI workflow runs
- THEN it SHALL verify linting, tests, package build, Storybook build, package dry-run contents, and smoke-package validation

## Notes

- This spec is the canonical baseline for the repository structure and package surfaces.
- `docs/` remains the human-readable documentation hub for architecture, guides, recipes, standards, audits, and AI-facing context.
- `openspec/` is reserved for accepted specifications plus proposed and in-flight changes.
- This spec is intended as a baseline for future changes, not as a redesign proposal.
