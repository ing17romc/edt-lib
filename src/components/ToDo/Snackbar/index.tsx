import React, { useEffect } from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/Snackbar.module.scss'
import { SnackbarProps } from './types'
import { ComponentVariant } from '../../types'

/**
 * Componente Snackbar que muestra notificaciones temporales en la pantalla.
 *
 * @param message - Texto de la notificación
 * @param variant - Variante de color
 * @param open - Si el snackbar es visible
 * @param duration - Duración en ms antes de cerrarse (0 = manual)
 * @param onClose - Callback al cerrar
 * @param actionLabel - Texto del botón de acción
 * @param onAction - Callback del botón de acción
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
            aria-label="Cerrar"
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
