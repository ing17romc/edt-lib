# 🛠️ edt-lib Project Instructions

## 📁 Component Folder Structure

All components must follow this folder and file structure:

```
📁 src/**/ComponentName/
├── tests/
│   ├── ComponentName.test.tsx
│   └── mocks.tsx
├── stories/
│   ├── ComponentName.stories.tsx
│   └── mocks.tsx
├── styles/
│   └── ComponentName.scss
├── index.tsx
└── types.tsx
```

Global styles folder:

```
📁 src/styles/
├── palette.scss
├── typography.scss
└── spacing.scss
```

---

## 🔧 Tool Stack

- **Node.js**: 22.x (see `.nvmrc`)
- **Build**: Vite 8 (`vite build`) — produces ES and CJS bundles in `dist/`
- **Tests**: Vitest 4 with jsdom — use `vi.*` (not `jest.*`) for mocks and spies
- **Lint**: ESLint 10 with flat config (`eslint.config.js`) — no `.eslintrc` exists
- **Storybook**: Storybook 9 (`@storybook/react-vite`) — import `Meta`, `StoryObj`, etc. from `@storybook/react-vite`

### Main Commands

```bash
npm run build          # vite build → dist/
npm run test           # vitest run (single pass)
npm run test:watch     # vitest (watch mode)
npm run lint:js        # eslint . --fix
npm run storybook      # storybook dev -p 6006
npm run build-storybook  # storybook build
```

---

## 🚫 General Rules

- Code must be clean, simple, and easily reusable.
- No third-party dependencies should be installed.
- Code must not generate *warnings* or *lint* errors, neither in `.scss` nor `.ts/.tsx` files.
- Component and prop descriptions must follow a consistent format across the entire codebase.

---

## 📐 Typing

- Use `enums` instead of constants whenever possible.
- Group component-specific `types`, `enums`, and `interfaces` in its `types.tsx` file.
- If a type is reusable across multiple components, move it to the global `src/types/` folder.

---

## 🎨 Styles

- Maintain visual consistency across all components.
- If a color palette is defined (e.g., blue tones), all components must respect it.
- Centralize global styles in `src/styles/`: colors in `palette.scss`, typography in `typography.scss`, spacing in `spacing.scss`.
- Use `color.adjust()` instead of `darken()` or `lighten()` and add `@use 'sass:color'` at the top of the file.
- Follow Dart Sass 2.0.0 recommendations.

---

## 🧪 Tests

- Unit tests must be simple and easy to understand.
- Use **Vitest** (`vi.*`) — never `jest.*`.
- Create a `mocks.tsx` file in `tests/` with the props and configurations needed for test cases.
- Reuse values defined in `enums` within test and mock files.

---

## 📚 Storybook

- Visual documentation must have a uniform style across all components.
- Import `Meta`, `StoryObj`, `StoryFn`, `Preview` from **`@storybook/react-vite`** (not from `@storybook/react`).
- In the `preview.ts` file, the backgrounds configuration uses the new format: `options` field (not `values`) and `initialGlobals` for the default value.
- Reuse `enum` values in both `stories` and `mocks` files.
- Stories must be simple and straightforward.
- Create a `mocks.tsx` file in the `stories/` folder with the necessary prop configurations.
