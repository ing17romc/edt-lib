import { RadioButtonProps } from '../types';
import { ComponentSize } from '../../types';

export const defaultProps: RadioButtonProps = {
  value: 'option1',
  label: 'Opción 1',
  checked: false,
  disabled: false,
  name: 'test-group',
  size: ComponentSize.MEDIUM,
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
  size: ComponentSize.MEDIUM,
};

export const smallSizeProps: RadioButtonProps = {
  ...defaultProps,
  size: ComponentSize.SMALL,
  label: 'Opción pequeña',
};

export const largeSizeProps: RadioButtonProps = {
  ...defaultProps,
  size: ComponentSize.LARGE,
  label: 'Opción grande',
};
