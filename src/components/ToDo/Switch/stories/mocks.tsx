import type { Meta } from '@storybook/react';
import { SwitchProps } from '../types';
import { ComponentSize } from '../../../types';

export const defaultArgs: Partial<SwitchProps> = {
  label: 'Activar opción',
  checked: false,
  size: ComponentSize.MEDIUM,
  disabled: false,
};

export const argTypes: Meta<SwitchProps>['argTypes'] = {
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Tamaño del switch',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  checked: {
    control: 'boolean',
    description: 'Estado del switch',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  disabled: {
    control: 'boolean',
    description: 'Si el switch está deshabilitado',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  label: {
    control: 'text',
    description: 'Etiqueta del switch',
  },
};

export const allSizes = Object.values(ComponentSize);
