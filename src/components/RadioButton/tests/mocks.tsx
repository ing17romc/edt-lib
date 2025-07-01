import { RadioButtonProps } from '../types';

export const defaultProps: RadioButtonProps = {
  value: 'option1',
  label: 'Opción 1',
  checked: false,
  disabled: false,
  name: 'test-group',
};

export const checkedProps: RadioButtonProps = {
  ...defaultProps,
  checked: true,
};

export const disabledProps: RadioButtonProps = {
  ...defaultProps,
  disabled: true,
};

export const customClassProps: RadioButtonProps = {
  ...defaultProps,
  className: 'custom-radio-class',
};

export const withoutLabelProps: RadioButtonProps = {
  value: 'option2',
  label: '', // Etiqueta vacía para pruebas sin etiqueta visible
  checked: false,
  name: 'test-group',
};
