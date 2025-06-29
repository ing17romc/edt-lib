---
trigger: always_on
---

Prompt generales del proyecto


📁 Estructura dela carpeta del componentes 
	• Todos los componentes deben seguir una estructura de carpetas archivos consistente. Ejemplo:

📁 src/components/Componente/
├── tests/
│   ├── Componente.test.tsx
│   └── mocks.tsx
├── stories/
│   ├── Componente.stories.tsx
│   └── mocks.tsx
├── styles/
│   └── Componente.scss
├── index.tsx
└── types.tsx

	• El código debe ser limpio, simple y fácilmente reutilizable.


🧩 Composición del Componente
	• La descripción del componente y de sus parámetros (props) debe mantener un formato unificado en toda la base de código.


🎨 Estilos
	• Aplicar un estilo visual coherente entre todos los componentes.
	• Por ejemplo, si se define que los componentes usan tonos azules, todos deben respetar esa misma paleta de colores.
	• Crear archivos de estilos para organizar las paletas de colores, tamaños y fuente de texto, etc general en esta ruta “src/styles”para reutilizarlos en todos los componentes


📐 Types

	• Utilizar enums en lugar de constantes cuando sea posible.
	• Centralizar los types, enums e interfaces propios del componente en su archivo types.ts.
	• Si existe algún type, enum o interface que sea reutilizable entre múltiples componentes, debe moverse a la carpeta global src/types/.


🧪 Tests
	• Para los tests unitarios, se debe crear un archivo mocks.tsx donde se definan los props y configuraciones necesarias para los casos de prueba.
	• Los test unitarios deben ser sencillos 
	• Usar los valores de los enums tanto en los archivos de tests como en los mocks para reutilizar los valores


📚 Storybook
	• Toda la documentación visual debe mantener un estilo uniforme entre los componentes, tanto en estructura como en presentación.
	• Usar los valores de los enums tanto en los archivos de stories como en los mocks para reutilizar los valores
	• Los Storybook deben ser sencillos 
	• Para los Storybook, se debe crear un archivo mocks.tsx donde se definan los props y configuraciones necesarias.

OTROS
	• No instalar dependencias de terceros
	• Simpre cumplir con esta 