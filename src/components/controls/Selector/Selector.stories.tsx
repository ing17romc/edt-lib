
import type { Meta, StoryObj } from '@storybook/react';
import Selector from './index';
import { mockOptions } from './__tests__/mocks';

const meta: Meta<typeof Selector> = {
  title: 'Controls/Selector',
  component: Selector,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'ID único para el select (requerido)'
    },
    titleTop: {
      control: 'text',
      description: 'Título superior del selector'
    },
    titleBottom: {
      control: 'text',
      description: 'Título inferior del selector'
    },
    value: {
      control: 'text',
      description: 'Valor actual seleccionado'
    },
    required: {
      control: 'boolean',
      description: 'Si el selector es requerido',
      defaultValue: false
    },
    disabled: {
      control: 'boolean',
      description: 'Si el selector está deshabilitado',
      defaultValue: false
    },
    readOnly: {
      control: 'boolean',
      description: 'Si el selector es de solo lectura',
      defaultValue: false
    },
    options: {
      control: 'object',
      description: 'Opciones disponibles para el selector'
    },
    eventChange: {
      action: 'changed',
      description: 'Función que se ejecuta cuando cambia la selección'
    }
  },
  args: {
    id: 'storybook-selector',
    titleTop: 'Selecciona una opción',
    value: 'option2',
    options: mockOptions
  }
};

export default meta;
type Story = StoryObj<typeof Selector>;

export const Default: Story = {};

export const WithBottomTitle: Story = {
  args: {
    titleBottom: 'Este es un texto de ayuda',
    titleTop: 'Selector con título inferior'
  }
};

export const Required: Story = {
  args: {
    required: true,
    titleTop: 'Selector requerido',
    value: ''
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    titleTop: 'Selector deshabilitado'
  }
};

export const ReadOnly: Story = {
  args: {
    readOnly: true,
    titleTop: 'Selector de solo lectura'
  }
};
