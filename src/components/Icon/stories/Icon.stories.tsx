import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Icon from '..';
import { IconSize, IconVariant } from '../types';

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
      options: Object.values(IconSize),
      description: 'Tamaño del icono',
      table: {
        defaultValue: { summary: IconSize.MEDIUM },
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
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    name: 'home',
    size: IconSize.MEDIUM,
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
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Icon name="home" size={IconSize.XSMALL} />
      <span>XSmall</span>
      <Icon name="home" size={IconSize.SMALL} />
      <span>Small</span>
      <Icon name="home" size={IconSize.MEDIUM} />
      <span>Medium</span>
      <Icon name="home" size={IconSize.LARGE} />
      <span>Large</span>
      <Icon name="home" size={IconSize.XLARGE} />
      <span>XLarge</span>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon name="home" variant={IconVariant.OUTLINE} />
        <span>Outline</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon name="home" variant={IconVariant.SOLID} color="#007bff" />
        <span>Solid</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
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
};

export const WithCustomColor: Story = {
  args: {
    name: 'star',
    color: '#ff5722',
  },
};

export const WithInheritColor: Story = {
  render: () => (
    <div style={{ color: 'purple' }}>
      <p>Este texto es morado, y el icono hereda el color:</p>
      <Icon name="check" inheritColor />
    </div>
  ),
};
