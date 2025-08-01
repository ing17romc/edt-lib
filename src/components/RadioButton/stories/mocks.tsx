import React from 'react';
import RadioButton from '..';
import { RadioButtonProps } from '../types';
import { ComponentSize } from '../../types';



export const defaultArgs: RadioButtonProps = {
  value: 'option1',
  label: 'Opción 1',
  checked: false,
  disabled: false,
  name: 'radio-group',
  size: ComponentSize.MEDIUM,
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

export const smallSize: RadioButtonProps = {
  ...defaultArgs,
  size: ComponentSize.SMALL,
  label: 'Opción pequeña',
};

export const largeSize: RadioButtonProps = {
  ...defaultArgs,
  size: ComponentSize.LARGE,
  label: 'Opción grande',
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
