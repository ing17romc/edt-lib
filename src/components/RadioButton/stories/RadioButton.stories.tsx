import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import RadioButton from '..';
import { RadioButtonProps } from '../types';
import {
  defaultArgs,
  checkedArgs,
  disabledArgs,
  disabledCheckedArgs,
  withCustomClass,
  smallSize,
  largeSize,
  RadioGroupComponent,
} from './mocks';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Valor único que identifica este botón de radio',
    },
    label: {
      control: 'text',
      description: 'Texto que se muestra junto al botón de radio',
    },
    checked: {
      control: 'boolean',
      description: 'Indica si el botón de radio está seleccionado',
    },
    disabled: {
      control: 'boolean',
      description: 'Indica si el botón de radio está deshabilitado',
    },
    name: {
      control: 'text',
      description: 'Nombre del grupo al que pertenece el botón de radio',
    },
    className: {
      control: 'text',
      description: 'Clase CSS opcional para personalizar el estilo',
    },
    onChange: {
      action: 'changed',
      description: 'Función que se ejecuta cuando cambia el estado del botón de radio',
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: defaultArgs,
};

export const Checked: Story = {
  args: checkedArgs,
};

export const Disabled: Story = {
  args: disabledArgs,
};

export const DisabledChecked: Story = {
  args: disabledCheckedArgs,
};

export const WithCustomClass: Story = {
  args: withCustomClass,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con una clase CSS personalizada aplicada.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: smallSize,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con tamaño pequeño (SMALL).',
      },
    },
  },
};

export const LargeSize: Story = {
  args: largeSize,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton con tamaño grande (LARGE).',
      },
    },
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioButton {...smallSize} label="Opción pequeña (SMALL)" />
      <RadioButton {...defaultArgs} label="Opción mediana (MEDIUM)" />
      <RadioButton {...largeSize} label="Opción grande (LARGE)" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo que muestra las diferentes variantes de tamaño disponibles para el RadioButton.',
      },
    },
  },
};

export const Group: Story = {
  render: () => <RadioGroupComponent />,
};

// Componente controlado
const ControlledComponent = (args: RadioButtonProps) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  
  return (
    <RadioButton
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

// Ejemplo de uso controlado
export const Controlled: Story = {
  render: (args) => <ControlledComponent {...args} />,
  args: defaultArgs,
};
