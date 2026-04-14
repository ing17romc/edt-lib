# Plan de implementacion

## Contexto y alcance

Este proyecto es una libreria de componentes en React. Queda fuera de alcance cualquier trabajo relacionado con autenticacion, JWT, login, logout, sesiones, backend o integraciones API.

El objetivo es evolucionar la libreria hacia un sistema visual mas consistente, escalable y reusable, con:

- arquitectura SCSS mantenible
- componentes visualmente coherentes
- soporte oficial para `light` y `dark`
- compatibilidad con `React`, `Next.js` y `SSR`
- migracion progresiva para reducir riesgo

## Diagnostico actual

- Ya existe una base de tokens en `src/styles/palette.scss`, `src/styles/typography.scss` y `src/styles/spacing.scss`.
- La mayoria de los componentes usan `styles/*.module.scss`, pero todavia hay excepciones como `CheckButton.scss`.
- Hay mezcla de enfoques entre variables Sass y `CSS variables`.
- Algunos componentes consumen `var(--color-...)` que hoy no siempre estan definidas globalmente.
- El dark mode esta fragmentado y resuelto de forma puntual en ciertos componentes.
- La documentacion menciona `ThemeProvider`, pero el contrato publico de temas no esta consolidado.

## Decisiones tecnicas

- Mantener `SCSS Modules` como estrategia principal de encapsulamiento.
- Usar una capa dual:
  - `tokens Sass` para autoria y consistencia
  - `CSS variables` para runtime, temas y soporte SSR
- Implementar theming mediante `data-theme`.
- Diseñar una identidad visual neutra, sobria y reusable.
- Migrar en olas, no en una sola refactorizacion masiva.
- Evitar dependencias entre estilos de componentes.

## Arquitectura objetivo de estilos

### Estructura por componente

Cada componente debe mantener una estructura uniforme:

- `index.tsx`
- `types.tsx`
- `styles/ComponentName.module.scss`
- `stories/`
- `tests/`

### Estructura global

`src/styles` debe contener solo capas compartidas:

- `palette.scss`
- `typography.scss`
- `spacing.scss`
- `set-root.scss`
- archivos globales transversales necesarios

No debe haber imports de estilos desde un componente hacia otro componente.

## Reglas SCSS

Todos los componentes deben usar exclusivamente imports globales como base:

```scss
@use 'sass:map';
@use 'sass:color';
@use '../../../styles/palette' as *;
@use '../../../styles/typography' as *;
@use '../../../styles/spacing' as *;
```

Reglas:

- encapsular estilos con `SCSS Modules`
- evitar clases globales salvo en capas base del sistema
- no redefinir tokens globales dentro de componentes
- no importar estilos de otros componentes
- modelar estados visuales desde tokens semanticos
- evitar colores hardcodeados dentro de componentes

## Sistema visual

### Direccion visual

Se adopta un sistema neutro y moderno:

- superficies limpias
- contraste claro
- bordes suaves
- foco visible consistente
- uso medido del color de acento

### Paleta

- primario: azul neutro
- neutros: escala para fondo, superficie, borde, texto y estados pasivos
- semanticos: success, warning, danger, info

### Tipografia

- familia base sans-serif legible y segura para SSR
- jerarquia corta y clara para titulos, labels, cuerpo y helper text

### Espaciado

- escala uniforme basada en 4px
- reuse sistematico en padding, gaps, alturas y layouts

### Estados

Todos los componentes interactivos deben definir de forma coherente:

- `hover`
- `focus-visible`
- `active`
- `disabled`
- `loading`

## Sistema de temas

### Estrategia

- usar `CSS variables` semanticas para valores de runtime
- usar `data-theme="light"` y `data-theme="dark"` como contrato estable
- exponer una API publica de tema para la app consumidora

### Alternancia de tema

- permitir `light`, `dark` y `system`
- resolver `system` solo en cliente
- evitar acceso a `window` durante render SSR

### Persistencia

- persistir preferencia en `localStorage` solo despues del montaje
- usar fallback estable en SSR para evitar errores de hidratacion

### Compatibilidad de componentes

Todos los componentes deben terminar consumiendo variables semanticas del tema y no depender de ajustes ad hoc por componente.

## Plan de ejecucion progresiva

### Fase 1. Base global

- consolidar tokens globales
- definir variables CSS semanticas para `light` y `dark`
- introducir `ThemeProvider` y `useTheme`
- corregir variables CSS faltantes

### Fase 2. Componentes fundacionales

- migrar `Button`
- migrar `IconButton`
- migrar `TextButton`
- migrar `TextBox`
- migrar `TextArea`
- migrar `Selector`
- migrar `CheckButton`
- migrar `RadioButton`
- migrar `Message`

### Fase 3. Componentes compuestos

- migrar `Layout`, `NavBar`, `Footer`
- migrar `Modal`, `Tabs`, `Snackbar`, `Tag`
- migrar componentes con estados de seleccion o resaltado

### Fase 4. Documentacion y validacion

- actualizar exports publicos
- actualizar README y ejemplos de uso
- agregar soporte de tema en Storybook
- validar `build`, tests y consumo en SSR

## Criterios de aceptacion

- existe `plan.md` con la estrategia oficial
- la libreria expone un sistema de tema publico y compatible con SSR
- las variables globales cubren `light` y `dark`
- no hay dependencias SCSS cruzadas entre componentes
- los componentes base tienen estados visuales coherentes
- Storybook y tests reflejan el nuevo contrato visual

## Riesgos a controlar

- mezcla temporal entre tokens viejos y nuevos durante la migracion
- regresiones visuales en componentes acoplados a colores legacy
- diferencias de hidratacion si el tema se resuelve tarde en cliente
- deuda tecnica en componentes todavia no migrados
