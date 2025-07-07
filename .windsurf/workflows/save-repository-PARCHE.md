---
description: Save all repository
---

Realiza los siguientes pasos de manera automatica:

1. Commit y Push Inicial: Guardar todos los cambios de código que hemos realizado hasta ahora.
2. Actualizar Changelog: Documentar los cambios en el archivo changelog.md.
3. Commit y Push del Changelog: Guardar los cambios del changelog.md. (la versión debe corresponder a la versión que se maneja en el package.json)
4. Publicar Storybook: Desplegar la última versión de Storybook. (npm run release-sb).
5. Publicar en NPM: Lanzar una nueva versión parche del paquete. (npm run publish-npm-patch).
6. Por ultimo realizar un "Syncs Changes"
