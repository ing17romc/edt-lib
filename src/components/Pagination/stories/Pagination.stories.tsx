import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from '..';
import { 
  baseArgs, 
  withCustomLabels, 
  withManyPages, 
  disabledState, 
  firstPage, 
  lastPage 
} from './mocks';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Número total de páginas',
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Página actual',
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Función que se ejecuta cuando se cambia de página',
    },
    maxPageButtons: {
      control: { type: 'number', min: 3, max: 10 },
      description: 'Número máximo de botones de página a mostrar',
    },
    previousLabel: {
      control: 'text',
      description: 'Texto para el botón de página anterior',
    },
    nextLabel: {
      control: 'text',
      description: 'Texto para el botón de página siguiente',
    },
    disabled: {
      control: 'boolean',
      description: 'Indica si el componente está deshabilitado',
    },
    className: {
      control: 'text',
      description: 'Clase CSS personalizada',
    },
  },
  args: baseArgs,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: baseArgs,
  parameters: {
    docs: {
      description: {
        story: 'Paginación estándar con 10 páginas y la página 5 seleccionada.',
      },
    },
  },
};

export const WithCustomLabels: Story = {
  args: withCustomLabels,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con etiquetas personalizadas para los botones de navegación.',
      },
    },
  },
};

export const WithManyPages: Story = {
  args: withManyPages,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con muchas páginas que muestra puntos suspensivos para navegación.',
      },
    },
  },
};

export const Disabled: Story = {
  args: disabledState,
  parameters: {
    docs: {
      description: {
        story: 'Paginación deshabilitada que no responde a interacciones.',
      },
    },
  },
};

export const FirstPage: Story = {
  args: firstPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la primera página con el botón anterior deshabilitado.',
      },
    },
  },
};

export const LastPage: Story = {
  args: lastPage,
  parameters: {
    docs: {
      description: {
        story: 'Paginación mostrando la última página con el botón siguiente deshabilitado.',
      },
    },
  },
};
