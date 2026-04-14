# edt-lib

React component library built with `React`, `TypeScript`, `Vite`, `Sass`, and `Storybook`.

## Features

- Reusable UI components for React applications
- Global style entry with semantic theme tokens
- `ThemeProvider` with `light`, `dark`, and `system` modes
- SSR-friendly usage for React and Next.js
- Storybook documentation and automated tests

## Installation

```bash
npm install edt-lib
```

## Styles

Import the global stylesheet once in your app entry:

```tsx
import 'edt-lib/index.scss';
```

## Quick Start

```tsx
import 'edt-lib/index.scss';
import { Button, ThemeProvider } from 'edt-lib';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Button variant="primary">Hello</Button>
    </ThemeProvider>
  );
}
```

## Theme System

`ThemeProvider` exposes a runtime theme contract based on semantic CSS variables and supports SSR-safe rendering.

```tsx
import { ThemeProvider, useTheme } from 'edt-lib';

function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Active theme: {resolvedTheme}
    </button>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <ThemeToggle />
    </ThemeProvider>
  );
}
```

Available props:

- `defaultTheme`: `'light' | 'dark' | 'system'`
- `forcedTheme`: force a specific resolved theme
- `enableSystem`: enables `prefers-color-scheme`
- `storageKey`: localStorage key for persisted preference
- `ssrFallbackTheme`: stable SSR fallback before hydration

## Styling Architecture

- Component styles are isolated with `SCSS Modules`
- Shared design tokens live in `src/styles`
- Runtime theme values are exposed through semantic CSS variables
- Components should not import styles from other components
- The global stylesheet entry point is `edt-lib/index.scss`

## Next.js / SSR Notes

- `ThemeProvider` avoids browser-only access during render.
- Theme persistence is restored after mount.
- When rendering on the server, use `ssrFallbackTheme` if you want a specific initial theme.

## Included Components

- `Button`
- `IconButton`
- `TextButton`
- `TextBox`
- `TextArea`
- `Selector`
- `CheckButton`
- `RadioButton`
- `Message`
- `Snackbar`
- `Modal`
- `Tabs`
- `Tag`
- `Tooltip`
- `Layout`, `NavBar`, `Footer`
- `ThemeProvider`

## Development

```bash
npm install
npm run sb
npm test
npm run build
```

## Storybook

Storybook is available in this repository and includes global theme switching for `light`, `dark`, and `system`.

## License

ISC
