import type { Meta } from '@storybook/react';
import { TextButtonProps } from '../types';
import { ComponentSize } from '../../types';

export const defaultArgs: Partial<TextButtonProps> = {
  children: 'Botón de texto',
  color: 'primary',
  size: ComponentSize.MEDIUM,
  underline: 'hover',
  disabled: false,
  loading: false,
  fullWidth: false,
};

export const argTypes: Meta<TextButtonProps>['argTypes'] = {
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Tamaño del botón de texto',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  color: {
    control: 'select',
    options: ['primary', 'secondary', 'error', 'success', 'warning', 'inherit'],
    description: 'Color del texto del botón',
    table: {
      type: { summary: 'primary | secondary | error | success | warning | inherit' },
      defaultValue: { summary: 'primary' },
    },
  },
  underline: {
    control: 'select',
    options: ['none', 'hover', 'always'],
    description: 'Estilo de subrayado del botón',
    table: {
      type: { summary: 'none | hover | always' },
      defaultValue: { summary: 'hover' },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'Si el botón está deshabilitado',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  loading: {
    control: 'boolean',
    description: 'Si muestra un indicador de carga',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  fullWidth: {
    control: 'boolean',
    description: 'Si el botón ocupa todo el ancho disponible',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};

/**
 * Todos los colores disponibles del TextButton
 */
export const allColors: Array<TextButtonProps['color']> = [
  'primary', 'secondary', 'error', 'success', 'warning', 'inherit',
];

/**
 * Todos los tamaños disponibles del TextButton
 */
export const allSizes = Object.values(ComponentSize);
