import { HTMLAttributes } from 'react';

/**
 * Propiedades del componente CheckButton
 */
export interface CheckButtonProps extends HTMLAttributes<HTMLInputElement> {
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
}
