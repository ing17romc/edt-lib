import type { Meta } from '@storybook/react';
import { SpinnerProps, SpinnerVariant } from '../types';
import { ComponentSize } from '../../types';

export const defaultArgs: Partial<SpinnerProps> = {
  size: ComponentSize.MEDIUM,
  variant: SpinnerVariant.PRIMARY,
  pulse: false,
  'aria-label': 'Cargando...',
};

export const argTypes: Meta<SpinnerProps>['argTypes'] = {
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Tamaño del spinner',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  variant: {
    control: 'select',
    options: Object.values(SpinnerVariant),
    description: 'Variante de color del spinner',
    table: {
      type: { summary: Object.values(SpinnerVariant).join(' | ') },
      defaultValue: { summary: SpinnerVariant.PRIMARY },
    },
  },
  pulse: {
    control: 'boolean',
    description: 'Si es true, muestra un spinner de tipo pulso',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  'aria-label': {
    control: 'text',
    description: 'Texto accesible para lectores de pantalla',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Cargando...' },
    },
  },
};

/**
 * Todas las variantes disponibles del Spinner
 */
export const allVariants = Object.values(SpinnerVariant);

/**
 * Todos los tamaños disponibles del Spinner
 */
export const allSizes = Object.values(ComponentSize);
