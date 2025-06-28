import { ReactEventHandler } from 'react';
import { ControlSize, ControlStyle } from '../../utils/enums';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  id?: string;
  title: string;
  disabled?: boolean;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  buttonType?: ControlStyle;
  size?: ControlSize;
  className?: string;
}

export type ButtonComponent = React.FC<ButtonProps>;
