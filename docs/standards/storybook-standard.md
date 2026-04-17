# Storybook Standard

## Goal

Storybook in `edt-lib` is not only a component gallery. It is part of the package contract and should explain how consumers actually use the library.

## Required Story Metadata

Every public component story file should provide:

- `title`
- `component`
- `tags: ['autodocs']`
- a component-level docs description
- `argTypes` for important public props
- a `Default` story that mirrors the recommended usage path

## Story Categories

Storybook should document at least these layers:

- library-level docs pages
- component reference stories
- composition stories
- recipe-style usage examples

## Layout Rules

Use `layout: 'centered'` for:

- buttons
- icons
- small inputs
- isolated feedback primitives

Use `layout: 'padded'` for:

- most standard components
- composed examples
- form sections

Use `layout: 'fullscreen'` for:

- `Layout`
- `NavBar`
- `Footer`
- page-shell and dashboard compositions

The repo default is `padded`, and stories should opt into `centered` or `fullscreen` intentionally.

## Documentation Expectations Per Component

Each component doc page should cover:

- purpose
- when to use it
- notable props
- variants and states
- accessibility notes
- theming notes
- SSR considerations if relevant
- composition guidance
- anti-patterns if relevant

## Source-of-Truth Rule

Storybook examples must reflect the same public API used by:

- README
- examples
- package exports
- AI manifest

If Storybook needs internal source imports for authoring or local testing, the displayed usage guidance must still point to the public package root.
