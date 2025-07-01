import type { Meta, StoryObj } from '@storybook/react';
import TableDefault from '..';
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
    status: 1,
  },
  {
    name: 'Michael Wilson',
    userName: 'mwilson',
    status: 0,
  },
];

// Configuración del componente en Storybook
const meta: Meta<typeof TableDefault> = {
  title: 'Examples/Tables/TableDefault',
  component: TableDefault,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tabla predeterminada que muestra múltiples columnas con información repetida. Útil para mostrar grandes conjuntos de datos en un formato tabular amplio.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TableDefault>;

// Historia por defecto
export const Default: Story = {
  args: {
    dataTable: sampleData,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla predeterminada con múltiples columnas que repiten la información.',
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
        story: 'Tabla sin datos. Muestra solo los encabezados de las columnas.',
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
        story: 'Tabla con múltiples filas para probar el desplazamiento horizontal.',
      },
    },
  },
};
