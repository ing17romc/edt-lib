# Package Contract

## Package Shape

`edt-lib` is published as a React library with:

- ESM output: `dist/index.es.js`
- CJS output: `dist/index.cjs.js`
- declaration output: `dist/index.d.ts`
- compiled stylesheet: `dist/styles.css`
- raw Sass entry: `index.scss`

## Package Entry Contract

`package.json` exports:

- `"."` for JavaScript and types
- `"./styles.css"` for compiled global styles
- `"./index.scss"` for raw Sass entry
- `"./package.json"` for metadata-aware tooling

## Peer Dependencies

Consumers must provide:

- `react`
- `react-dom`

These are peer dependencies because `edt-lib` must not ship its own React runtime copy into consuming applications.

## Why the Style Contract Is Explicit

The library build emits CSS as a separate asset. JavaScript consumers are therefore expected to import a public stylesheet entry explicitly.

Recommended:

```tsx
import 'edt-lib/styles.css';
```

Supported:

```tsx
import 'edt-lib/index.scss';
```

## What Gets Published

The npm tarball includes:

- `dist/` build artifacts
- `index.scss`
- `src/styles/*` because the raw Sass entry depends on those files

The tarball does not treat internal source modules as public JavaScript API.

## Consumer Compatibility Expectations

`edt-lib` is intended to work cleanly in:

- React apps created with Vite
- Next.js apps, including App Router
- Vercel-hosted deployments

## Operational Rules

1. `main`, `module`, `types`, and `exports` must all point at files that are actually generated.
2. README examples must use only exported package paths.
3. Storybook preview wiring should mirror public stylesheet and provider usage.
4. Any new public subpath must be declared in `exports` and validated in a smoke test.
