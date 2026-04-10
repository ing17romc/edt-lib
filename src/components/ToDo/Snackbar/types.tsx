import { HTMLAttributes, ReactNode } from 'react';
import { ComponentVariant } from '../../types';

export type SnackbarVariant = ComponentVariant.PRIMARY | ComponentVariant.SUCCESS | ComponentVariant.DANGER | ComponentVariant.WARNING;

/**
 * Snackbar component props
 */
export interface SnackbarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Message to display
   */
  message: ReactNode;

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: SnackbarVariant;

  /**
   * Whether the snackbar is visible
   * @default true
   */
  open?: boolean;

  /**
   * Duration in ms before auto-closing (0 = does not close)
   * @default 4000
   */
  duration?: number;

  /**
   * Callback when the snackbar closes
   */
  onClose?: () => void;

  /**
   * Action button text (optional)
   */
  actionLabel?: string;

  /**
   * Action button callback
   */
  onAction?: () => void;
}
