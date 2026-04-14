import React, { useEffect } from 'react';
import classNames from '../../utils/classNames';
import styles from './styles/Snackbar.module.scss';
import { SnackbarProps } from './types';
import { ComponentVariant } from '../types';

/**
 * Snackbar component that displays temporary notifications on screen.
 */
const Snackbar = ({
  message,
  variant = ComponentVariant.PRIMARY,
  open = true,
  duration = 4000,
  onClose,
  actionLabel,
  onAction,
  className,
  ...rest
}: SnackbarProps) => {
  useEffect(() => {
    if (!open || duration === 0) {
      return;
    }

    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      className={classNames(
        styles.snackbar,
        styles[`snackbar--${variant}`],
        className
      )}
      {...rest}
    >
      <span className={styles.message}>{message}</span>
      <div className={styles.actions}>
        {actionLabel && (
          <button
            type="button"
            className={styles.actionButton}
            onClick={onAction}
          >
            {actionLabel}
          </button>
        )}
        {onClose && (
          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close"
            onClick={onClose}
          >
            {'\u00D7'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Snackbar;
export type { SnackbarProps };
