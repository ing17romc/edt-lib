import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
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
      description: 'Material Icons name (e.g. "home", "star", "settings"). See https://fonts.google.com/icons for the full list.',
      table: { type: { summary: 'string' } },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Size of the icon.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
    variant: {
      control: 'select',
      options: Object.values(IconVariant),
      description: 'Icon style variant: outline, solid, or dual-tone.',
      table: {
        type: { summary: Object.values(IconVariant).join(' | ') },
        defaultValue: { summary: IconVariant.OUTLINE },
      },
    },
    color: {
      control: 'color',
      description: 'Primary color of the icon. Has no effect when inheritColor is true.',
      table: { type: { summary: 'string' } },
    },
    secondaryColor: {
      control: 'color',
      description: 'Secondary color used only for the dual-tone variant.',
      table: { type: { summary: 'string' } },
    },
    inheritColor: {
      control: { type: 'boolean' },
      description: 'When true, the icon inherits its color from the parent element.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Renders a Material Icons glyph with support for multiple sizes, style variants (outline, solid, dual-tone) and custom or inherited colors.',
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
