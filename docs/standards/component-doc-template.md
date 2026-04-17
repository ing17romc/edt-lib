# Component Documentation Template

Use this template when documenting a public component in Storybook or repo docs.

## Purpose

Explain what the component is responsible for and what problem it solves in the system.

## Use When

- describe the intended scenarios
- describe the scale or context where it fits

## Avoid When

- note the cases where another existing component is a better fit
- call out misuse that would create poor UX or duplicate patterns

## Public Props

- document the important public props first
- note defaults and controlled/uncontrolled behavior where relevant
- do not invent props that are not in the type contract

## States

- default
- disabled
- loading
- error
- empty or placeholder states where relevant

## Variants

Document visual or behavioral variants and when each one should be preferred.

## Accessibility

- ARIA expectations
- keyboard behavior
- focus management
- labeling requirements

## Theme and Styling

- whether the component depends on semantic theme tokens
- whether it requires global stylesheet setup
- whether it should inherit surrounding color or spacing context

## SSR and Next.js Considerations

- mention whether the component is safe on the server
- note any client-only behavior or hydration caveat

## Recommended Composition

Show how the component works with existing library components and page structure.

## Anti-patterns

- direct internal imports
- hardcoded tokens when theme variables exist
- misuse of the component outside its intended role

## Testing Notes

- behavior worth covering in unit tests
- interactions worth covering through Storybook stories or play functions
