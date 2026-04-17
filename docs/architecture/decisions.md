# Architecture Decisions

## ADR-001: Single source package entry

Decision:

- `src/index.ts` is the only source-level package root.

Why:

- removes ambiguity with stale root entry files
- gives Vite and TypeScript a shared source of truth

## ADR-002: Explicit root named exports

Decision:

- the public package surface is assembled through explicit root exports in `src/components/index.ts`

Why:

- `export *` alone did not expose default-only components
- named imports are the expected ergonomics for UI libraries

## ADR-003: Dual public stylesheet entries

Decision:

- recommend `edt-lib/styles.css`
- keep `edt-lib/index.scss` supported

Why:

- compiled CSS is the safest default for most consumers
- raw Sass remains useful for advanced integrations

## ADR-004: React as peer dependency

Decision:

- `react` and `react-dom` are peer dependencies, not runtime dependencies

Why:

- avoids duplicate React copies
- matches npm best practices for React libraries

## ADR-005: Canonical AI context

Decision:

- `docs/ai/LLMS.md` is the canonical AI-facing source of truth

Why:

- prevents assistant-specific documents from drifting apart
- supports reuse across Copilot, Claude, Codex, Gemini, and generic agents

## Known Technical Debt

- Storybook build succeeds but still reports oversized preview chunks. That is not blocking package correctness, but it is a valid optimization target.
