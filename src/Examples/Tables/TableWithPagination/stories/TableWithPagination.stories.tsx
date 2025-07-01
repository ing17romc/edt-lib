import type { Meta, StoryObj } from '@storybook/react';
import TableWithPagination from '..';
import type { TableRowData } from '../types';

// Datos de ejemplo para las historias
const generateSampleData = (count: number): TableRowData[] => {
  const names = ['John', 'Jane', 'Robert', 'Emily', 'Michael', 'Sarah', 'David', 'Emma', 'James', 'Olivia'];
  const lastNames = ['Doe', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez'];
  
  return Array.from({ length: count }, (_, i) => ({
    name: `${names[i % names.length]} ${lastNames[i % lastNames.length]}`,
    userName: `${(names[i % names.length] + lastNames[i % lastNames.length]).toLowerCase()}`,
    status: i % 3 === 0 ? true : i % 3 === 1 ? false : 1,
  }));
};

const smallDataset = generateSampleData(5);
const mediumDataset = generateSampleData(15);
const largeDataset = generateSampleData(50);

// Configuración del componente en Storybook
const meta: Meta<typeof TableWithPagination> = {
  title: 'Examples/Tables/TableWithPagination',
  component: TableWithPagination,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tabla con paginación que permite navegar entre páginas de datos y ajustar la cantidad de filas mostradas por página. Ideal para grandes conjuntos de datos que necesitan ser divididos en páginas manejables.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TableWithPagination>;

// Historia por defecto
export const Default: Story = {
  args: {
    dataTable: mediumDataset,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con paginación que muestra 15 elementos por defecto, distribuidos en varias páginas según sea necesario.',
      },
    },
  },
};

// Historia con conjunto de datos pequeño
export const SmallDataset: Story = {
  args: {
    dataTable: smallDataset,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con un conjunto pequeño de datos (menos de una página).',
      },
    },
  },
};

// Historia con conjunto de datos grande
export const LargeDataset: Story = {
  args: {
    dataTable: largeDataset,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla con un conjunto grande de datos (varias páginas) para probar la paginación completa.',
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
        story: 'Tabla sin datos. Muestra un mensaje indicando que no hay datos disponibles.',
      },
    },
  },
};
