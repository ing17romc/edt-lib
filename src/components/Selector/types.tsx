import { SelectHTMLAttributes } from 'react';
import { ComponentSize } from '../types';

export enum SelectorVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export interface SelectorOption {
  /**
   * Valor único de la opción
   */
  value: string | number;
  
  /**
   * Texto a mostrar para la opción
   */
  label: string;
  
  /**
   * Si es true, la opción está deshabilitada
   * @default false
   */
  disabled?: boolean;
}

export interface SelectorProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Opciones del selector
   */
  options: SelectorOption[];
  
  /**
   * Valor seleccionado actualmente
   */
  value?: string | number;
  
  /**
   * Valor por defecto del selector
   */
  defaultValue?: string | number;
  
  /**
   * Etiqueta del selector
   */
  label?: string;
  
  /**
   * Texto de ayuda o descripción
   */
  helperText?: string;
  
  /**
   * Si es true, muestra un indicador de error
   * @default false
   */
  error?: boolean;
  
  /**
   * Mensaje de error a mostrar cuando hay un error
   */
  errorMessage?: string;
  
  /**
   * Variante visual del selector
   * @default 'primary'
   */
  variant?: SelectorVariant;
  
  /**
   * Tamaño del selector
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * Si es true, el selector ocupa todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Si es true, el selector está en estado de carga
   * @default false
   */
  loading?: boolean;
  
  /**
   * Texto a mostrar cuando no hay opciones
   */
  placeholder?: string;
  
  /**
   * Si es true, el selector es de solo lectura
   * @default false
   */
  readOnly?: boolean;
}
