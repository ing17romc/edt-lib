---
trigger: always_on
---

Todos los componentes deben seguir una estructura de carpetas y archivos coherente. Ejemplo:

```
📁 src/**/NombreDelComponente/
├── styles/
│   └── NombreDelComponente.scss
└── index.tsx
```

Carpeta de estilos globales:

```
📁 src/styles/
├── palette.scss
├── typography.scss
└── spacing.scss
```

## 🎨 Estilos

- Mantener coherencia visual entre todos los componentes.
- Si se define una paleta de colores (por ejemplo, tonos azules), todos los componentes deben respetarla.
- Centralizar estilos globales como colores (en palette.scss), tamaños de fuente y tipografías (typography.scss) y espacios en pixeles (spacing.scss) en la carpeta `src/styles/` para que puedan ser reutilizados.