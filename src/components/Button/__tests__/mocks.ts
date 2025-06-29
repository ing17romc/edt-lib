import { ButtonProps } from '../types';

export const mockOnClick = jest.fn();

export const defaultButtonProps: ButtonProps = {
  children: 'Click me',
  variant: 'primary',
  size: 'medium',
  onClick: mockOnClick,
};

export const disabledButtonProps: ButtonProps = {
  children: 'Disabled Button',
  disabled: true,
};

export const loadingButtonProps: ButtonProps = {
  children: 'Loading Button',
  loading: true,
};

export const fullWidthButtonProps: ButtonProps = {
  children: 'Full Width Button',
  fullWidth: true,
};

export const allVariants = [
  { children: 'Primary', variant: 'primary' },
  { children: 'Secondary', variant: 'secondary' },
  { children: 'Tertiary', variant: 'tertiary' },
  { children: 'Danger', variant: 'danger' },
  { children: 'Success', variant: 'success' },
  { children: 'Warning', variant: 'warning' },
] as const;

export const allSizes = [
  { children: 'Small', size: 'small' },
  { children: 'Medium', size: 'medium' },
  { children: 'Large', size: 'large' },
] as const;
