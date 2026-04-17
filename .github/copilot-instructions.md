# Copilot Instructions

Canonical repo context: [docs/ai/LLMS.md](../docs/ai/LLMS.md)

Repository-specific rules:

- use public imports from `edt-lib`
- prefer `edt-lib/styles.css` in app examples unless raw Sass is explicitly required
- do not import from `src/` or `dist/` in consumer-facing code
- when adding or changing a public component, update Storybook, tests, docs, and `docs/ai/component-manifest.json`
