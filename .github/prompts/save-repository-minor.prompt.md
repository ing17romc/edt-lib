---
mode: 'agent'
description: 'Publicar versión minor del paquete. Hace commit+push, publica en NPM (minor), despliega Storybook y actualiza el CHANGELOG.'
---

Realiza los siguientes pasos de manera automática:

1. **Commit y Push Inicial**: Guardar todos los cambios de código realizados hasta ahora.
2. **Publicar en NPM**: Lanzar una nueva versión menor del paquete ejecutando `npm run publish-npm-minor`.
3. **Publicar Storybook**: Desplegar la última versión de Storybook ejecutando `npm run release-sb`.
4. **Actualizar Changelog**: Documentar los cambios en el archivo `CHANGELOG.md`. La versión debe corresponder a la versión que figura en `package.json`.
5. **Commit y Push del Changelog**: Guardar los cambios del `CHANGELOG.md`.
