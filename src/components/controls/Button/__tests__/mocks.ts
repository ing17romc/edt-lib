import { ButtonProps } from '../types';

export const mockOnClick = jest.fn();

export const defaultProps: ButtonProps = {
  title: 'Click me',
  type: 'PRIMARY',
  size: 'MD',
};

export const disabledButtonProps: ButtonProps = {
  title: 'Disabled Button',
  disabled: true,
};

export const secondaryButtonProps: ButtonProps = {
  title: 'Secondary',
  type: 'SECONDARY',
};

export const smallButtonProps: ButtonProps = {
  title: 'Small Button',
  size: 'SM',
};

export const largeButtonProps: ButtonProps = {
  title: 'Large Button',
  size: 'LG',
};
