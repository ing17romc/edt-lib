---
trigger: always_on
---

# 🛠️ Prompt General del Proyecto

## 📁 Estructura de Carpeta de los Componentes

Todos los componentes deben seguir una estructura de carpetas y archivos coherente. Ejemplo:

```
📁 src/**/NombreDelComponente/
├── tests/
│   ├── NombreDelComponente.test.tsx
│   └── mocks.tsx
├── stories/
│   ├── NombreDelComponente.stories.tsx
│   └── mocks.tsx
├── styles/
│   └── NombreDelComponente.scss
├── index.tsx
└── types.tsx
```

---

## 🧩 Composición del Componente

- La descripción del componente y de sus propiedades (`props`) debe seguir un formato consistente en toda la base de código.

---

## 🚫 Reglas Generales

- El código debe ser limpio, simple y fácilmente reutilizable.
- No se deben instalar dependencias de terceros.
- El código no debe generar *warnings* ni errores de *lint*, ni en archivos `.scss` ni `.ts/.tsx`.