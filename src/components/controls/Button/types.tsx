import { ReactEventHandler } from 'react';
import { ControlSize, ControlStyle } from '../../utils/constant';

type SizeType = 'sm' | 'md' | 'lg' | 'xs';
type StyleType = 'primary' | 'secondary';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  id?: string;
  title: string;
  disabled?: boolean;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  buttonType?: StyleType;
  size?: SizeType;
  className?: string;
}

export type ButtonComponent = React.FC<ButtonProps>;
