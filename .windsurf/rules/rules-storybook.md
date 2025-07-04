---
trigger: always_on
---

Todos los componentes deben seguir una estructura de carpetas y archivos coherente. Ejemplo:

```
📁 src/**/NombreDelComponente/
├── stories/
│   ├── NombreDelComponente.stories.tsx
│   └── mocks.tsx
└── index.tsx
```

---

## 📚 Storybook

- La documentación visual debe tener un estilo uniforme en todos los componentes.
- Reutilizar los valores de los `enums` tanto en los archivos de `stories` como en los `mocks`.
- Los `stories` deben ser simples y directos.
- Crear un archivo `mocks.tsx` en la carpeta `stories` con las configuraciones necesarias para los props.