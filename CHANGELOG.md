# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.9.7](https://github.com/ing17romc/edt-lib/compare/v2.9.6...v2.9.7) (2025-07-17)

## [2.9.5] - 2025-07-07

### `Corregido`
- **Componentes**:
  - Corregidos errores de TypeScript en los componentes Button y CheckButton
  - Mejorado el tipado de los manejadores de eventos onClick y onChange
  - Eliminado archivo de funciones no utilizado (functions.tsx)
  - Actualizados los tests para reflejar los cambios en los tipos

## [2.9.4] - 2025-07-07

### `Actualizado`
- **Dependencias**:
  - Actualizado `sass` a la versión `^1.80.0`
  - Actualizadas dependencias de Storybook a la versión `^8.1.0`
  - Actualizado `@testing-library/react` a la versión `^15.0.1`
  - Actualizado `@testing-library/jest-dom` a la versión `^6.4.3`

### `Corregido`
- **Workflows**:
  - Actualizados los workflows para manejo de versiones parche y menor
  - Mejorada la documentación de los workflows

---

## [2.9.2] - 2025-07-07

### `Actualizado`
- **Dependencias**:
  - Actualizado `sass` a la versión `^1.79.0`
  - Actualizadas dependencias de Storybook a la versión `^8.0.0`
  - Actualizado `@testing-library/react` a la versión `^15.0.0`
  - Actualizado `@testing-library/jest-dom` a la versión `^6.4.2`
  - Actualizado `@types/jest` a la versión `^29.5.12`

### `Corregido`
- Resueltos conflictos de dependencias entre Storybook 8 y React 19
- Corregida la configuración de TypeScript para soportar las versiones actualizadas


## [2.8.14] - 2025-07-07

### `Fixed`
- **`Button`**: Corregidos errores de compilación y mejorada la documentación
- **`Icon`**: Actualizados los tipos y corregidos problemas de importación
- **`IconButton`**: Mejorada la accesibilidad y corregidos problemas de estilos
- **`Selector`**: Corregidos errores de tipos y mejorado el manejo de eventos
- **`Spinner`**: Optimizado el rendimiento y corregidos problemas de visualización
- **`Title`**: Mejorada la tipografía y corregidos problemas de alineación
- **`Message`**: Actualizado el componente para usar las últimas características de React

### `Refactor`
- Extraídas utilidades comunes al directorio `src/utils/`
- Actualizadas las dependencias en `package.json`
- Mejorada la documentación de los componentes

## [2.8.13] - 2025-07-05

### `Documentation`
- **`README.md`**:
  - Actualizada la documentación principal con información más clara y completa
  - Añadida sección de componentes disponibles con descripciones
  - Mejoradas las instrucciones de instalación y configuración
  - Añadidos badges de estado del proyecto
- **`/docs`**:
  - Reescrita completamente la documentación técnica
  - Añadida guía detallada de instalación y configuración
  - Incluida documentación sobre temas y estilos personalizados
  - Añadida guía de contribución con estándares de código

## [2.8.12] - 2025-07-05

### `Fixed`
- **`TableWithPagination`**:
  - Corregido el manejo de eventos y tipos en el componente
  - Mejorada la gestión del estado de paginación
  - Actualizados los tests para mayor cobertura y claridad
  - Eliminado código no utilizado

### `Refactor`
- **`Message`**:
  - Mejorado el manejo de tipos en los tests
  - Actualizadas las aserciones para usar valores RGB en lugar de nombres de colores

## [2.8.11] - 2025-07-04

### `Fixed`
- **`Message`**:
  - Corregido error de operador unario en estilos SCSS
  - Actualizado el uso de `map-get` a `map.get` para compatibilidad con Sass moderno
  - Mejorado el manejo de márgenes negativos
  - Corregido el tamaño de fuente en modo responsivo

## [2.8.10] - 2025-07-04

### `Fixed`
- **`Message`**:
  - Corregidas variables SCSS no definidas en el componente Message
  - Reemplazado `lighten()` por `color.adjust()` para mejor compatibilidad
  - Mejorada la consistencia en los estilos y espaciados
  - Corregido el peso de la fuente del título usando la variable correcta

## [2.8.9] - 2025-07-04

### `Added`
- **`Componente Message`**:
  - Añadido el componente estático `Message` con soporte para diferentes tipos (success, info, warning, danger)
  - Incluidos archivos de pruebas unitarias y documentación en Storybook
  - Añadida documentación de reglas para el desarrollo de componentes

### `Fixed`
- **`Linting`**:
  - Corregidos errores de TypeScript en los componentes existentes
  - Mejorados los tipos para mayor seguridad de tipos
  - Corregidos problemas de compatibilidad con JSX en archivos TypeScript


## [2.8.8] - 2025-07-03

### `Added`
- **`Componentes Estáticos`**:
  - Añadidos los componentes estáticos: `Grid` y `Typography` con sus respectivos estilos y documentación
  - Incluidos archivos de pruebas y stories para ambos componentes

## [2.8.7] - 2025-07-03

### `Removed`
- **`Componentes Estáticos`**:
  - Eliminados los componentes estáticos: `Color`, `Grid`, `Message` y `Typography`
  - Eliminados archivos de pruebas y estilos asociados

### `Fixed`
- **`Dependencias`**:
  - Actualizadas las dependencias para resolver conflictos de versiones
  - Mejorada la limpieza del proyecto en el script `clean`

## [2.8.6] - 2025-07-03

### `Fixed`
- **`Configuración`**:
  - Corregida la configuración de TypeScript para usar rutas absolutas desde 'src'.
  - Actualizada la configuración de Storybook para mejorar la resolución de módulos.
  - Corregidos errores de tipos en los componentes.

## [2.8.5] - 2025-07-03

### `Refactor`
- **`Estilos`**:
  - Actualizadas las rutas de importación en los archivos SCSS para usar rutas relativas en lugar de alias 'src'.
  - Mejorada la configuración de Vite en Storybook para una mejor compatibilidad.
  - Eliminadas dependencias no utilizadas del archivo de configuración principal de Storybook.

## [2.8.4] - 2025-07-03

### `Removed`
- **`Examples`**:
  - Eliminados archivos no utilizados en la carpeta de ejemplos.
  - Eliminados archivos de datos obsoletos.
  - Eliminados enums no utilizados en la carpeta de utilidades.

## [2.8.3] - 2025-07-03

### `Fixed`
- **`Typography`**:
  - Corregido el uso de `map.get` a `map-get` en los estilos SCSS para compatibilidad con la versión de Sass.
  - Actualizada la configuración de Stylelint para permitir el uso de funciones globales de Sass.
  - Mejorada la organización de los estilos con módulos CSS.
  - Corregidas las pruebas unitarias para usar `data-testid` en lugar de buscar por texto.

## [2.8.2] - 2025-07-03

### `Fixed`
- **`Message`**:
  - Corregidos los estilos del componente Message para usar variables de color correctas.
  - Actualizadas las rutas de importación SCSS para usar alias 'src'.
  - Corregida la variable de altura de línea a `$line-height-md`.
  - Mejorada la documentación en Storybook.

## [2.8.1] - 2025-07-03

### `Fixed`
- **`Title`**:
  - Se corrigieron errores de compilación en Storybook relacionados con variables SCSS no definidas.
  - Se actualizaron las funciones de color obsoletas en `palette.scss` para usar `color.adjust()` en lugar de `darken()`.
  - Se agregaron las variables de color faltantes `$light-color` y `$dark-color`.
  - Se refactorizó la estructura de archivos del componente para mejorar la organización del código.
  - Se corrigieron problemas de linting en los archivos de historias de Storybook.

## [2.8.0] - 2025-07-03

### `Changed`
- **`TextBox`**:
  - Se ha refactorizado completamente el componente para mejorar su mantenibilidad y alinearlo con las directrices de la librería.
  - **Estilos**: Se han centralizado todas las variables de tipografía, color y espaciado en los archivos SCSS globales (`typography.scss`, `palette.scss`, `spacing.scss`).
  - **Storybook**: Se han extraído los argumentos por defecto a un archivo `mocks.tsx` para mejorar la reutilización.
  - **Pruebas**: Se han refactorizado los mocks de prueba para usar un objeto base, reduciendo la duplicación de código.

Todos los commits versionados en el repositorio:

## Últimos cambios relevantes (2025)

### 2.7.15 (2025-07-03)
- **refactor(TextArea):** Refactorización completa del componente `TextArea`.
  - Extracción de estilos (colores, tipografía, espaciado) a variables SCSS globales.
  - Centralización de tipos en `types.tsx` y añadido soporte para `data-testid`.
  - Modularización de historias de Storybook con un archivo `mocks.tsx`.
  - Refactorización de pruebas unitarias para usar mocks y eliminar código duplicado.

### 2.7.14 (2025-07-02)
- **refactor(Spinner):** Refactorización completa del componente `Spinner`.
  - Extracción de valores de espaciado a variables SCSS globales en `spacing.scss`.
  - Creación de estructura de pruebas unitarias (`tests/` y `mocks.tsx`) para el componente.
  - Verificación de la correcta aplicación de estilos, tipado y estructura del componente.

### 2.7.13 (2025-07-02)
- **refactor(Selector):** Refactorización completa del componente `Selector`.
  - Modularización de historias de Storybook con un archivo `mocks.tsx` centralizado.
  - Refactorización de pruebas unitarias para usar mocks y props por defecto, mejorando la mantenibilidad.
  - Verificación de la correcta aplicación de estilos, tipado y estructura del componente.
- **fix(lint):** Corregidos múltiples errores de lint y advertencias en toda la aplicación.
  - Solucionado error de accesibilidad en la historia del `Selector`.
  - Reemplazado el uso de `any` en los tipos del `TextBox`.
  - Corregidas advertencias de funciones vacías en pruebas con `jest.fn()` o deshabilitando la regla de lint.
- **fix(tests):** Eliminadas todas las advertencias (`console.warn`, `console.error`) de la ejecución de las pruebas.
  - Corregida la propagación de props inválidas al DOM en los componentes `TextButton`, `Icon` y `TextArea`.
  - Silenciadas advertencias intencionadas en las pruebas de `Pagination` y `TableWithPagination`.
- **feat(TextArea):** Implementada la funcionalidad `minRows` y `maxRows` para el redimensionamiento automático.

### 2.7.12 (2025-07-02)
- **feat(layout):** Refactorización completa de los componentes `Layout`, `NavBar` y `Footer`.
  - Extracción de estilos (tipografía, colores, espaciado) a variables SCSS globales para consistencia.
  - Modularización de tipos (`interfaces`) a archivos `types.tsx` dedicados por componente.
  - Creación de estructura de pruebas unitarias (`tests/` y `mocks.tsx`) para los tres componentes.
- **fix(storybook):** Corregido error de construcción (`NoMetaError`) moviendo la configuración `meta` al archivo de historia.
- **chore(scripts):** Optimización de scripts de npm en `package.json` para eliminar pasos de compilación redundantes.

### 2.7.9 (2025-07-02)
- **refactor:** Componente `Pagination`
  - Extracción de tipografía a `typography.scss` con variables para botones y texto.
  - Extracción de colores a `palette.scss` con variables para estados de botones y fondos.
  - Extracción de espaciados a `spacing.scss` con variables para márgenes, paddings y dimensiones.
  - Mejora en la organización del código y consistencia en el uso de variables globales.
  - Documentación actualizada para facilitar el mantenimiento futuro.

### 2.7.8 (2025-07-02)
- **refactor:** Componente `Modal`
  - Extracción de tipografía a `typography.scss` con variables para títulos, contenido y botones.
  - Extracción de colores a `palette.scss` con variables para fondos, bordes y estados interactivos.
  - Extracción de espaciados a `spacing.scss` con variables para márgenes, paddings y dimensiones.
  - Mejora en la organización del código y consistencia en el uso de variables globales.
  - Documentación actualizada para facilitar el mantenimiento futuro.

### 2.7.7 (2025-07-01)
- **refactor:** Componente `IconButton`
  - Extracción de tipografía, colores y espaciados a variables SCSS globales.
  - Organización de tipos en `types.ts` dedicado.
  - Creación de archivos `mocks.tsx` para historias de Storybook.
  - Actualización de historias para reutilizar mocks y mejorar la documentación.
  - Corrección de tamaño de iconos utilizando `IconSize`.
  - Corrección de estilos y variaciones del componente.
  - Limpieza de estilos inline y uso de variables globales.
- **chore:** Limpieza de mocks duplicados en `dist/__mocks__`.
- **fix:** Ajustes menores de lint en archivos de Stories y Mocks.


- **2025-07-01** refactor: Mejora en el componente Icon
  - Mejora en el manejo de estados (disabled, inheritColor)
  - Soporte para componentes SVG personalizados a través de la prop `component`
  - Refactorización de estilos para usar variables globales SCSS
  - Corrección de errores de TypeScript en las historias de Storybook
  - Actualización de pruebas unitarias para cubrir nuevos casos de uso
  - Mejora en la documentación de Storybook

- **2025-07-01** refactor: Mejora en el componente CheckButton
  - Refactorización de estilos para usar variables globales SCSS
  - Extracción de tipografía, colores y espaciado a archivos globales
  - Mejora en la documentación de Storybook
  - Actualización de pruebas unitarias
  - Eliminación de archivos de mocks redundantes
  - Mejora en la consistencia visual del componente

- **2025-07-01** refactor: Mejora en el componente Card
  - Refactorización de estilos para usar variables globales
  - Extracción de tipografía, colores y espaciado a archivos SCSS globales
  - Mejora en la consistencia visual del componente
  - Actualización de documentación de estilos

- **2025-07-01** refactor: Mejora en el componente Button
  - Refactorización de estilos para usar variables globales
  - Extracción de estilos a archivos SCSS modulares
  - Mejora en la organización de pruebas unitarias
  - Actualización de historias de Storybook
  - Eliminación de código duplicado en pruebas
  - Mejora en la documentación de props y tipos

- **2025-07-01** feat: Eliminación de la funcionalidad de loading del componente Button
  - Eliminada la propiedad `loading` y su lógica asociada
  - Actualizadas las pruebas unitarias para reflejar los cambios
  - Mejorada la consistencia del código eliminando funcionalidad no utilizada
  - Actualizados los estilos para eliminar referencias al estado de carga

- **2025-07-01** feat: Actualización de estilos y estructura de componentes
  - Reorganización de estilos en archivos modulares SCSS
  - Creación de archivos base para paleta de colores, tipografía y espaciado
  - Actualización de componentes para usar los nuevos estilos modulares
  - Mejora en la consistencia visual de los componentes
  - Adición de archivo de índice para exportación centralizada

- **2025-07-01** refactor: Reorganización de estilos y estructura de archivos SCSS
  - Movidos archivos SCSS a la carpeta `src/styles`
  - Actualizadas las importaciones en los componentes afectados
  - Corregidas variables y funciones de estilos en tablas
  - Mejorada la organización de los estilos globales


- **2025-07-01** fix: Correcciones en pruebas y componentes de tablas
  - Corregidas importaciones en componentes de tablas
  - Mejoradas las pruebas unitarias para los componentes de tablas
  - Actualizados los selectores de pruebas para ser más robustos
  - Corregido el manejo de celdas vacías en las tablas
  - Mejorada la accesibilidad en los componentes de tablas

- **2025-06-30** feat: Agregados componentes Layout, NavBar y Footer
  - Nuevo componente Layout como contenedor principal de la aplicación
  - Componente NavBar para la barra de navegación superior
  - Componente Footer para el pie de página
  - Documentación completa en Storybook con ejemplos interactivos
  - Pruebas unitarias implementadas para garantizar la calidad
  - Mejoras en la accesibilidad con atributos ARIA

- **2025-06-30** fix: Correcciones en el componente Modal
  - Mejora en las pruebas unitarias del componente Modal
  - Corrección en el manejo del cierre del modal
  - Mejora en la accesibilidad del componente

- **2025-06-30** feat: Agregado componente Pagination
  - Nuevo componente de paginación con navegación completa (primera/última página, anterior/siguiente)
  - Soporte para personalización del número máximo de botones visibles
  - Estados: deshabilitado, activo, hover
  - Documentación completa en Storybook con ejemplos interactivos
  - Pruebas unitarias implementadas para garantizar la calidad
  - Accesibilidad mejorada con atributos ARIA

- **2025-06-30** feat: Agregado componente RadioButton
  - Nuevo componente RadioButton con estilos personalizables mediante módulos SCSS
  - Soporte para estados: deshabilitado, seleccionado, hover y focus
  - Documentación completa en Storybook con diferentes ejemplos de uso
  - Pruebas unitarias implementadas para garantizar la calidad
  - Accesibilidad mejorada con atributos ARIA

- **2025-06-30** feat: Agregar componente Selector
  - Nuevo componente Selector con soporte para opciones simples y agrupadas
  - Incluye variantes de estilo (primary, secondary, danger, success, warning)
  - Soporte para diferentes tamaños (small, medium, large)
  - Estados: deshabilitado, carga, error, requerido
  - Documentación completa en Storybook con ejemplos interactivos
  - Pruebas unitarias implementadas para garantizar la calidad
  - Accesibilidad mejorada con atributos ARIA

- **2025-06-30** feat: Agregado componente Title
  - Nuevo componente Title con soporte para diferentes niveles de encabezado (h1-h6)
  - Incluye estilos personalizables mediante módulos SCSS
  - Documentación completa en Storybook con diferentes ejemplos de uso
  - Pruebas unitarias implementadas para garantizar la calidad

- **2025-06-30** feat: Agregar componente Spinner y actualizar IconButton
- **2025-06-30** feat: Agregar componente Spinner y actualizar IconButton
  - Nuevo componente Spinner con soporte para múltiples tamaños y variantes
  - Actualizado el componente IconButton para usar el sistema de iconos existente
  - Mejorada la accesibilidad en ambos componentes
  - Incluye documentación en Storybook y pruebas unitarias

- **2025-06-30** feat: Agregar componente Icon
  - Nuevo componente de icono con soporte para múltiples tamaños y variantes
  - Incluye documentación en Storybook y pruebas unitarias
  - Soporte para colores personalizados y herencia de colores
  - Integración con el sistema de diseño existente

- **2025-06-30** fix: Corregir variables SCSS en componentes
  - Actualizadas importaciones de variables SCSS para usar `as *`
  - Corregidas referencias a variables no definidas en CheckButton, TextArea y TextButton
  - Reemplazados colores hardcodeados por variables CSS
  - Mejorada la consistencia en el uso de variables de tema
  - Corregidos errores de compilación en Storybook

- **2025-06-30** fix: Corregir variables SCSS y errores de compilación
  - Solucionado error de variable no definida `$primary-color-1`
  - Actualizadas referencias a variables de color para usar las definidas
  - Añadida paleta de grises completa para consistencia
  - Mejorada la documentación de las variables SCSS
  - Corregidos errores de linting en archivos de estilos

- **2025-06-30** fix: Corregir errores de linting y configuración de pruebas
  - Corregidos errores de linting en archivos SCSS
  - Actualizada configuración de Jest para soportar @testing-library/jest-dom
  - Añadido archivo setupTests.ts para configuración global de pruebas
  - Mejorada la cobertura de pruebas del componente CheckButton
  - Corregidos problemas de tipos en los componentes

- **2025-06-29** feat: Actualización de estilos y configuración de linting
  - Actualizado componente Button con nuevos estilos en SCSS
  - Configurado Stylelint para validación de estilos SCSS
  - Corregido uso de funciones obsoletas de Sass
  - Mejorada la consistencia en los estilos de los componentes
  - Actualizadas dependencias relacionadas con el procesamiento de estilos

- **2025-06-29** feat: Implementación del componente Card
  - Creado componente Card con variantes: elevated, outlined y filled
  - Añadidas historias de Storybook con documentación interactiva
  - Implementados tests unitarios con React Testing Library
  - Añadidos estilos CSS personalizables con variables CSS
  - Mejorada la accesibilidad con soporte para teclado y ARIA

- **3bfa360 2025-06-28** refactor: Eliminación de componentes no utilizados y limpieza de código
  - Eliminados componentes obsoletos: Form, HomeV2, Breadcrumb, DatePicker, LayoutV2, Menu, ModalHttpMessage
  - Movidos componentes a carpeta ToDo para futura implementación
  - Limpieza de imports y código no utilizado
  - Actualización de dependencias y configuración de TypeScript

- **e6b7f77 2025-06-28** refactor: Actualización de estilos SCSS y corrección de pruebas
  - Migración de `@import` a `@use` en archivos SCSS
  - Corrección de referencias a variables SCSS con namespaces
  - Actualización de pruebas para reflejar cambios en los estilos
  - Mejora en la organización de estilos por componentes

- **09814fb 2025-06-28** refactor: move component styles to their respective folders
  - Movidos los estilos SCSS a las carpetas de sus respectivos componentes
  - Actualizadas las rutas de importación en los componentes afectados
  - Mejorada la organización del código al agrupar los estilos con sus componentes

- **0415417 2025-06-28** fix: Corregir tipos de íconos y pruebas relacionadas
  - Actualizado el componente Icon para manejar correctamente los tipos de íconos
  - Corregido el error de tipo 'includes' en la verificación de íconos
  - Actualizadas las pruebas unitarias para reflejar los cambios en los tipos
  - Mejorada la documentación de los componentes afectados

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
