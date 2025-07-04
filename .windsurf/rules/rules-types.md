---
trigger: always_on
---

Todos los componentes deben seguir una estructura de carpetas y archivos coherente. Ejemplo:

```
📁 src/**/NombreDelComponente/
├── index.tsx
└── types.tsx
```

---

## 📐 Tipado

- Usar `enums` en lugar de constantes siempre que sea posible.
- Agrupar `types`, `enums` e `interfaces` específicos del componente en su archivo `types.tsx`.
- Si algún tipo es reutilizable entre varios componentes, moverlo a la carpeta global `src/types/`.