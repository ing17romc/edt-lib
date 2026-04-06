import { HTMLAttributes, ReactNode } from 'react';
import { ComponentVariant, ComponentSize } from '../../types';

/**
 * Propiedades del componente Tag
 */
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Contenido del tag
   */
  children: ReactNode;

  /**
   * Variante de color
   * @default 'primary'
   */
  variant?: ComponentVariant;

  /**
   * Tamaño del tag
   * @default 'medium'
   */
  size?: ComponentSize;

  /**
   * Si el tag puede ser cerrado/eliminado
   * @default false
   */
  closable?: boolean;

  /**
   * Callback al cerrar el tag
   */
  onClose?: () => void;

  /**
   * Si el tag está deshabilitado
   * @default false
   */
  disabled?: boolean;
}
