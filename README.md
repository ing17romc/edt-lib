<div align="center">
  <h1>edt-lib</h1>
  <p><strong>UI Component Library for React 18+ with TypeScript</strong></p>
  
  [![npm version](https://img.shields.io/npm/v/edt-lib.svg?style=flat-square)](https://www.npmjs.com/package/edt-lib)
  [![GitHub license](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/ing17romc/edt-lib/blob/main/LICENSE)
  [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://ing17romc.github.io/edt-lib/)
  [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

  <p>Una biblioteca de componentes de interfaz de usuario moderna, accesible y altamente personalizable para aplicaciones React.</p>
</div>

## ✨ Características

- 🚀 Construido con React 18+ y TypeScript
- 🎨 Diseño consistente con soporte para temas personalizados
- ♿️ Totalmente accesible (WCAG 2.1)
- 📱 Diseño responsivo
- 🧪 Cobertura de pruebas completa
- 📚 Documentación interactiva con Storybook
- 🔧 Fácil de personalizar y extender

## 📦 Instalación

Instala el paquete usando npm o yarn:

```bash
# Usando npm
npm install edt-lib

# O usando yarn
yarn add edt-lib
```

## 🔌 Requisitos Previos

### Material Icons

La biblioteca utiliza [Material Icons](https://fonts.google.com/icons) para los iconos. Asegúrate de incluir el siguiente enlace en el `<head>` de tu aplicación:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```

### Configuración de TypeScript

Si estás usando TypeScript, asegúrate de tener instalados los tipos de React:

```bash
npm install --save-dev @types/react @types/react-dom
```

## 🚀 Uso Rápido

```jsx
import React from 'react';
import { Button, ThemeProvider } from 'edt-lib';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Bienvenido a edt-lib</h1>
        <Button variant="primary" onClick={() => alert('¡Hola!')}>
          Haz clic aquí
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## 🧩 Componentes Disponibles

### Componentes Básicos
- `Button` - Botones con múltiples variantes
- `Card` - Contenedor de contenido con estilos predefinidos
- `CheckButton` - Botones de verificación
- `Icon` - Componente de iconos
- `IconButton` - Botones que contienen iconos
- `Modal` - Ventanas modales
- `RadioButton` - Botones de opción
- `Selector` - Menús desplegables
- `Spinner` - Indicadores de carga
- `TextArea` - Áreas de texto editables
- `TextBox` - Campos de texto
- `TextButton` - Botones de texto
- `Title` - Títulos con estilos predefinidos

### Componentes de Tabla
- `TableDefault` - Tabla básica
- `TableActiveRow` - Tabla con filas seleccionables
- `TableWithButton` - Tabla con botones de acción
- `TableWithIcon` - Tabla con iconos
- `TableWithPagination` - Tabla con paginación

### Utilidades
- `ThemeProvider` - Proveedor de temas personalizados
- `Grid` - Sistema de cuadrícula responsive
- `Message` - Componente para mostrar mensajes al usuario
- `Typography` - Estilos tipográficos consistentes

## 📚 Documentación Completa

Para ver ejemplos detallados y la documentación completa de todos los componentes, visita nuestra [documentación de Storybook](https://ing17romc.github.io/edt-lib/).

## 🛠 Desarrollo

### Requisitos
- Node.js 16+
- npm 7+ o yarn 1.22+

### Instalación de dependencias

```bash
# Instalar dependencias
npm install
# o
yarn
```

### Comandos disponibles

```bash
# Iniciar servidor de desarrollo de Storybook
npm run sb

# Ejecutar pruebas
npm test

# Ejecutar linter
npm run lint

# Construir para producción
npm run build

# Desplegar documentación
npm run release-sb

# Publicar nueva versión (minor)
npm run publish-npm-minor
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, lee nuestra [guía de contribución](CONTRIBUTING.md) para más detalles.

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  Hecho con ❤️ por el equipo de edt-lib
</div>

## Publicar en npm

Asegúrate de tener permisos para publicar el paquete en npm y haber actualizado la versión en `package.json` si es necesario.

1. Para incrementar el patch, compilar y publicar automáticamente:
   ```bash
   npm run publish-npm
   ```
   Este comando actualizará automáticamente la versión (patch), construirá el paquete y lo publicará en el registro público de npm.

---

## Desplegar Storybook en GitHub Pages

1. Para construir y desplegar Storybook en GitHub Pages, ejecuta:
   ```bash
   npm run release-sb
   ```
   Este comando construirá la aplicación, creará una carpeta `.gh-pages` y desplegará el contenido en la rama `gh-pages` de tu repositorio.

---

## 🚀 Uso básico

```tsx
import { Title } from 'edt-lib';

function App() {
  return <Title level={1}>¡Hola, mundo!</Title>;
}
```

---

## 📚 Documentación Visual

Consulta la documentación interactiva y ejemplos en vivo en:  
👉 [Storybook: http://ing17romc.github.io/edt-lib/](http://ing17romc.github.io/edt-lib/)

---

## 🧑‍💻 Desarrollo local

Clona el repositorio y ejecuta los siguientes comandos:

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia Storybook para desarrollo:
   ```bash
   npm run sb
   ```
   Esto construirá los componentes y abrirá Storybook en http://localhost:6006

3. Para ejecutar los tests:
   ```bash
   npm test
   ```

4. Para limpiar y reinstalar dependencias (útil en caso de problemas):
   ```bash
   npm run clean
   ```

5. Para construir los componentes para producción:
   ```bash
   npm run build
   ```

---

## 📦 Scripts disponibles

- `clean`: Limpia las dependencias y las reinstala
- `build`: Construye los componentes para producción
- `test`: Ejecuta las pruebas unitarias
- `lint`: Ejecuta el linter
- `sb`: Inicia Storybook en modo desarrollo
- `release-sb`: Despliega Storybook en GitHub Pages
- `publish-npm`: Publica una nueva versión en npm

---

```sh
npm install
npm run storybook
```

---

## 🧪 Tests

```sh
npm run test
```

---

## 🚢 Publicar en NPM

1. Aumenta la versión en `package.json`.
2. Compila el paquete si es necesario (`npm run build`).
3. Publica:
   ```sh
   npm publish --access public
   ```

---

## 🌐 Deploy de Storybook (demo visual)

```sh
npm run build-storybook
npm run deploy-storybook
```
Esto publicará la documentación en GitHub Pages:  
[http://ing17romc.github.io/edt-lib/](http://ing17romc.github.io/edt-lib/)

---

## 📦 Repositorio

- [GitHub](https://github.com/ing17romc/edt-lib/)
- [NPM](https://www.npmjs.com/package/edt-lib)

---

## 📝 Changelog

Consulta cambios y releases en [CHANGELOG.md](./CHANGELOG.md).

---

## License

ISC

# How to use

## Install 

```
npm i edt-lib
```

## Styles 
> Import the styles in the `index` file
```jsx
import 'edt-lib/index.scss';
```

## Scripts 
> Import the componet using `import` in your page
```jsx
import { UI } from 'edt-lib';
```

## Example

> You can have more detail of all the components with their respective configuration options by visiting the [HomePage](http://ing17romc.github.io/edt-lib/)

```jsx
import React from 'react';
import { UI } from 'edt-lib';

const Example = () => {
    const { Title } = UI

    return (
        <div>
            <Title label='This is an example' />
        </div>
    );
};

export default Example;

```