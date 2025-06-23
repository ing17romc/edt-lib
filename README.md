
# edt-lib

**UI component library for React 19 + TypeScript.**  
Incluye componentes reutilizables y accesibles para aplicaciones modernas.

---

## 📦 Instalación

```sh
npm install edt-lib
```

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