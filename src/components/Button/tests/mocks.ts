import type { ButtonProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../types';

export const mockOnClick = vi.fn();

export const defaultButtonProps: ButtonProps = {
  children: 'Click me',
  variant: ComponentVariant.PRIMARY,
  size: ComponentSize.MEDIUM,
  onClick: mockOnClick,
};

export const disabledButtonProps: ButtonProps = {
  ...defaultButtonProps,
  children: 'Disabled Button',
  disabled: true,
};

