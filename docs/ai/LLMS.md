# `edt-lib` Canonical AI Context

This file is the canonical AI-facing source of truth for the repository.

If another assistant-specific file exists, it should stay thin and point back here instead of duplicating the full contract.

## Library Purpose

`edt-lib` is a React component library published to npm. It provides reusable UI primitives, composed components, a shared stylesheet contract, and an SSR-safe runtime theming layer through `ThemeProvider`.

## Stack

- React 19
- TypeScript
- Vite library build
- Sass and SCSS Modules
- Storybook
- Vitest

## Canonical Public API

### JavaScript entry

Consumers import from:

```tsx
import { Button, ThemeProvider } from 'edt-lib';
```

Source of truth in the repo:

- `src/index.ts`
- `src/components/index.ts`

Do not treat any other file as the package root.

### Public style entries

Recommended:

```tsx
import 'edt-lib/styles.css';
```

Supported for Sass-aware consumers:

```tsx
import 'edt-lib/index.scss';
```

### Peer dependencies

Consumers must provide:

- `react`
- `react-dom`

## Public Component Catalog

### Actions and controls

- `Button`
- `IconButton`
- `TextButton`
- `CheckButton`
- `RadioButton`
- `Switch`

### Form inputs

- `TextBox`
- `TextArea`
- `Selector`
- `DatePicker`

### Feedback and overlays

- `Message`
- `Snackbar`
- `Modal`
- `Spinner`
- `Tooltip`
- `Tag`

### Navigation and layout

- `Breadcrumb`
- `Tabs`
- `Pagination`
- `Menu`
- `FloatingMenu`
- `Layout`
- `NavBar`
- `Footer`

### Display and composition

- `Card`
- `Title`
- `Thumbnail`
- `MoneyAmount`
- `CarouselSnapped`
- `ListControl`
- `Icon`

### Utilities

- `ThemeProvider`
- `useTheme`
- `ComponentSize`
- `ComponentVariant`
- icon enums and `ALL_ICONS`

## Import Rules

Always do:

- import public components from `edt-lib`
- import styles from `edt-lib/styles.css` unless the task explicitly needs raw Sass

Never do this in consumer-facing code or docs:

- import from `src/*`
- import from `dist/*`
- import private story mocks
- invent subpath exports that are not declared in `package.json`

## Theme Rules

- `ThemeProvider` is the runtime source of truth for theme mode switching.
- Use `defaultTheme`, `forcedTheme`, `enableSystem`, `storageKey`, and `ssrFallbackTheme` from the public API only.
- Prefer semantic theme variables and existing stylesheet tokens over hardcoded colors.

## SSR and Next.js Rules

- `ThemeProvider` is SSR-safe and avoids browser-only reads during render.
- For deterministic server output, use `ssrFallbackTheme`.
- Prefer `styles.css` in Next.js and App Router examples.
- Keep provider placement high in the tree.

## Compatibility Targets

The library should be easy to consume in:

- React apps
- Next.js apps
- Vite apps
- Vercel-hosted deployments

## Recommended Patterns

- Use package root imports in all public examples.
- Import a public stylesheet exactly once at the app shell.
- Compose page shells from `Layout`, `NavBar`, and `Footer`.
- Use Storybook and `docs/recipes/*` as primary usage references.
- Reuse existing components before proposing new ones.

## Anti-patterns

- Direct imports from internal source paths in consumer examples
- Hardcoded colors when the shared theme contract already covers the use case
- Adding props that do not exist in component types
- Recreating an existing component under a new name without a strong reason
- Updating component behavior without updating docs, stories, tests, and manifest metadata

## Accessibility Rules

- Preserve semantic HTML when possible.
- Do not remove labels, `aria-*`, or keyboard interactions from interactive components.
- Prefer existing accessibility behavior in component implementations over ad hoc wrappers.
- When adding or changing an interactive component, validate keyboard and screen-reader implications.

## Storybook Rules

- Treat Storybook as package documentation, not only a visual playground.
- Use `tags: ['autodocs']` on public component stories.
- Keep docs descriptions aligned with the exported package contract.
- Use `layout: 'fullscreen'` for shell components and `layout: 'centered'` only for isolated primitives.

## Testing Rules

When changing a public component:

1. update its tests
2. update its stories
3. update relevant recipes and docs
4. update `docs/ai/component-manifest.json` if public behavior or props changed

## Repo Conventions

- `src/index.ts` is the package root source entry.
- `src/components/index.ts` is the public export assembly layer.
- `docs/audit/` captures observed reality
- `openspec/changes/` captures proposed and in-flight changes
- `openspec/specs/` captures accepted repository specifications
- `docs/architecture/` holds normative package and system docs
- `docs/recipes/` and `docs/patterns/` are task-oriented usage docs

## Adding a New Component

When proposing or implementing a new public component:

1. confirm an existing public component does not already cover the use case
2. place the component under `src/components/<ComponentName>/`
3. export it from `src/components/index.ts`
4. document it in Storybook
5. add tests
6. add or update a recipe if it changes real integration guidance
7. add an entry to `docs/ai/component-manifest.json`

## Updating a Component

If a public prop, variant, or behavior changes, update:

- source implementation
- public exports if relevant
- Storybook docs and stories
- tests
- recipes or patterns if integration guidance changes
- migration notes if consumers need to change code

## Examples and Recipes

Use these first when generating integration code:

- `examples/vite-react`
- `examples/nextjs-app-router`
- `examples/vercel-ready`
- `docs/recipes/*.md`

## Deprecated Components

No public component is currently marked deprecated in the aligned contract.
