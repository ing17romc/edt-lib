# edt-lib: Documentación

Bienvenido a la documentación oficial de **edt-lib**.

## Índice
- [¿Qué es edt-lib?](#qué-es-edt-lib)
- [Instalación](#instalación)
- [Uso básico](#uso-básico)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Contribuir](#contribuir)
- [Contacto](#contacto)

---

## ¿Qué es edt-lib?
`edt-lib` es una biblioteca desarrollada para facilitar [describir propósito del proyecto aquí, por ejemplo: la manipulación de datos EDT, integración con sistemas, etc.].

## Instalación

Puedes instalar la librería usando npm:

```bash
npm install edt-lib
```

O usando yarn:

```bash
yarn add edt-lib
```

## Uso básico

```js
import { ejemploFuncion } from 'edt-lib';

// Ejemplo de uso
const resultado = ejemploFuncion(parametros);
console.log(resultado);
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

