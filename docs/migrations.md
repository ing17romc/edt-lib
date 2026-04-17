# Migrations

## Current Alignment Notes

This document tracks consumer-facing migration guidance created during the library-alignment pass.

## Import Path Standardization

Preferred:

```tsx
import { Button, ThemeProvider } from 'edt-lib';
```

Avoid:

```tsx
import Button from 'edt-lib/dist/...';
import ThemeProvider from 'edt-lib/src/...';
```

## Style Entry Standardization

Recommended moving forward:

```tsx
import 'edt-lib/styles.css';
```

Still supported:

```tsx
import 'edt-lib/index.scss';
```

## React Dependency Contract

`react` and `react-dom` are peer dependencies. Consumers should already provide them explicitly in the application.

## Documentation Contract

When a component changes, update all of the following together:

- public exports if the public API changed
- Storybook stories
- relevant docs and recipes
- tests
- AI manifest entries when behavior or props change
