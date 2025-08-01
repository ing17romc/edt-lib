import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '..';
import { IconVariant } from '../types';
import { containerStyle, itemContainerStyle, } from './mocks';
import { ComponentSize } from '../../types';

// Configuración de meta para las historias
const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nombre del icono a mostrar',
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Tamaño',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
    variant: {
      control: 'select',
      options: Object.values(IconVariant),
      description: 'Estilo del icono',
      table: {
        defaultValue: { summary: IconVariant.OUTLINE },
      },
    },
    color: {
      control: 'color',
      description: 'Color principal del icono',
    },
    secondaryColor: {
      control: 'color',
      description: 'Color secundario (solo para variante dual)',
    },
    inheritColor: {
      control: { type: 'boolean' },
      description: 'Si hereda el color del elemento padre',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    name: 'home',
    size: ComponentSize.MEDIUM,
    variant: IconVariant.OUTLINE,
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'home',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={containerStyle}>
      {Object.values(ComponentSize).map((size) => (
        <div key={size} style={itemContainerStyle}>
          <Icon name="home" size={size} />
          <span>{size}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra los diferentes tamaños disponibles para el componente Icon.',
      },
    },
  },
};

export const Variants: Story = {
  render: () => (
    <div style={containerStyle}>
      <div style={itemContainerStyle}>
        <Icon name="home" variant={IconVariant.OUTLINE} />
        <span>Outline</span>
      </div>
      <div style={itemContainerStyle}>
        <Icon name="home" variant={IconVariant.SOLID} color="#007bff" />
        <span>Solid</span>
      </div>
      <div style={itemContainerStyle}>
        <Icon 
          name="home" 
          variant={IconVariant.DUAL} 
          color="#ff5722" 
          secondaryColor="#4caf50"
        />
        <span>Dual</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra las diferentes variantes de estilo disponibles para el componente Icon.',
      },
    },
  },
};

export const WithCustomColor: Story = {
  args: {
    name: 'star',
    color: '#ff5722',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de un icono con un color personalizado.',
      },
    },
  },
};

export const WithInheritColor: Story = {
  render: () => (
    <div style={{ color: 'purple' }}>
      <p>Este texto es morado, y el icono hereda el color:</p>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '8px' }}>
        <Icon name="check" inheritColor size={ComponentSize.LARGE} />
        <Icon name="star" inheritColor size={ComponentSize.LARGE} />
        <Icon name="heart" inheritColor size={ComponentSize.LARGE} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de iconos que heredan el color del elemento padre.',
      },
    },
  },
};

export const DisabledState: Story = {
  render: () => (
    <div style={containerStyle}>
      <div style={itemContainerStyle}>
        <Icon name="home" disabled />
        <span>Deshabilitado</span>
      </div>
      <div style={itemContainerStyle}>
        <Icon name="home" />
        <span>Habilitado</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Muestra el estado deshabilitado del icono.',
      },
    },
  },
};
