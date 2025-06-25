import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Breadcrumb from './index';
import { mockOptions, mockCustomOptions } from './__test__/mocks';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Controls/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs', 'controls'],
  parameters: {
    componentSubtitle: 'Componente de navegación jerárquica',
    docs: {
      description: {
        component: 'Muestra la ubicación actual dentro de una jerarquía de navegación y permite la navegación a niveles superiores.'
      },
    },
  },
  argTypes: {
    options: {
      description: 'Array de opciones que se mostrarán en el breadcrumb',
      table: {
        type: { summary: 'BreadcrumbOption[]' },
      },
    },
    getCurrentPath: {
      description: 'Función que se ejecuta al hacer clic en un elemento',
      table: {
        type: { summary: '(url: string, event: React.MouseEvent<HTMLButtonElement>) => void' },
      },
      control: false,
    },
    className: {
      description: 'Clase CSS personalizada para el contenedor del breadcrumb',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    separator: {
      description: 'Separador personalizado entre elementos',
      control: false,
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  args: {
    options: mockOptions,
    getCurrentPath: action('navigate-to'),
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

/**
 * Breadcrumb básico con opciones por defecto
 */
export const Default: Story = {};

/**
 * Breadcrumb con opciones personalizadas
 */
export const WithCustomOptions: Story = {
  args: {
    options: mockCustomOptions,
  },
};

/**
 * Breadcrumb con separador personalizado
 */
export const WithCustomSeparator: Story = {
  args: {
    separator: <span style={{ margin: '0 8px' }}>›</span>,
  },
};

/**
 * Breadcrumb con clase personalizada
 */
export const WithCustomClass: Story = {
  args: {
    className: 'custom-breadcrumb',
  },
};

/**
 * Breadcrumb con elementos deshabilitados
 */
export const WithDisabledItems: Story = {
  args: {
    options: [
      { url: '/home', text: 'Inicio' },
      { url: '/categoria', text: 'Categoría', disabled: true },
      { url: '/producto', text: 'Producto' },
    ],
  },
};

/**
 * Ejemplo de breadcrumb en contexto
 */
export const InContext: Story = {
  render: (args) => (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
      <h2>Página de producto</h2>
      <div style={{ margin: '15px 0' }}>
        <Breadcrumb {...args} />
      </div>
      <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '4px' }}>
        <h3>Detalles del producto</h3>
        <p>Contenido de la página de producto...</p>
      </div>
    </div>
  ),
  args: {
    options: [
      { url: '/', text: 'Inicio' },
      { url: '/productos', text: 'Productos' },
      { url: '/productos/123', text: 'Producto 123' },
    ],
  },
};
