# 🛠️ Instrucciones del Proyecto edt-lib

## 📁 Estructura de Carpeta de los Componentes

Todos los componentes deben seguir esta estructura de carpetas y archivos:

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

Carpeta de estilos globales:

```
📁 src/styles/
├── palette.scss
├── typography.scss
└── spacing.scss
```

---

## 🚫 Reglas Generales

- El código debe ser limpio, simple y fácilmente reutilizable.
- No se deben instalar dependencias de terceros.
- El código no debe generar *warnings* ni errores de *lint*, ni en archivos `.scss` ni `.ts/.tsx`.
- La descripción del componente y de sus propiedades (`props`) debe seguir un formato consistente en toda la base de código.

---

## 📐 Tipado

- Usar `enums` en lugar de constantes siempre que sea posible.
- Agrupar `types`, `enums` e `interfaces` específicos del componente en su archivo `types.tsx`.
- Si algún tipo es reutilizable entre varios componentes, moverlo a la carpeta global `src/types/`.

---

## 🎨 Estilos

- Mantener coherencia visual entre todos los componentes.
- Si se define una paleta de colores (por ejemplo, tonos azules), todos los componentes deben respetarla.
- Centralizar estilos globales en `src/styles/`: colores en `palette.scss`, tipografías en `typography.scss`, espacios en `spacing.scss`.
- Usar `color.adjust()` en vez de `darken()` o `lighten()` y agregar `@use 'sass:color'` al inicio del archivo.
- Tener en cuenta las recomendaciones de Dart Sass 2.0.0.

---

## 🧪 Pruebas (Tests)

- Los tests unitarios deben ser simples y fáciles de entender.
- Crear un archivo `mocks.tsx` en `tests/` con las props y configuraciones necesarias para los casos de prueba.
- Reutilizar los valores definidos en los `enums` dentro de los archivos de test y de mocks.

---

## 📚 Storybook

- La documentación visual debe tener un estilo uniforme en todos los componentes.
- Reutilizar los valores de los `enums` tanto en los archivos de `stories` como en los `mocks`.
- Los `stories` deben ser simples y directos.
- Crear un archivo `mocks.tsx` en la carpeta `stories/` con las configuraciones necesarias para los props.
