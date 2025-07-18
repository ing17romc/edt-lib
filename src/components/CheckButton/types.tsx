import { InputHTMLAttributes } from 'react';

/**
 * Tamaños disponibles para el componente CheckButton
 */
export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

/**
 * Propiedades del componente CheckButton
 * Extendemos de InputHTMLAttributes pero omitimos 'onChange' y 'size' para evitar conflictos
 */
export interface CheckButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  /**
   * Etiqueta que se muestra junto al checkbox
   */
  label?: string;
  
  /**
   * Estado del checkbox (controlado)
   * @default false
   */
  checked?: boolean;
  
  /**
   * Estado deshabilitado del checkbox
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Función que se ejecuta cuando cambia el estado del checkbox
   * @param checked - Nuevo valor del checkbox
   */
  onChange?: (checked: boolean) => void;
  
  /**
   * Clase CSS personalizada
   */
  className?: string;

  /**
   * Tamaño del botón de verificación
   * @default 'medium'
   */
  size?: ButtonSize;
}
