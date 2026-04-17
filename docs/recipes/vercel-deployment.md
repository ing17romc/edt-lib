# Recipe: Vercel Deployment

## Goal

Deploy an application that consumes `edt-lib` on Vercel with a stable style and theme setup.

## Recommendations

1. Prefer `import 'edt-lib/styles.css';` in the app shell.
2. Keep `ThemeProvider` at the root layout or root app component.
3. Avoid internal imports from the library source tree.
4. Validate the production build locally before deploy.

## For Next.js

- Import `styles.css` in `app/layout.tsx`.
- Wrap the tree in `ThemeProvider`.
- Use `ssrFallbackTheme` when you need deterministic first paint.

## For Vite

- Import `styles.css` in `src/main.tsx`.
- Ensure the Vercel build command runs the app build after installing dependencies.

## Smoke Checklist

- package root imports resolve
- stylesheet import resolves
- production build completes
- theme provider renders without hydration surprises
