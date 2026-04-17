# Composition Patterns

## Build from the Public Root

All consumer-facing examples should start from:

```tsx
import { Button, Card, ThemeProvider } from 'edt-lib';
```

Avoid composing applications with internal imports from `src/` or `dist/`.

## Use ThemeProvider at the App Shell

Composition should normally look like:

1. import a public stylesheet once
2. wrap the app shell in `ThemeProvider`
3. compose layout, navigation, and feature components inside that shell

## Prefer Existing Primitives Over One-off Wrappers

Examples:

- use `Button`, `IconButton`, and `TextButton` for action hierarchy
- use `Message` or `Snackbar` for feedback instead of ad hoc inline banners
- use `Layout`, `NavBar`, and `Footer` for page structure before inventing a custom shell

## Keep Visual Tokens Semantic

When composing multiple components:

- rely on the shared stylesheet and theme variables
- avoid inline color hardcoding for library-owned surfaces
- treat `ThemeProvider` as the theme contract boundary
