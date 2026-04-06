import type { Meta } from '@storybook/react';
import { TagProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../../types';

export const defaultArgs: Partial<TagProps> = {
  children: 'Etiqueta',
  variant: ComponentVariant.PRIMARY,
  size: ComponentSize.MEDIUM,
  closable: false,
  disabled: false,
};

export const argTypes: Meta<TagProps>['argTypes'] = {
  variant: {
    control: 'select',
    options: Object.values(ComponentVariant),
    description: 'Variante de color del tag',
    table: {
      type: { summary: Object.values(ComponentVariant).join(' | ') },
      defaultValue: { summary: ComponentVariant.PRIMARY },
    },
  },
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Tamaño del tag',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  closable: {
    control: 'boolean',
    description: 'Si el tag puede cerrarse',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  disabled: {
    control: 'boolean',
    description: 'Si el tag está deshabilitado',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
};

export const allVariants = Object.values(ComponentVariant);
export const allSizes = Object.values(ComponentSize);
