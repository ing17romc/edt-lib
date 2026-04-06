import { InputHTMLAttributes } from 'react';
import { ComponentSize } from '../../types';

/**
 * Propiedades del componente Switch
 */
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Etiqueta del switch
   */
  label?: string;

  /**
   * Si el switch está activado
   * @default false
   */
  checked?: boolean;

  /**
   * Callback al cambiar el estado
   */
  onChange?: (checked: boolean) => void;

  /**
   * Tamaño del switch
   * @default 'medium'
   */
  size?: ComponentSize;

  /**
   * Si el switch está deshabilitado
   * @default false
   */
  disabled?: boolean;
}
