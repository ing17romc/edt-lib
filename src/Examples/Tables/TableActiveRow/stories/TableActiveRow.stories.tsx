import type { Meta, StoryObj } from '@storybook/react';
import TableActiveRow from '..';
import type { TableRowData } from '../types';

// Datos de ejemplo para las historias
const sampleData: TableRowData[] = [
  {
    name: 'John Doe',
    userName: 'johndoe',
    status: true,
  },
  {
    name: 'Jane Smith',
    userName: 'janesmith',
    status: false,
  },
  {
    name: 'Robert Johnson',
    userName: 'rjohnson',
    status: true,
  },
  {
    name: 'Emily Davis',
    userName: 'edavis',
    status: 1, // Usando número para mostrar que también acepta number como status
  },
  {
    name: 'Michael Wilson',
    userName: 'mwilson',
    status: 0, // Usando 0 para mostrar estado inactivo
  },
];

// Configuración del componente en Storybook
const meta: Meta<typeof TableActiveRow> = {
  title: 'Examples/Tables/TableActiveRow',
  component: TableActiveRow,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tabla con filas seleccionables que resaltan al hacer clic. Útil para mostrar datos tabulares donde se necesita interacción con filas específicas.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TableActiveRow>;

// Historia por defecto
export const Default: Story = {
  args: {
    dataTable: sampleData,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con filas seleccionables. Haz clic en cualquier fila para ver el resaltado.',
      },
    },
  },
};

// Historia con estado inicial vacío
export const EmptyState: Story = {
  args: {
    dataTable: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla sin datos. Muestra una tabla vacía sin filas de datos.',
      },
    },
  },
};

// Historia con un solo elemento
export const SingleItem: Story = {
  args: {
    dataTable: [sampleData[0]],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con una sola fila de datos.',
      },
    },
  },
};

// Historia con muchos elementos
export const ManyItems: Story = {
  args: {
    dataTable: [
      ...sampleData,
      {
        name: 'Sarah Williams',
        userName: 'swilliams',
        status: true,
      },
      {
        name: 'David Brown',
        userName: 'dbrown',
        status: false,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con múltiples filas para probar el desplazamiento y la interacción con muchas filas.',
      },
    },
  },
};
