import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ComponentSize, ComponentVariant } from '../types';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
  /**
   * Contenido del botón (texto o elementos React)
   */
  children: ReactNode;
  
  /**
   * Variante visual del botón
   * @default 'primary'
   */
  variant?: ComponentVariant;
  
  /**
   * Tamaño del botón
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * Si es true, el botón ocupa todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;
  
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
   * Si es true, el botón está cargando
   * @default false
   */
  loading?: boolean;
  
  /**
   * Manejador de clic del botón
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
    /**
   * Clase CSS adicional para el botón
   */
  className?: string;
}
