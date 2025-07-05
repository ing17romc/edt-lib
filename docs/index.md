# 📚 Documentación de edt-lib

Bienvenido a la documentación técnica de **edt-lib**, una biblioteca de componentes de interfaz de usuario para React con TypeScript.

## 📋 Índice
- [Introducción](#-introducción)
- [Guía de Instalación](#-guía-de-instalación)
- [Configuración Inicial](#-configuración-inicial)
- [Componentes](#-componentes)
- [Temas y Estilos](#-temas-y-estilos)
- [Guía de Contribución](#-guía-de-contribución)
- [Preguntas Frecuentes](#-preguntas-frecuentes)
- [Soporte](#-soporte)

---

## 🚀 Introducción

`edt-lib` es una biblioteca de componentes de interfaz de usuario construida con React 18+ y TypeScript. Está diseñada para ofrecer componentes accesibles, personalizables y listos para producción que siguen las mejores prácticas de desarrollo frontend.

### Características Principales
- **Tipado Estático**: Totalmente escrito en TypeScript
- **Accesibilidad**: Cumple con WCAG 2.1
- **Temas**: Soporte para temas personalizados
- **Responsive**: Componentes que se adaptan a cualquier dispositivo
- **Documentación Interactiva**: Con ejemplos en vivo usando Storybook

## 📥 Guía de Instalación

### Requisitos Previos
- Node.js 16 o superior
- React 18 o superior
- TypeScript 4.9 o superior (recomendado)

### Instalación con npm

```bash
npm install edt-lib
```

### Instalación con Yarn

```bash
yarn add edt-lib
```

## ⚙️ Configuración Inicial

### Configuración de TypeScript

Asegúrate de tener los tipos de React instalados:

```bash
npm install --save-dev @types/react @types/react-dom
```

### Configuración de Iconos

La biblioteca utiliza Material Icons. Añade lo siguiente al `<head>` de tu aplicación:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```

### Configuración del Tema

Envuelve tu aplicación con `ThemeProvider` para habilitar los temas personalizados:

```jsx
import { ThemeProvider } from 'edt-lib';

function App() {
  return (
    <ThemeProvider>
      {/* Tu aplicación aquí */}
    </ThemeProvider>
  );
}
```

## 🧩 Componentes

### Uso Básico

```jsx
import { Button, Card } from 'edt-lib';

function MiComponente() {
  return (
    <Card>
      <h2>Mi Tarjeta</h2>
      <p>Contenido de la tarjeta</p>
      <Button variant="primary">Aceptar</Button>
    </Card>
  );
}
```

### Componentes Disponibles

#### Navegación
- `NavBar` - Barra de navegación superior
- `Footer` - Pie de página
- `Breadcrumb` - Rutas de navegación

#### Formularios
- `Button` - Botones con múltiples variantes
- `CheckButton` - Casillas de verificación
- `RadioButton` - Botones de opción
- `Selector` - Menús desplegables
- `TextArea` - Áreas de texto
- `TextBox` - Campos de texto

#### Superficies
- `Card` - Contenedor de contenido
- `Modal` - Ventanas modales
- `Message` - Mensajes de alerta

#### Datos
- `Table` - Tablas de datos
- `TableWithPagination` - Tablas con paginación
- `TableWithButton` - Tablas con acciones

#### Retroalimentación
- `Spinner` - Indicadores de carga
- `Progress` - Barras de progreso

## 🎨 Temas y Estilos

### Variables de Estilo

La biblioteca utiliza variables CSS personalizadas para colores, tipografía y espaciado. Puedes sobrescribirlas para personalizar el tema.

### Personalización

```scss
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --font-family: 'Arial', sans-serif;
}
```

## 👥 Guía de Contribución

¡Apreciamos las contribuciones! Por favor, lee nuestra [guía de contribución](CONTRIBUTING.md) para comenzar.

### Estándares de Código

- Usar TypeScript con tipado estricto
- Seguir las convenciones de nomenclatura de React
- Escribir pruebas unitarias para todo el código nuevo
- Documentar props y componentes con JSDoc

### Proceso de Pull Request

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## ❓ Preguntas Frecuentes

### ¿Cómo actualizo a la última versión?

```bash
npm update edt-lib
# o
yarn upgrade edt-lib
```

### ¿Cómo reporto un error?

Por favor, abre un [issue](https://github.com/ing17romc/edt-lib/issues) en GitHub con los siguientes detalles:
- Versión de la biblioteca
- Pasos para reproducir el error
- Comportamiento esperado vs. real
- Capturas de pantalla (si aplica)

## 📞 Soporte

Para soporte, por favor:
- Revisa la [documentación de la API](https://ing17romc.github.io/edt-lib/)
- Busca en los [issues existentes](https://github.com/ing17romc/edt-lib/issues)
- Abre un nuevo issue si tu problema no ha sido reportado

---

<div align="center">
  <p>Documentación generada el 5 de Julio de 2025</p>
  <p>Versión actual: 2.9.0</p>
</div>
      <h1>Mi Aplicación</h1>
      <Button>Botón con ícono</Button>
    </div>
  );
}

export default App;
```

## Estructura del proyecto

- `/src`: Código fuente principal de la librería.
- `/docs`: Documentación del proyecto.
- `/dist`: Archivos generados para distribución.

## Contribuir

¡Las contribuciones son bienvenidas! Por favor, sigue estos pasos:
1. Haz un fork del repositorio.
2. Crea una rama para tu funcionalidad o corrección: `git checkout -b mi-feature`
3. Haz commit de tus cambios: `git commit -am 'Agrega nueva funcionalidad'`
4. Haz push a la rama: `git push origin mi-feature`
5. Abre un Pull Request.

## Publicar en npm

- Para publicar una nueva versión en npm:
  ```bash
  npm run publish-lib
  ```
- Para incrementar el patch, compilar y publicar automáticamente:
  ```bash
  npm run release-lib
  ```

## Desplegar Storybook en GitHub Pages

- Para construir y desplegar Storybook:
  ```bash
  npm run deploy-sb
  ```

## Contacto

Para dudas o sugerencias, abre un issue en GitHub o contacta al mantenedor principal.

