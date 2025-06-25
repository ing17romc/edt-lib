import { ReactEventHandler } from 'react';

export interface ButtonProps {
  id?: string;
  title: string;
  disabled?: boolean;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  type?: 'PRIMARY' | 'SECONDARY' | 'DANGER' | 'SUCCESS' | 'WARNING' | 'INFO';
  size?: 'SM' | 'MD' | 'LG';
}

export type ButtonComponent = React.FC<ButtonProps>;

export type { ButtonProps, ButtonComponent };
