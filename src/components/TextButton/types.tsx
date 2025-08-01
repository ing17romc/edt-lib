import { ButtonProps } from '../Button/types';
import { ComponentSize } from '../types';

export interface TextButtonProps extends Omit<ButtonProps, 'variant' | 'size' | 'fullWidth'> {
  /** 
   * Tamaño del botón de texto
   * @default 'medium'
   * @deprecated Use ComponentSize from '../types' instead.
   */
  size?: ComponentSize;
  
  /** 
   * Si es true, el botón ocupa todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;
  
  /** 
   * Si es true, muestra el botón en estado de deshabilitado
   * @default false
   */
  disabled?: boolean;
  
  /** 
   * Si es true, muestra un indicador de carga
   * @default false
   */
  loading?: boolean;
  
  /** 
   * Color del texto del botón
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'inherit';
  
  /** 
   * Si es true, añade un subrayado al texto
   * @default false
   */
  underline?: 'none' | 'hover' | 'always';
}
