# AGENTS.md

Primary repo context lives in [docs/ai/LLMS.md](./docs/ai/LLMS.md).

Minimum repo-specific rules:

- use package-root imports from `edt-lib`
- prefer `edt-lib/styles.css` in consumer examples
- only use `edt-lib/index.scss` when the task explicitly needs raw Sass
- when changing a public component, update exports, stories, tests, docs, and the component manifest together
