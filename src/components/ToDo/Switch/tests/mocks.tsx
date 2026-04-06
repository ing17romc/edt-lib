import { SwitchProps } from '../types';
import { ComponentSize } from '../../../types';

export const mockOnChange = jest.fn();

export const defaultSwitchProps: SwitchProps = {
  label: 'Activar opción',
  checked: false,
  size: ComponentSize.MEDIUM,
  onChange: mockOnChange,
};

export const checkedSwitchProps: SwitchProps = {
  ...defaultSwitchProps,
  checked: true,
};

export const disabledSwitchProps: SwitchProps = {
  ...defaultSwitchProps,
  disabled: true,
};

export const allSizes = Object.values(ComponentSize);
