import { ReactEventHandler } from 'react';
import { SIZE_CONTROL, STYLE_CONTROL } from '../../utils/constant';

type SizeType = keyof typeof SIZE_CONTROL;
type StyleType = keyof typeof STYLE_CONTROL;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  id?: string;
  title: string;
  disabled?: boolean;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  buttonType?: Uppercase<StyleType>;
  size?: Uppercase<SizeType>;
  className?: string;
}

export type ButtonComponent = React.FC<ButtonProps>;

export type { ButtonProps, ButtonComponent };
