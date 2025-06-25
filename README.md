
# edt-lib

**UI component library for React 19 + TypeScript.**  
Incluye componentes reutilizables y accesibles para aplicaciones modernas.

## 📦 Dependencias

### Material Icons

La biblioteca utiliza [Material Icons](https://fonts.google.com/icons) para los iconos. Asegúrate de incluir el siguiente enlace en el `<head>` de tu aplicación:

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet">
```

O si estás usando un framework como Next.js, puedes agregarlo en el archivo `_document.js` o `_app.js`:

```jsx
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

---

## Instalación

Puedes instalar la librería usando npm:

```bash
npm install edt-lib
```

O usando yarn:

```bash
yarn add edt-lib
```

---

## Publicar en npm

Asegúrate de tener permisos para publicar el paquete en npm y haber actualizado la versión en `package.json` si es necesario.

1. Compila el paquete y publícalo con:
   ```bash
   npm run publish-lib
   ```
   O para incrementar el patch, compilar y publicar automáticamente:
   ```bash
   npm run release-lib
   ```

---

## Desplegar Storybook en GitHub Pages

1. Construye y despliega Storybook ejecutando:
   ```bash
   npm run deploy-sb
   ```
   Esto generará el build y lo publicará en GitHub Pages usando la rama gh-pages.

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

Clona el repositorio y ejecuta:

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