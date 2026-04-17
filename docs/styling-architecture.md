# Styling Architecture

This document is kept as a historical bridge. The current normative guide is:

- [docs/guides/styles-and-theme.md](./guides/styles-and-theme.md)

## Current Contract Summary

- Prefer `import 'edt-lib/styles.css';`
- Support `import 'edt-lib/index.scss';` for Sass-aware consumers
- Keep shared tokens in `src/styles`
- Use semantic CSS variables for runtime theming
- Do not import styles from other components
- Let `ThemeProvider` own runtime theme mode switching

## Validation

`npm run lint:scss` validates the SCSS architecture contract and blocks disallowed cross-component style imports.
