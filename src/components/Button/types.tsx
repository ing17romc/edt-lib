import { ButtonHTMLAttributes, ReactNode } from 'react';

export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Contenido del botón (texto o elementos React)
   */
  children: ReactNode;
  
  /**
   * Variante visual del botón
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * Tamaño del botón
   * @default 'medium'
   */
  size?: ButtonSize;
  
  /**
   * Si es true, el botón ocupa todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Si es true, muestra un indicador de carga
   * @default false
   */
  loading?: boolean;
  
  /**
   * Tipo de botón HTML
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * Si es true, el botón está deshabilitado
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Clase CSS adicional para el botón
   */
  className?: string;
  
  /**
   * Función que se ejecuta al hacer clic en el botón
   */
  onClick?: () => void;
}
