import { ButtonProps, ButtonVariant, ButtonSize } from '../types';

export const mockOnClick = jest.fn();

export const defaultButtonProps: ButtonProps = {
  children: 'Click me',
  variant: ButtonVariant.PRIMARY,
  size: ButtonSize.MEDIUM,
  onClick: mockOnClick,
};

export const disabledButtonProps: ButtonProps = {
  children: 'Disabled Button',
  disabled: true,
};

export const fullWidthButtonProps: ButtonProps = {
  children: 'Full Width Button',
  fullWidth: true,
};

export const allVariants = [
  { children: 'Primary', variant: ButtonVariant.PRIMARY },
  { children: 'Secondary', variant: ButtonVariant.SECONDARY },
  { children: 'Tertiary', variant: ButtonVariant.TERTIARY },
  { children: 'Danger', variant: ButtonVariant.DANGER },
  { children: 'Success', variant: ButtonVariant.SUCCESS },
  { children: 'Warning', variant: ButtonVariant.WARNING },
] as const;

export const allSizes = [
  { children: 'Small', size: ButtonSize.SMALL },
  { children: 'Medium', size: ButtonSize.MEDIUM },
  { children: 'Large', size: ButtonSize.LARGE },
] as const;
