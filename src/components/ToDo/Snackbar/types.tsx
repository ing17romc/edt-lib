import { HTMLAttributes, ReactNode } from 'react';
import { ComponentVariant } from '../../types';

export type SnackbarVariant = ComponentVariant.PRIMARY | ComponentVariant.SUCCESS | ComponentVariant.DANGER | ComponentVariant.WARNING;

/**
 * Propiedades del componente Snackbar
 */
export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Mensaje a mostrar
   */
  message: ReactNode;

  /**
   * Variante de color
   * @default 'primary'
   */
  variant?: SnackbarVariant;

  /**
   * Si el snackbar es visible
   * @default true
   */
  open?: boolean;

  /**
   * Duración en ms antes de cerrarse automáticamente (0 = no se cierra)
   * @default 4000
   */
  duration?: number;

  /**
   * Callback al cerrar el snackbar
   */
  onClose?: () => void;

  /**
   * Texto del botón de acción (opcional)
   */
  actionLabel?: string;

  /**
   * Callback del botón de acción
   */
  onAction?: () => void;
}
