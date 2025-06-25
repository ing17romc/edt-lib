import { CheckButtonProps } from '../types';

export const mockOnChange = jest.fn();

export const defaultProps: CheckButtonProps = {
  id: 'test-checkbox',
  label: 'Test Checkbox',
  eventChange: mockOnChange,
};

export const disabledProps: CheckButtonProps = {
  ...defaultProps,
  disabled: true,
};

export const readOnlyProps: CheckButtonProps = {
  ...defaultProps,
  readOnly: true,
};

export const requiredProps: CheckButtonProps = {
  ...defaultProps,
  required: true,
};

export const checkedProps: CheckButtonProps = {
  ...defaultProps,
  checked: true,
};

export const withRefProps: CheckButtonProps = {
  ...defaultProps,
  ref: { current: null },
};
