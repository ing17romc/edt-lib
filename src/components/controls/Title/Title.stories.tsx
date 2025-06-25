import type { Meta, StoryObj } from '@storybook/react';
import Title from './index';
import { TitleLevel } from './types';

/**
 * El componente `Title` es un componente reutilizable para mostrar títulos con diferentes niveles (h1-h6).
 * Soporta estilos personalizados y todas las propiedades HTML estándar de un elemento de encabezado.
 */
const meta: Meta<typeof Title> = {
  title: 'Controls/Title',
  component: Title,
  tags: ['autodocs', 'controls'],
  parameters: {
    componentSubtitle: 'Componente de título personalizable',
    docs: {
      description: {
        component: 'Un componente de título que puede representarse como h1-h6 con estilos personalizables.'
      },
    },
  },
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
      description: 'Nivel del heading (h1-h6)',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: '1' },
      },
    },
    className: { 
      control: 'text', 
      description: 'Clase CSS adicional para personalizar el estilo',
      table: {
        type: { summary: 'string' },
      },
    },
    style: { 
      control: 'object', 
      description: 'Estilos CSS en línea',
      table: {
        type: { summary: 'React.CSSProperties' },
      },
    },
    children: { 
      control: 'text', 
      description: 'Contenido del título',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  args: {
    level: 1 as TitleLevel,
    children: 'Título principal',
  },
};

export default meta;
type Story = StoryObj<typeof Title>;

/**
 * Título de nivel 1 por defecto
 */
export const Default: Story = {};

/**
 * Título con nivel personalizado
 */
export const WithCustomLevel: Story = {
  args: {
    level: 2,
    children: 'Título de nivel 2',
  },
};

/**
 * Título con clase personalizada
 */
export const WithCustomClass: Story = {
  args: {
    level: 3,
    className: 'custom-title',
    children: 'Título con clase personalizada',
  },
};

/**
 * Título con estilos en línea
 */
export const WithInlineStyles: Story = {
  args: {
    level: 4,
    style: { 
      color: '#007bff',
      fontStyle: 'italic',
    },
    children: 'Título con estilos en línea',
  },
};

/**
 * Título con todas las personalizaciones
 */
export const FullyCustomized: Story = {
  args: {
    level: 5,
    className: 'custom-title',
    style: {
      color: '#28a745',
      textDecoration: 'underline',
    },
    children: 'Título completamente personalizado',
  },
};

export const Niveles: Story = {
  render: () => (
    <>
      <Title level={1}>Título h1</Title>
      <Title level={2}>Título h2</Title>
      <Title level={3}>Título h3</Title>
      <Title level={4}>Título h4</Title>
      <Title level={5}>Título h5</Title>
      <Title level={6}>Título h6</Title>
    </>
  ),
};

export const Personalizado: Story = {
  args: {
    level: 2,
    className: 'custom-title',
    style: { color: 'tomato', fontWeight: 'bold' },
    children: 'Título personalizado',
  },
};
