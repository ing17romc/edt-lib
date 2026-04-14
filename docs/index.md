# edt-lib Documentation

## Overview

`edt-lib` is a React component library built with `TypeScript`, `Vite`, `Sass`, and `Storybook`.

The library now uses:

- semantic theme tokens
- `ThemeProvider` with `light`, `dark`, and `system`
- SSR-friendly runtime theming
- component-level style encapsulation with `SCSS Modules`

## Installation

```bash
npm install edt-lib
```

## Base Setup

Import the global stylesheet once in your app:

```tsx
import 'edt-lib/index.scss';
```

Wrap your application with `ThemeProvider` when you want runtime theme control:

```tsx
import { ThemeProvider } from 'edt-lib';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      {/* app */}
    </ThemeProvider>
  );
}
```

## Theme System

The public theme API is based on semantic CSS variables and a provider that works in SSR environments.

Main props:

- `defaultTheme`
- `forcedTheme`
- `enableSystem`
- `storageKey`
- `ssrFallbackTheme`

Use the `useTheme` hook inside the provider to read and update the active mode.

## Styling Architecture

The styling system is documented in [styling-architecture.md](./styling-architecture.md).

Summary:

- shared tokens live in `src/styles`
- runtime values are exposed through CSS variables
- component styles are isolated with `SCSS Modules`
- components must not import styles from other components
- `npm run lint:scss` checks the SCSS architecture contract

## Storybook

Storybook includes a global theme toolbar and component stories for visual validation in `light`, `dark`, and `system` modes.

Run it locally with:

```bash
npm run sb
```

## Validation

Recommended checks during development:

```bash
npm run lint:ts
npm run lint:scss
npm test
npm run build
```

## Repository Structure

- `src/components`: reusable UI components
- `src/static`: showcase/reference components
- `src/styles`: shared style system
- `docs`: repository documentation

## Support

- Storybook: `http://localhost:6006` during local development
- Repository: `https://github.com/ing17romc/edt-lib`
