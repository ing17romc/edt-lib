# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [Unreleased]

## [2.19.0] - 2026-04-16

### Documentation
- Added an architecture-level documentation set covering public API, package contract, CI quality gates, styles and theme guidance, Storybook standards, component doc template, migration notes, patterns, and recipes
- Added canonical multi-AI context in `docs/ai/LLMS.md` plus thin adapter files for AGENTS, CLAUDE, CODEX, GEMINI, and GitHub Copilot
- Added a machine-readable component manifest and schema documentation
- Added Storybook MDX documentation pages for Getting Started, Theme and SSR, Patterns, Recipes, and Migration

### Package Contract
- Consolidated the package root entrypoint around `src/index.ts`
- Fixed named root exports so documented package imports match the real bundle output
- Added generated TypeScript declarations to the published contract
- Exported both `edt-lib/styles.css` and `edt-lib/index.scss` as public stylesheet entries
- Moved `react` and `react-dom` to `peerDependencies`

### Tooling
- Added a tarball smoke test that installs the packed library into a temporary consumer and validates root imports plus stylesheet subpaths
- Expanded CI quality gates to cover lint, tests, build, Storybook build, tarball validation, and package smoke usage

## [2.18.0] - 2026-04-13

### Improvements
- Migrated multiple component states to semantic CSS theme variables across `DatePicker`, `FloatingMenu`, `Menu`, `Selector`, `Tabs`, `TextArea`, and `TextBox`
- Added SCSS architecture validation to `lint:scss` to block disallowed cross-component style imports
- Added repository styling architecture documentation and refreshed the main docs to reflect the current theming system

### Fixes
- Updated disabled, surface, and error token usage to align component styles with the shared theme contract
- Made the `release-sb` script work on Windows by replacing the Unix-only cleanup step with a cross-platform Node command

## [2.17.2] - 2026-04-13

### Refactor
- Moved all components from `components/ToDo/` to `components/` root, eliminating the `ToDo` subfolder
- Updated all relative imports in moved components (`types`, `classNames`, SCSS palette/typography/spacing paths)
- Updated `components/index.tsx` exports to remove `ToDo/` prefix

## [2.17.1] - 2026-04-13

### Fixes
- Fixed SCSS relative paths (`../../../../styles/` → `../../../styles/`) in all components moved from `ToDo/`

## [2.17.0] - 2026-04-13

### Improvements
- Migrated component tests to use `composeStory` from `@storybook/react-vite`, replacing render+props unit tests with Storybook play functions across all 31 components
- Added `play` functions to all `Default` stories for Card, TextBox, TextArea, TextButton, Selector, Modal, Pagination, and all 14 ToDo components (Breadcrumb, CarouselSnapped, DatePicker, FloatingMenu, ListControl, Menu, Message, MoneyAmount, Snackbar, Tabs, Thumbnail, Tooltip, Switch, Tag)
- Test suite grows to 336 tests across 42 test files, all passing

### Infrastructure
- Added GitHub Actions CI workflow (`.github/workflows/ci.yml`) that runs TypeScript check and Vitest on every push and pull request

## [2.16.0] - 2026-04-10

### Documentation
- Standardized component, utility, and static documentation in English across props, inline docs, Storybook descriptions, and helper copy
- Updated Storybook examples and demo content to use a consistent English naming pattern

### Improvements
- Standardized accessibility and UI labels in examples and tests across interactive components such as Modal, Pagination, Spinner, Tooltip, Tabs, Snackbar, and related ToDo components
- Improved Storybook typing in `TextArea` and `TextBox` stories by aligning meta and story definitions with `Meta` and `StoryObj` patterns used in the library

### Fixes
- Updated unit tests, mocks, and snapshots to match the new English-facing labels and example content
- Added missing Storybook metadata where needed to keep docs generation consistent

## [2.15.0] - 2026-04-10

### Documentation
- Added comprehensive Storybook Docs for all components, layouts, statics, and tables with a consistent English writing pattern
- Added `parameters.docs.description.component` to every component story
- Added English `argTypes` with `table.type.summary` and `table.defaultValue.summary` metadata to all components

### Improvements
- Replaced `Math.random()` with `useId()` hook in `TextArea` and `TextBox` components for stable, SSR-safe ID generation
- Improved `FloatingMenu` accessibility: events are now injected onto the trigger element via `cloneElement` instead of a wrapper div
- Improved `ListControl` accessibility: added keyboard (`onKeyDown`) handler to list items

### Fixes
- Fixed `ReferenceError: vi is not defined` in Storybook story mocks (`Snackbar`, `DatePicker`, `Message`) — replaced `vi.fn()` with `() => {}`
- Fixed wrong package import `@storybook/react` → `@storybook/react-vite` in multiple story files
- Fixed `useState` inside Storybook `render()` functions (React Hooks rules violation) by extracting named components
- Removed unused imports across multiple story and component files

## [2.13.0] - 2025-08-01

### Improvements
- Unified the use of `ComponentSize` in `Icon`, `Modal`, and `Selector` components
- Improved consistency of size controls in Storybook
- Updated documentation to reflect type changes

### Fixes
- Fixed TypeScript error in the `Selector` component
- Fixed size control in `Icon` stories
- Updated test mocks to consistently use `ComponentSize`

## [2.12.0] - 2025-07-31

### Improvements
- Complete centralization of `ComponentSize` usage across all components
- Updated Storybook stories to consistently use `ComponentSize`
- Improved property documentation in components
- Standardized `size` property documentation across all components

### Fixes
- Fixed TypeScript errors in Storybook stories
- Removed duplicate enums in favor of centralized ones
- Fixed linting errors in SCSS files

### Improvements
- Updated components to use centralized enums (`ComponentSize` and `ComponentVariant`)
- Improved code consistency by standardizing the use of sizes and variants
- Updated unit tests to reflect enum changes

### Fixes
- Fixed error in `TextButton` where `ButtonVariant.PRIMARY` was `undefined`
- Updated mock and story files to use centralized enums
- Fixed imports in multiple components to use correct enums

## [2.10.0] - 2025-07-17

### Improvements
- Migrated Icon component to use Material Icons from Google Fonts
- Improved Icon component accessibility
- Updated unit tests to support the new implementation

### Refactoring
- Removed custom SVG in favor of Material Icons
- Improved Icon component style structure
- Updated Storybook documentation

## [2.9.9] - 2025-07-17

### Improvements
- Unified Card component styles into a single file
- Improved organization of Storybook-specific styles

### Refactoring
- Removed redundant CSS files
- Improved Card component style structure

## [2.9.8] - 2025-07-17

### Improvements
- Added dropdown controls for `variant` and `size` properties in Button and CheckButton components in Storybook
- Improved controls documentation in the arguments table

### Fixes
- Removed unused `style` property from Card component

## [2.9.7](https://github.com/ing17romc/edt-lib/compare/v2.9.6...v2.9.7) (2025-07-17)

## [2.9.5] - 2025-07-07

### `Fixed`
- **Components**:
  - Fixed TypeScript errors in Button and CheckButton components
  - Improved typing of onClick and onChange event handlers
  - Removed unused functions file (functions.tsx)
  - Updated tests to reflect type changes

## [2.9.4] - 2025-07-07

### `Updated`
- **Dependencies**:
  - Updated `sass` to version `^1.80.0`
  - Updated Storybook dependencies to version `^8.1.0`
  - Updated `@testing-library/react` to version `^15.0.1`
  - Updated `@testing-library/jest-dom` to version `^6.4.3`

### `Fixed`
- **Workflows**:
  - Updated workflows for patch and minor version management
  - Improved workflow documentation

---

## [2.9.2] - 2025-07-07

### `Updated`
- **Dependencies**:
  - Updated `sass` to version `^1.79.0`
  - Updated Storybook dependencies to version `^8.0.0`
  - Updated `@testing-library/react` to version `^15.0.0`
  - Updated `@testing-library/jest-dom` to version `^6.4.2`
  - Updated `@types/jest` to version `^29.5.12`

### `Fixed`
- Resolved dependency conflicts between Storybook 8 and React 19
- Fixed TypeScript configuration to support updated versions


## [2.8.14] - 2025-07-07

### `Fixed`
- **`Button`**: Fixed build errors and improved documentation
- **`Icon`**: Updated types and fixed import issues
- **`IconButton`**: Improved accessibility and fixed style issues
- **`Selector`**: Fixed type errors and improved event handling
- **`Spinner`**: Optimized performance and fixed display issues
- **`Title`**: Improved typography and fixed alignment issues
- **`Message`**: Updated component to use latest React features

### `Refactor`
- Extracted common utilities to `src/utils/` directory
- Updated dependencies in `package.json`
- Improved component documentation

## [2.8.13] - 2025-07-05

### `Documentation`
- **`README.md`**:
  - Updated main documentation with clearer and more complete information
  - Added available components section with descriptions
  - Improved installation and configuration instructions
  - Added project status badges
- **`/docs`**:
  - Completely rewritten technical documentation
  - Added detailed installation and configuration guide
  - Included documentation on themes and custom styles
  - Added contribution guide with code standards

## [2.8.12] - 2025-07-05

### `Fixed`
- **`TableWithPagination`**:
  - Fixed event handling and types in the component
  - Improved pagination state management
  - Updated tests for greater coverage and clarity
  - Removed unused code

### `Refactor`
- **`Message`**:
  - Improved type handling in tests
  - Updated assertions to use RGB values instead of color names

## [2.8.11] - 2025-07-04

### `Fixed`
- **`Message`**:
  - Fixed unary operator error in SCSS styles
  - Updated `map-get` to `map.get` for modern Sass compatibility
  - Improved negative margin handling
  - Fixed font size in responsive mode

## [2.8.10] - 2025-07-04

### `Fixed`
- **`Message`**:
  - Fixed undefined SCSS variables in the Message component
  - Replaced `lighten()` with `color.adjust()` for better compatibility
  - Improved style and spacing consistency
  - Fixed title font weight using the correct variable

## [2.8.9] - 2025-07-04

### `Added`
- **`Message Component`**:
  - Added static `Message` component with support for different types (success, info, warning, danger)
  - Included unit test files and Storybook documentation
  - Added component development rules documentation

### `Fixed`
- **`Linting`**:
  - Fixed TypeScript errors in existing components
  - Improved types for better type safety
  - Fixed JSX compatibility issues in TypeScript files


## [2.8.8] - 2025-07-03

### `Added`
- **`Static Components`**:
  - Added static components: `Grid` and `Typography` with their respective styles and documentation
  - Included test files and stories for both components

## [2.8.7] - 2025-07-03

### `Removed`
- **`Static Components`**:
  - Removed static components: `Color`, `Grid`, `Message`, and `Typography`
  - Removed associated test and style files

### `Fixed`
- **`Dependencies`**:
  - Updated dependencies to resolve version conflicts
  - Improved project cleanup in the `clean` script

## [2.8.6] - 2025-07-03

### `Fixed`
- **`Configuration`**:
  - Fixed TypeScript configuration to use absolute paths from 'src'.
  - Updated Storybook configuration to improve module resolution.
  - Fixed type errors in components.

## [2.8.5] - 2025-07-03

### `Refactor`
- **`Styles`**:
  - Updated import paths in SCSS files to use relative paths instead of 'src' alias.
  - Improved Vite configuration in Storybook for better compatibility.
  - Removed unused dependencies from the main Storybook configuration file.

## [2.8.4] - 2025-07-03

### `Removed`
- **`Examples`**:
  - Removed unused files in the examples folder.
  - Removed obsolete data files.
  - Removed unused enums in the utilities folder.

## [2.8.3] - 2025-07-03

### `Fixed`
- **`Typography`**:
  - Fixed the use of `map.get` to `map-get` in SCSS styles for Sass version compatibility.
  - Updated Stylelint configuration to allow the use of Sass global functions.
  - Improved style organization with CSS modules.
  - Fixed unit tests to use `data-testid` instead of searching by text.

## [2.8.2] - 2025-07-03

### `Fixed`
- **`Message`**:
  - Fixed Message component styles to use correct color variables.
  - Updated SCSS import paths to use 'src' alias.
  - Fixed line height variable to `$line-height-md`.
  - Improved Storybook documentation.

## [2.8.1] - 2025-07-03

### `Fixed`
- **`Title`**:
  - Fixed Storybook build errors related to undefined SCSS variables.
  - Updated deprecated color functions in `palette.scss` to use `color.adjust()` instead of `darken()`.
  - Added missing color variables `$light-color` and `$dark-color`.
  - Refactored component file structure to improve code organization.
  - Fixed linting issues in Storybook story files.

## [2.8.0] - 2025-07-03

### `Changed`
- **`TextBox`**:
  - Completely refactored the component to improve maintainability and align with library guidelines.
  - **Styles**: Centralized all typography, color, and spacing variables in global SCSS files (`typography.scss`, `palette.scss`, `spacing.scss`).
  - **Storybook**: Extracted default arguments to a `mocks.tsx` file to improve reusability.
  - **Tests**: Refactored test mocks to use a base object, reducing code duplication.

All versioned commits in the repository:

## Latest relevant changes (2025)

### 2.7.15 (2025-07-03)
- **refactor(TextArea):** Complete refactoring of the `TextArea` component.
  - Extracted styles (colors, typography, spacing) to global SCSS variables.
  - Centralized types in `types.tsx` and added `data-testid` support.
  - Modularized Storybook stories with a `mocks.tsx` file.
  - Refactored unit tests to use mocks and eliminate duplicate code.

### 2.7.14 (2025-07-02)
- **refactor(Spinner):** Complete refactoring of the `Spinner` component.
  - Extracted spacing values to global SCSS variables in `spacing.scss`.
  - Created unit test structure (`tests/` and `mocks.tsx`) for the component.
  - Verified correct application of styles, typing, and component structure.

### 2.7.13 (2025-07-02)
- **refactor(Selector):** Complete refactoring of the `Selector` component.
  - Modularized Storybook stories with a centralized `mocks.tsx` file.
  - Refactored unit tests to use mocks and default props, improving maintainability.
  - Verified correct application of styles, typing, and component structure.
- **fix(lint):** Fixed multiple lint errors and warnings across the application.
  - Fixed accessibility error in `Selector` story.
  - Replaced use of `any` in `TextBox` types.
  - Fixed empty function warnings in tests with `jest.fn()` or by disabling the lint rule.
- **fix(tests):** Removed all warnings (`console.warn`, `console.error`) from test execution.
  - Fixed invalid prop propagation to the DOM in `TextButton`, `Icon`, and `TextArea` components.
  - Silenced intentional warnings in `Pagination` and `TableWithPagination` tests.
- **feat(TextArea):** Implemented `minRows` and `maxRows` functionality for automatic resizing.

### 2.7.12 (2025-07-02)
- **feat(layout):** Complete refactoring of `Layout`, `NavBar`, and `Footer` components.
  - Extracted styles (typography, colors, spacing) to global SCSS variables for consistency.
  - Modularized types (`interfaces`) to dedicated `types.tsx` files per component.
  - Created unit test structure (`tests/` and `mocks.tsx`) for all three components.
- **fix(storybook):** Fixed build error (`NoMetaError`) by moving `meta` configuration to the story file.
- **chore(scripts):** Optimized npm scripts in `package.json` to eliminate redundant build steps.

### 2.7.9 (2025-07-02)
- **refactor:** `Pagination` component
  - Extracted typography to `typography.scss` with variables for buttons and text.
  - Extracted colors to `palette.scss` with variables for button states and backgrounds.
  - Extracted spacing to `spacing.scss` with variables for margins, paddings, and dimensions.
  - Improved code organization and consistency in the use of global variables.
  - Updated documentation to facilitate future maintenance.

### 2.7.8 (2025-07-02)
- **refactor:** `Modal` component
  - Extracted typography to `typography.scss` with variables for titles, content, and buttons.
  - Extracted colors to `palette.scss` with variables for backgrounds, borders, and interactive states.
  - Extracted spacing to `spacing.scss` with variables for margins, paddings, and dimensions.
  - Improved code organization and consistency in the use of global variables.
  - Updated documentation to facilitate future maintenance.

### 2.7.7 (2025-07-01)
- **refactor:** `IconButton` component
  - Extracted typography, colors, and spacing to global SCSS variables.
  - Organized types in a dedicated `types.ts`.
  - Created `mocks.tsx` files for Storybook stories.
  - Updated stories to reuse mocks and improve documentation.
  - Fixed icon sizing using `IconSize`.
  - Fixed component styles and variations.
  - Cleaned up inline styles and used global variables.
- **chore:** Cleaned up duplicate mocks in `dist/__mocks__`.
- **fix:** Minor lint adjustments in Stories and Mocks files.


- **2025-07-01** refactor: Improvement in the Icon component
  - Improved state handling (disabled, inheritColor)
  - Support for custom SVG components through the `component` prop
  - Refactored styles to use global SCSS variables
  - Fixed TypeScript errors in Storybook stories
  - Updated unit tests to cover new use cases
  - Improved Storybook documentation

- **2025-07-01** refactor: Improvement in the CheckButton component
  - Refactored styles to use global SCSS variables
  - Extracted typography, colors, and spacing to global files
  - Improved Storybook documentation
  - Updated unit tests
  - Removed redundant mock files
  - Improved component visual consistency

- **2025-07-01** refactor: Improvement in the Card component
  - Refactored styles to use global variables
  - Extracted typography, colors, and spacing to global SCSS files
  - Improved component visual consistency
  - Updated style documentation

- **2025-07-01** refactor: Improvement in the Button component
  - Refactored styles to use global variables
  - Extracted styles to modular SCSS files
  - Improved unit test organization
  - Updated Storybook stories
  - Removed duplicate code in tests
  - Improved props and types documentation

- **2025-07-01** feat: Removed loading functionality from the Button component
  - Removed the `loading` property and its associated logic
  - Updated unit tests to reflect the changes
  - Improved code consistency by removing unused functionality
  - Updated styles to remove references to loading state

- **2025-07-01** feat: Updated styles and component structure
  - Reorganized styles into modular SCSS files
  - Created base files for color palette, typography, and spacing
  - Updated components to use the new modular styles
  - Improved component visual consistency
  - Added index file for centralized exports

- **2025-07-01** refactor: Reorganized styles and SCSS file structure
  - Moved SCSS files to the `src/styles` folder
  - Updated imports in affected components
  - Fixed style variables and functions in tables
  - Improved global style organization


- **2025-07-01** fix: Fixes in table tests and components
  - Fixed imports in table components
  - Improved unit tests for table components
  - Updated test selectors to be more robust
  - Fixed empty cell handling in tables
  - Improved accessibility in table components

- **2025-06-30** feat: Added Layout, NavBar, and Footer components
  - New Layout component as the main application container
  - NavBar component for the top navigation bar
  - Footer component for the page footer
  - Complete Storybook documentation with interactive examples
  - Unit tests implemented to ensure quality
  - Accessibility improvements with ARIA attributes

- **2025-06-30** fix: Fixes in the Modal component
  - Improved Modal component unit tests
  - Fixed modal close handling
  - Improved component accessibility

- **2025-06-30** feat: Added Pagination component
  - New pagination component with full navigation (first/last page, previous/next)
  - Support for customizing the maximum number of visible buttons
  - States: disabled, active, hover
  - Complete Storybook documentation with interactive examples
  - Unit tests implemented to ensure quality
  - Improved accessibility with ARIA attributes

- **2025-06-30** feat: Added RadioButton component
  - New RadioButton component with customizable styles via SCSS modules
  - Support for states: disabled, selected, hover, and focus
  - Complete Storybook documentation with different usage examples
  - Unit tests implemented to ensure quality
  - Improved accessibility with ARIA attributes

- **2025-06-30** feat: Added Selector component
  - New Selector component with support for simple and grouped options
  - Includes style variants (primary, secondary, danger, success, warning)
  - Support for different sizes (small, medium, large)
  - States: disabled, loading, error, required
  - Complete Storybook documentation with interactive examples
  - Unit tests implemented to ensure quality
  - Improved accessibility with ARIA attributes

- **2025-06-30** feat: Added Title component
  - New Title component with support for different heading levels (h1-h6)
  - Includes customizable styles via SCSS modules
  - Complete Storybook documentation with different usage examples
  - Unit tests implemented to ensure quality

- **2025-06-30** feat: Added Spinner component and updated IconButton
- **2025-06-30** feat: Added Spinner component and updated IconButton
  - New Spinner component with support for multiple sizes and variants
  - Updated IconButton component to use existing icon system
  - Improved accessibility in both components
  - Includes Storybook documentation and unit tests

- **2025-06-30** feat: Added Icon component
  - New icon component with support for multiple sizes and variants
  - Includes Storybook documentation and unit tests
  - Support for custom colors and color inheritance
  - Integration with existing design system

- **2025-06-30** fix: Fixed SCSS variables in components
  - Updated SCSS variable imports to use `as *`
  - Fixed references to undefined variables in CheckButton, TextArea, and TextButton
  - Replaced hardcoded colors with CSS variables
  - Improved consistency in theme variable usage
  - Fixed Storybook build errors

- **2025-06-30** fix: Fixed SCSS variables and build errors
  - Resolved undefined variable `$primary-color-1` error
  - Updated color variable references to use defined ones
  - Added complete gray palette for consistency
  - Improved SCSS variable documentation
  - Fixed linting errors in style files

- **2025-06-30** fix: Fixed linting errors and test configuration
  - Fixed linting errors in SCSS files
  - Updated Jest configuration to support @testing-library/jest-dom
  - Added setupTests.ts file for global test configuration
  - Improved CheckButton component test coverage
  - Fixed type issues in components

- **2025-06-29** feat: Updated styles and linting configuration
  - Updated Button component with new SCSS styles
  - Configured Stylelint for SCSS style validation
  - Fixed use of deprecated Sass functions
  - Improved style consistency across components
  - Updated dependencies related to style processing

- **2025-06-29** feat: Card component implementation
  - Created Card component with variants: elevated, outlined, and filled
  - Added Storybook stories with interactive documentation
  - Implemented unit tests with React Testing Library
  - Added customizable CSS styles with CSS variables
  - Improved accessibility with keyboard and ARIA support

- **3bfa360 2025-06-28** refactor: Removed unused components and code cleanup
  - Removed obsolete components: Form, HomeV2, Breadcrumb, DatePicker, LayoutV2, Menu, ModalHttpMessage
  - Moved components to ToDo folder for future implementation
  - Cleaned up imports and unused code
  - Updated dependencies and TypeScript configuration

- **e6b7f77 2025-06-28** refactor: Updated SCSS styles and fixed tests
  - Migrated `@import` to `@use` in SCSS files
  - Fixed SCSS variable references with namespaces
  - Updated tests to reflect style changes
  - Improved style organization by component

- **09814fb 2025-06-28** refactor: move component styles to their respective folders
  - Moved SCSS styles to their respective component folders
  - Updated import paths in affected components
  - Improved code organization by grouping styles with their components

- **0415417 2025-06-28** fix: Fixed icon types and related tests
  - Updated Icon component to correctly handle icon types
  - Fixed 'includes' type error in icon verification
  - Updated unit tests to reflect type changes
  - Improved documentation of affected components

- **ffbd38c 2025-06-26** fix: update modal components and tests to handle React Portals correctly
  - Fixed Modal and ModalNotifications components to properly handle React Portals
  - Updated tests to work with React Portals by querying document.body
  - Improved test coverage for different states and edge cases
  - Added proper async/await handling in tests
  - Fixed TypeScript and linting issues across modal components

- **019981b 2025-06-26** fix: improve Modal component with React Portal
  - Use ReactDOM.createPortal to render modal outside the normal DOM hierarchy
  - Ensure proper z-index and stacking context
  - Fix potential overflow issues in parent containers

- **26ddd9a 2025-06-26** refactor: Reorganize DatePicker component and tests
  - Moved tests to dedicated `__test__` directory
  - Added comprehensive Storybook stories with interactive examples
  - Created mocks for tests to improve maintainability
  - Enhanced test coverage for DatePicker functionality
  - Fixed TypeScript and linting issues

- **712e676 2025-06-26** refactor: Reorganize Modal component and add Storybook stories

- **712e676 2025-06-26** refactor: Reorganize Modal component and add Storybook stories
  - Moved tests to dedicated `__test__` directory
  - Added comprehensive Storybook stories with interactive examples
  - Created mocks for tests to improve maintainability
  - Enhanced type safety and accessibility
  - Fixed linting issues across the component

- **a1b2c3d 2025-06-26** refactor: Reorganize Menu component structure
  - Moved tests to `__test__` directory
  - Added Storybook documentation
  - Improved test organization with dedicated mocks file
  - Enhanced type definitions

- **c3652c9 2025-06-25** refactor: Reorganize RadioButton component and add Storybook stories
  - Moved tests to dedicated `__test__` directory
  - Added comprehensive Storybook stories for all component states
  - Improved type definitions and documentation
  - Centralized test mocks in a separate file
  - Enhanced component exports for better type safety

- **dcf527e 2025-06-25** fix: Update TextArea and TextBox components with proper event handling and tests
  - Fixed TextArea and TextBox components to properly handle Enter key events
  - Added comprehensive test coverage for event handling
  - Reorganized test files into `__test__` and `__tests__` directories
  - Added Storybook stories for both components
  - Improved type safety in component props


- **30ec24b 2025-06-25** fix: update TextButton stories and fix type error in disabled prop
  - Fixed type error in TextButton stories by updating defaultValue.summary to be a string
  - Reorganized test files into `__tests__` directories
  - Updated component stories for better documentation
  - Improved type safety in component props

- **a5f56d6 2025-06-25** fix: Update component tests and fix layout props
  - Fixed Layout component to properly pass currentPath to NavBar
  - Updated test files with correct imports and assertions
  - Added missing data files for Home and HomeV2 components
  - Reorganized Button component tests into __tests__ directory
  - Added Button component stories

- **80f1adf 2025-06-25** refactor: reorganize the Form component and add Storybook stories
  - Moved test file to `__tests__` folder
  - Added `mocks.ts` file for test data
  - Created Storybook documentation
  - Improved test coverage
  - Updated TypeScript types

- **965ae8a 2025-06-25** refactor: reorganize test files and add Storybook stories for Color and Message components
  - Moved test files to `__tests__` folders
  - Added `mocks.ts` files for test data
  - Created Storybook stories with documentation
  - Improved TypeScript types and test coverage
  - Fixed linting issues

- **94e8512 2025-06-23** chore: clean .gitignore, remove public/index.html and ensure correct Storybook deploy to gh-pages

- **1600fdd 2025-06-23** chore(storybook): configure base path for GitHub Pages deploy

- **666e9b2 2025-06-23** docs: update npm and Storybook publishing instructions in README and docs/index.md

- **817790f 2025-06-22** docs: update README with professional guide for NPM and Storybook
- **819cd2a 2025-06-22** chore: Storybook 8.x working with React 19 and Vite, stories for Title, dependency adjustments and stable config. Added automated deploy to GitHub Pages.
- **74186c3 2025-06-22** fix: all React component tests passing and lint clean; improved Home, TableWithIcon, and test imports for React 19/TypeScript 5
- **9fa074c 2025-06-22** refactor: static components compatible with React 19, strict typing and robust tests. Clean lint.
- **8fca8fb 2025-06-22** fix: lint cleanup, removal of unused imports and correction of ESLint and TypeScript errors in Layout, NavBar, SideBar and Content
- **af56c4b 2025-06-22** fix: import forwardRef in TextBox, TextArea, Selector. All tests passing.
- **65210f3 2025-06-22** Fix: ESLint, accessibility, and test issues. All tests passing. Refactor RadioButton required logic. Update tests for accessibility and unused code.
- **85c7636 2025-06-22** fix: fix tests and components for Testing Library compatibility, remove React warnings and ensure 100% green tests
- **97e5216 2025-06-21** refactor: migration to TypeScript and React 19
- **7d318c3 2025-06-21** feat: Migration to React 19 and unit test improvements
- **ace40ba 2025-06-21** refactor: update package.json dependencies
- **50120f1 2025-06-21** refactor: remove storybook and test files

## Historical changes

(See more details using `git log` or browsing on GitHub)

- Commits from 2023 and earlier include multiple releases, style improvements, component and script updates, migrations and minor fixes.

---

This file is generated from the commit history. To see full details of each commit run:

```sh
git log --pretty=format:"%h %ad %s" --date=short
```

O visita: https://github.com/ing17romc/edt-lib/commits/main
