# Styling Architecture

## Goals

- Keep component styles isolated
- Centralize design decisions in shared tokens
- Support `light`, `dark`, and `system` themes
- Preserve compatibility with `React`, `Next.js`, and SSR

## Layers

### 1. Global style entry

Import the library stylesheet once:

```tsx
import 'edt-lib/index.scss';
```

### 2. Shared style system

Shared files live in `src/styles`:

- `palette.scss`
- `typography.scss`
- `spacing.scss`
- `set-root.scss`
- global utility layers such as tables or grids

### 3. Component styles

Each component owns its styles through `SCSS Modules`.

Allowed base imports:

```scss
@use 'sass:map';
@use 'sass:color';
@use '../../../styles/palette' as *;
@use '../../../styles/typography' as *;
@use '../../../styles/spacing' as *;
```

Rules:

- Do not import styles from other components
- Prefer semantic CSS variables at runtime
- Avoid hardcoded colors in component styles
- Use shared spacing, typography, and state tokens
- `npm run lint:scss` also validates this architecture automatically

## Theming

`ThemeProvider` applies `data-theme="light"` or `data-theme="dark"` and resolves semantic CSS variables declared in `src/styles/set-root.scss`.

Runtime theme API:

- `defaultTheme`
- `forcedTheme`
- `enableSystem`
- `storageKey`
- `ssrFallbackTheme`

## SSR Notes

- No browser-only theme reads during render
- Theme persistence is restored after mount
- Use `ssrFallbackTheme` when a stable initial server theme is required

## Migration Standard

When migrating a component:

1. Replace hardcoded colors with semantic variables
2. Keep states consistent with the shared token system
3. Remove cross-component style coupling
4. Validate in Storybook for both light and dark themes
5. Run `lint`, `test`, and `build`
