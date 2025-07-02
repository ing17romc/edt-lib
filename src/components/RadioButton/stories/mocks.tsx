import React from 'react';
import { Meta } from '@storybook/react';
import RadioButton from '..';
import { RadioButtonProps } from '../types';

export const meta: Meta<typeof RadioButton> = {
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

export const defaultArgs: RadioButtonProps = {
  value: 'option1',
  label: 'Opción 1',
  checked: false,
  disabled: false,
  name: 'radio-group',
};

export const checkedArgs: RadioButtonProps = {
  ...defaultArgs,
  checked: true,
};

export const disabledArgs: RadioButtonProps = {
  ...defaultArgs,
  disabled: true,
};

export const disabledCheckedArgs: RadioButtonProps = {
  ...defaultArgs,
  checked: true,
  disabled: true,
};

export const withCustomClass: RadioButtonProps = {
  ...defaultArgs,
  className: 'custom-radio-class',
};

// Componente para el grupo de opciones
export const RadioGroupComponent = () => {
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
