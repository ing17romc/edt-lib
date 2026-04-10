import React, { useEffect } from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/Snackbar.module.scss'
import { SnackbarProps } from './types'
import { ComponentVariant } from '../../types'

/**
 * Snackbar component that displays temporary notifications on screen.
 *
 * @param message - Notification text
 * @param variant - Color variant
 * @param open - Whether the snackbar is visible
 * @param duration - Duration in ms before closing (0 = manual)
 * @param onClose - Close callback
 * @param actionLabel - Action button text
 * @param onAction - Action button callback
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
    if (!open || duration === 0) return
    const timer = setTimeout(() => { onClose?.() }, duration)
    return () => clearTimeout(timer)
  }, [open, duration, onClose])

  if (!open) return null

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
            ×
          </button>
        )}
      </div>
    </div>
  )
}

export default Snackbar
export type { SnackbarProps }
