import type { Meta } from '@storybook/react';
import { ButtonProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../types';

export const defaultArgs = {
  children: 'Button',
  disabled: false,
  fullWidth: false,
};

export const argTypes = {
  variant: {  
    control: 'select',
    options: Object.values(ComponentVariant),
    description: 'Variante visual del botón',
    table: {
      type: { summary: Object.values(ComponentVariant).join(' | ') },
      defaultValue: { summary: ComponentVariant.PRIMARY },
    },
  },
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Tamaño del botón',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'Si el botón está deshabilitado',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  fullWidth: {
    control: 'boolean',
    description: 'Si el botón ocupa todo el ancho disponible',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  onClick: { action: 'clicked' },
};

export const variants = Object.values(ComponentVariant).map((variant) => ({
  variant,
  label: variant.charAt(0).toUpperCase() + variant.slice(1),
}));

export const sizes = Object.values(ComponentSize).map((size) => ({
  size,
  label: size.charAt(0).toUpperCase() + size.slice(1),
}));

export const buttonStories: Meta<ButtonProps> = {
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(ComponentVariant),
      description: 'Variante visual del botón',
      table: {
        type: { summary: Object.values(ComponentVariant).join(' | ') },
        defaultValue: { summary: ComponentVariant.PRIMARY },
      },
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
    disabled: {
      control: { type: 'boolean' },
      description: 'Si el botón está deshabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Si el botón ocupa todo el ancho disponible',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: { 
      action: 'clicked',
      description: 'Función que se ejecuta al hacer clic en el botón',
    },
  },
  args: defaultArgs as ButtonProps,
};
