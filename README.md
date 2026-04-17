# edt-lib

`edt-lib` is a React component library for product UI work built with React, TypeScript, Vite, Sass, and Storybook.

It is designed for teams that want:

- a packageable npm library with a clear public API
- reusable UI primitives and composed components
- a documented theme layer with SSR-safe runtime theming
- a Storybook catalog that doubles as developer documentation
- documentation that is readable by both humans and AI assistants

## Installation

`react` and `react-dom` are peer dependencies.

```bash
npm install edt-lib react react-dom
```

## Styles

Recommended for application consumers:

```tsx
import 'edt-lib/styles.css';
```

Supported for Sass-aware consumers that want the raw stylesheet entry:

```tsx
import 'edt-lib/index.scss';
```

## Quick Start

```tsx
import 'edt-lib/styles.css';
import { Button, ThemeProvider } from 'edt-lib';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Button>Hello</Button>
    </ThemeProvider>
  );
}
```

## ThemeProvider and Theming

Use `ThemeProvider` when the app needs runtime theme switching, `prefers-color-scheme` support, or SSR-safe theme fallback handling.

```tsx
import 'edt-lib/styles.css';
import { Button, ThemeProvider, useTheme } from 'edt-lib';

function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      Active theme: {resolvedTheme}
    </Button>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" ssrFallbackTheme="light">
      <ThemeToggle />
    </ThemeProvider>
  );
}
```

`ThemeProvider` supports:

- `defaultTheme`
- `forcedTheme`
- `enableSystem`
- `storageKey`
- `ssrFallbackTheme`

## SSR, Next.js, and Vercel

- `ThemeProvider` does not read browser-only APIs during render.
- The initial theme can be stabilized on the server with `ssrFallbackTheme`.
- `styles.css` is the lowest-friction import for Next.js App Router and Vite apps.
- `index.scss` remains available when the consumer wants raw Sass entry access.

See the integration guides:

- [Styles and Theme](./docs/guides/styles-and-theme.md)
- [Public API](./docs/architecture/public-api.md)
- [Package Contract](./docs/architecture/package-contract.md)
- [Next.js App Router recipe](./docs/recipes/nextjs-app-router.md)
- [Vite integration recipe](./docs/recipes/vite-integration.md)
- [Vercel deployment recipe](./docs/recipes/vercel-deployment.md)

## Documentation Map

- [Audit](./docs/audit/library-audit.md)
- [Alignment spec](./docs/spec/library-alignment-spec.md)
- [Public API](./docs/architecture/public-api.md)
- [Package contract](./docs/architecture/package-contract.md)
- [Styles and theme](./docs/guides/styles-and-theme.md)
- [Storybook standard](./docs/standards/storybook-standard.md)
- [Component doc template](./docs/standards/component-doc-template.md)
- [Patterns](./docs/patterns/)
- [Recipes](./docs/recipes/)
- [Examples](./examples/)
- [Migration notes](./docs/migrations.md)
- [AI canonical context](./docs/ai/LLMS.md)

## Component Catalog

The public component surface is documented in:

- Storybook for interactive examples and props tables
- [Public API](./docs/architecture/public-api.md) for the canonical package surface
- [Component manifest](./docs/ai/component-manifest.json) for machine-readable metadata

## Development

```bash
npm install
npm run lint
npm run test
npm run build
npm run build-sb
```

Useful commands:

- `npm run storybook`
- `npm run pack:check`

## Release and Publish

Before publishing, verify:

```bash
npm run lint
npm run test
npm run build
npm run build-sb
npm run pack:check
```

The repository also includes publish helpers:

- `npm run publish-npm-patch`
- `npm run publish-npm-minor`
- `npm run publish-npm-major`

## License

ISC
