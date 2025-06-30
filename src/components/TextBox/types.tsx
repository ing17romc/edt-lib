import { InputHTMLAttributes, ReactNode } from 'react';

export type TextBoxVariant = 'outlined' | 'filled' | 'standard';
export type TextBoxSize = 'small' | 'medium' | 'large';

export interface TextBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Etiqueta que se muestra encima del campo de texto
   */
  label?: string;
  
  /**
   * Texto de ayuda que se muestra debajo del campo
   */
  helperText?: string;
  
  /**
   * Si es true, muestra un indicador de error
   * @default false
   */
  error?: boolean;
  
  /**
   * Si es true, el campo ocupa todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Variante de diseño del campo de texto
   * @default 'outlined'
   */
  variant?: TextBoxVariant;
  
  /**
   * Tamaño del campo de texto
   * @default 'medium'
   */
  size?: TextBoxSize;
  
  /**
   * Elemento que se muestra al inicio del campo
   */
  startAdornment?: ReactNode;
  
  /**
   * Elemento que se muestra al final del campo
   */
  endAdornment?: ReactNode;
  
  /**
   * Clase CSS personalizada para el contenedor
   */
  containerClassName?: string;
  
  /**
   * Clase CSS personalizada para la etiqueta
   */
  labelClassName?: string;
  
  /**
   * Clase CSS personalizada para el campo de entrada
   */
  inputClassName?: string;
  
  /**
   * Clase CSS personalizada para el texto de ayuda
   */
  helperTextClassName?: string;
}
