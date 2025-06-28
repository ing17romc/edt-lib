# Changelog

Todos los commits versionados en el repositorio:

## Últimos cambios relevantes (2025)

- **2c7794b 2025-06-28** feat: Actualización de componentes CheckButton y enums
  - Mejoras en la implementación del componente CheckButton
  - Actualización de tipos y enums relacionados
  - Mejoras en las pruebas unitarias

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

- **80f1adf 2025-06-25** refactor: reorganiza el componente Form y añade historias de Storybook
  - Movido archivo de prueba a la carpeta `__tests__`
  - Añadido archivo `mocks.ts` para datos de prueba
  - Creada documentación en Storybook
  - Mejorada la cobertura de pruebas
  - Actualizados los tipos TypeScript

- **965ae8a 2025-06-25** refactor: reorganiza archivos de prueba y añade historias de Storybook para componentes Color y Message
  - Movidos archivos de prueba a carpetas `__tests__`
  - Añadidos archivos `mocks.ts` para datos de prueba
  - Creadas historias de Storybook con documentación
  - Mejorados tipos TypeScript y cobertura de pruebas
  - Corregidos problemas de linting

- **94e8512 2025-06-23** chore: limpia .gitignore, elimina public/index.html y asegura deploy correcto de Storybook a gh-pages

- **1600fdd 2025-06-23** chore(storybook): configura base path para deploy en GitHub Pages

- **666e9b2 2025-06-23** docs: actualiza instrucciones de publicación npm y Storybook en README y docs/index.md

- **817790f 2025-06-22** docs: actualiza README con guía profesional para NPM y Storybook
- **819cd2a 2025-06-22** chore: Storybook 8.x funcionando con React 19 y Vite, stories para Title, ajustes de dependencias y config estable. Agregado deploy automatizado a GitHub Pages.
- **74186c3 2025-06-22** fix: all React component tests passing and lint clean; improved Home, TableWithIcon, and test imports for React 19/TypeScript 5
- **9fa074c 2025-06-22** refactor: componentes estáticos compatibles con React 19, tipado estricto y tests robustos. Lint limpio.
- **8fca8fb 2025-06-22** fix: limpieza de lint, eliminación de imports no usados y corrección de errores de ESLint y TypeScript en Layout, NavBar, SideBar y Content
- **af56c4b 2025-06-22** fix: import forwardRef in TextBox, TextArea, Selector. All tests passing.
- **65210f3 2025-06-22** Fix: ESLint, accessibility, and test issues. All tests passing. Refactor RadioButton required logic. Update tests for accessibility and unused code.
- **85c7636 2025-06-22** fix: corrige tests y componentes para compatibilidad con Testing Library, elimina warnings de React y asegura 100% de tests en verde
- **97e5216 2025-06-21** refactor: migración a TypeScript y React 19
- **7d318c3 2025-06-21** feat: Migración a React 19 y mejora de pruebas unitarias
- **ace40ba 2025-06-21** refactor: update package.json dependencies
- **50120f1 2025-06-21** refactor: remove storybook and test files

## Cambios históricos

(Ver más detalles usando `git log` o navegando en GitHub)

- Commits de 2023 y anteriores incluyen múltiples publicaciones, mejoras de estilos, actualizaciones de componentes y scripts, migraciones y fixes menores.

---

Este archivo se genera a partir del historial de commits. Para ver detalles completos de cada commit ejecuta:

```sh
git log --pretty=format:"%h %ad %s" --date=short
```

O visita: https://github.com/ing17romc/edt-lib/commits/main
