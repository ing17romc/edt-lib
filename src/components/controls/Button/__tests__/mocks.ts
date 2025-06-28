import { ButtonProps } from '../types';
import { ControlSize, ControlStyle } from '../../../utils/enums';

export const mockOnClick = jest.fn();

export const defaultProps: ButtonProps = {
  title: 'Click me',
  buttonType: ControlStyle.PRIMARY,
  size: ControlSize.MD,
};

export const disabledButtonProps: ButtonProps = {
  title: 'Disabled Button',
  disabled: true,
};

export const secondaryButtonProps: ButtonProps = {
  title: 'Secondary',
  buttonType: ControlStyle.SECONDARY,
};

export const smallButtonProps: ButtonProps = {
  title: 'Small Button',
  size: ControlSize.SM,
};

export const largeButtonProps: ButtonProps = {
  title: 'Large Button',
  size: ControlSize.LG,
};
