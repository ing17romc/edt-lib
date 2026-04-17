# Public API

## Canonical Entry

The official JavaScript entrypoint for `edt-lib` is:

- `src/index.ts` in source
- `edt-lib` at package-consumer level

Do not treat any other repo file as the public package root.

## Official Consumer Imports

Use:

```tsx
import { Button, ThemeProvider } from 'edt-lib';
```

Do not use:

```tsx
import Button from 'edt-lib/dist/...';
import ThemeProvider from 'edt-lib/src/...';
```

## Official Style Imports

Recommended:

```tsx
import 'edt-lib/styles.css';
```

Supported for Sass-aware consumers:

```tsx
import 'edt-lib/index.scss';
```

## Public Export Categories

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

## Export Policy

`edt-lib` publishes a single root API. Public usage should come from package root imports, not internal file paths.

The root API intentionally re-exports:

- components
- documented public component types
- selected enums and shared primitives used by consumers

The package does not treat the following as public API:

- `src/Examples/*`
- `src/static/*`
- `dist/*` file paths
- private Storybook mock modules

## Compatibility Notes

- Components are exported as named exports from the package root.
- `ThemeProvider` and `useTheme` are safe to use in SSR-capable React apps.
- Style setup is explicit: component usage assumes the consumer has imported one of the public stylesheet entries.

## Contract Rules

When adding or changing a component:

1. Export it from `src/components/index.ts`.
2. Re-export it from `src/index.ts` through the canonical root.
3. Document it in Storybook.
4. Update relevant recipes and AI manifest metadata.
5. Keep README examples aligned with the actual package root import.
