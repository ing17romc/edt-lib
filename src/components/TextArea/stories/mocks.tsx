import { Meta } from '@storybook/react';
import { TextAreaProps } from '../types';
import TextArea from '../';

export const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'filled', 'standard'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    rows: { control: { type: 'number', min: 1, max: 20 } },
    maxLength: { control: { type: 'number', min: 1 } },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    required: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    autoResize: { control: 'boolean' },
  },
  parameters: {
    componentSubtitle: 'Área de texto de múltiples líneas',
    docs: {
      description: {
        component: 'Un componente de área de texto que permite la entrada de texto de múltiples líneas. Soporta diferentes variantes, tamaños y redimensionamiento automático.'
      },
    },
  },
};

export const defaultArgs: TextAreaProps = {
  label: 'Descripción',
  placeholder: 'Escribe algo...',
  variant: 'outlined',
  size: 'medium',
  rows: 3,
};
