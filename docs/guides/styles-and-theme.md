# Styles and Theme

## Recommended Style Import

For application consumers, prefer:

```tsx
import 'edt-lib/styles.css';
```

Why:

- no Sass toolchain is required in the consumer app
- works cleanly in Vite, Next.js, and Vercel-hosted apps

## Raw Sass Entry

If the consumer deliberately wants the raw Sass entry, use:

```tsx
import 'edt-lib/index.scss';
```

This path is part of the public package contract and is exported explicitly from `package.json`.

## ThemeProvider

`ThemeProvider` is the runtime theming layer for:

- `light`
- `dark`
- `system`

Basic usage:

```tsx
import 'edt-lib/styles.css';
import { ThemeProvider } from 'edt-lib';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" ssrFallbackTheme="light">
      {children}
    </ThemeProvider>
  );
}
```

## SSR Guidance

`ThemeProvider` is designed so that:

- browser-only theme APIs are not read during render
- the initial server theme can be stabilized via `ssrFallbackTheme`
- system-theme updates happen after mount

Recommended SSR setup:

1. Import `styles.css` once in the app shell or root layout.
2. Wrap the app with `ThemeProvider`.
3. Use `ssrFallbackTheme` if you want deterministic server output before hydration.

## Storybook Alignment Rule

Storybook should use the same public style entry that consumers use whenever possible. In this repository, preview imports the public `index.scss` entry rather than reaching into `src/styles/index.scss` directly.

## Consumer Rules

- Import a public stylesheet once at app root.
- Do not import component-private SCSS modules from consumer code.
- Do not hardcode colors when semantic theme variables already exist.
- Treat `ThemeProvider` as the single runtime source for theme mode switching.
