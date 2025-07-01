import { RadioButtonProps } from '../types';

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
