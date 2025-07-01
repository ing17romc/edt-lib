import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import RadioButton from '..';
import { RadioButtonProps } from '../types';
import { 
  defaultArgs, 
  checkedArgs, 
  disabledArgs, 
  disabledCheckedArgs, 
  withCustomClass 
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
  args: defaultArgs,
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
};

// Componente para el grupo de opciones
const RadioGroupComponent = () => {
  const [selectedValue, setSelectedValue] = React.useState('option1');
  
  const handleChange = (value: string | number) => {
    setSelectedValue(String(value));
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioButton
        value="option1"
        label="Opción 1"
        checked={selectedValue === 'option1'}
        onChange={handleChange}
        name="example-group"
      />
      <RadioButton
        value="option2"
        label="Opción 2"
        checked={selectedValue === 'option2'}
        onChange={handleChange}
        name="example-group"
      />
      <RadioButton
        value="option3"
        label="Opción 3 (deshabilitada)"
        checked={selectedValue === 'option3'}
        onChange={handleChange}
        name="example-group"
        disabled
      />
    </div>
  );
};

// Ejemplo de uso en un grupo de opciones
export const RadioGroup: Story = {
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
