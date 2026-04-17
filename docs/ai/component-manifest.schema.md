# Component Manifest Schema

`docs/ai/component-manifest.json` is a machine-readable catalog for public components.

## Top-level shape

```json
{
  "package": "edt-lib",
  "version": "2.18.0",
  "entrypoints": {},
  "components": []
}
```

## Top-level fields

- `package`: npm package name
- `version`: package version the manifest was authored against
- `entrypoints`: public package entrypoints and style entrypoints
- `components`: array of public component metadata

## Component fields

- `name`: public component name
- `description`: short functional description
- `importPath`: official import path, normally `edt-lib`
- `category`: one of the repo’s public categories such as `action`, `input`, `feedback`, `navigation`, `layout`, `display`, or `utility`
- `mainProps`: important public props or prop groups
- `variants`: relevant visual or behavioral variants
- `states`: meaningful runtime or UI states
- `requiredProviders`: providers the consumer should have in place, if any
- `styleRequirement`: how styles are expected to be imported
- `compatiblePatterns`: higher-level patterns or recipes where the component fits naturally
- `antiPatterns`: discouraged uses
- `ssrNotes`: SSR or hydration expectations
- `accessibilityNotes`: public accessibility expectations
- `examples`: repo paths that demonstrate usage
- `deprecated`: boolean
- `replacement`: replacement component or pattern if deprecated, otherwise `null`

## Maintenance Rule

When a component’s public contract changes, update the manifest in the same change set as:

- source code
- Storybook docs
- tests
- human-readable docs when needed
