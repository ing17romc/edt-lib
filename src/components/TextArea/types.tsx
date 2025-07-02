import { TextareaHTMLAttributes } from 'react';

export type TextAreaVariant = 'outlined' | 'filled' | 'standard';
export type TextAreaSize = 'small' | 'medium' | 'large';

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /**
   * Etiqueta que se muestra encima del área de texto
   */
  label?: string;
  
  /**
   * Texto de ayuda que se muestra debajo del área de texto
   */
  helperText?: string;
  
  /**
   * Si es true, muestra un indicador de error
   * @default false
   */
  error?: boolean;
  
  /**
   * Si es true, el área de texto ocupa todo el ancho disponible
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Variante de diseño del área de texto
   * @default 'outlined'
   */
  variant?: TextAreaVariant;
  
  /**
   * Tamaño del área de texto
   * @default 'medium'
   */
  size?: TextAreaSize;
  
  /**
   * Número de filas por defecto
   * @default 3
   */
  rows?: number;
  
  /**
   * Número máximo de caracteres permitidos
   */
  maxLength?: number;
  
  /**
   * Si es true, el área de texto se redimensiona automáticamente según el contenido
   * @default false
   */
  autoResize?: boolean;

  /**
   * Número mínimo de filas cuando autoResize es true
   */
  minRows?: number;

  /**
   * Número máximo de filas cuando autoResize es true
   */
  maxRows?: number;
  
  /**
   * Clase CSS personalizada para el contenedor
   */
  containerClassName?: string;
  
  /**
   * Clase CSS personalizada para la etiqueta
   */
  labelClassName?: string;
  
  /**
   * Clase CSS personalizada para el área de texto
   */
  textareaClassName?: string;
  
  /**
   * Clase CSS personalizada para el texto de ayuda
   */
  helperTextClassName?: string;
  
  /**
   * Función que se llama cuando el valor del área de texto cambia
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
