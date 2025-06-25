# Changelog

Todos los commits versionados en el repositorio:

## Últimos cambios relevantes (2025)

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
