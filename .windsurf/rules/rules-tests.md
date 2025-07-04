---
trigger: always_on
---

Todos los componentes deben seguir una estructura de carpetas y archivos coherente. Ejemplo:

```
📁 src/**/NombreDelComponente/
├── tests/
│   ├── NombreDelComponente.test.tsx
│   └── mocks.tsx
└── index.tsx
```

## 🧪 Pruebas (Tests)

- Los tests unitarios deben ser simples y fáciles de entender.
- Crear un archivo `mocks.tsx` con las props y configuraciones necesarias para los casos de prueba.
- Reutilizar los valores definidos en los `enums` dentro de los archivos de test y de mocks.