import { HTMLAttributes } from 'react';

/**
 * Propiedades del componente DatePicker
 */
export interface DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Valor seleccionado (formato ISO: YYYY-MM-DD)
   */
  value?: string;

  /**
   * Callback al seleccionar una fecha
   */
  onChange?: (value: string) => void;

  /**
   * Fecha mínima permitida (formato ISO: YYYY-MM-DD)
   */
  min?: string;

  /**
   * Fecha máxima permitida (formato ISO: YYYY-MM-DD)
   */
  max?: string;

  /**
   * Placeholder del input
   * @default 'DD/MM/YYYY'
   */
  placeholder?: string;

  /**
   * Si el campo está deshabilitado
   * @default false
   */
  disabled?: boolean;

  /**
   * Etiqueta del campo
   */
  label?: string;
}
