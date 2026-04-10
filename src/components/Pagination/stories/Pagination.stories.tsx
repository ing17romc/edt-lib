import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from '..';
import { ComponentSize } from '../../types';
import { 
  baseArgs, 
  withCustomLabels, 
  withManyPages, 
  disabledState, 
  firstPage, 
  lastPage,
  smallSize,
  largeSize
} from './mocks';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages.',
      table: { type: { summary: 'number' } },
    },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Currently active page (1-based).',
      table: { type: { summary: 'number' } },
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback fired with the new page number when the user navigates.',
      table: { type: { summary: '(page: number) => void' } },
    },
    maxPageButtons: {
      control: { type: 'number', min: 3, max: 10 },
      description: 'Maximum number of page buttons visible at once. Defaults to 5.',
      table: { type: { summary: 'number' }, defaultValue: { summary: '5' } },
    },
    previousLabel: {
      control: 'text',
      description: 'Label for the previous-page button.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '←' } },
    },
    nextLabel: {
      control: 'text',
      description: 'Label for the next-page button.',
      table: { type: { summary: 'string' }, defaultValue: { summary: '→' } },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, all pagination controls are non-interactive.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for the pagination root element.',
      table: { type: { summary: 'string' } },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Size of the pagination buttons.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A navigation component for paginated data sets. Renders numbered page buttons with previous/next controls, configurable size, and a disabled state.',
      },
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
        story: 'Paginación mostrando la última página.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: smallSize,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con tamaño pequeño (SMALL).',
      },
    },
  },
};

export const LargeSize: Story = {
  args: largeSize,
  parameters: {
    docs: {
      description: {
        story: 'Paginación con tamaño grande (LARGE).',
      },
    },
  },
};
