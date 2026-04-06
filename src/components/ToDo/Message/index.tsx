import React from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/Message.module.scss'
import { MessageProps } from './types'
import { ComponentVariant } from '../../types'

const variantIcons: Record<string, string> = {
  [ComponentVariant.PRIMARY]: 'ℹ',
  [ComponentVariant.SUCCESS]: '✓',
  [ComponentVariant.DANGER]: '✕',
  [ComponentVariant.WARNING]: '⚠',
}

/**
 * Componente Message que muestra mensajes informativos con diferentes niveles de importancia.
 *
 * @param children - Contenido del mensaje
 * @param variant - Variante de color/tipo
 * @param title - Título opcional
 * @param closable - Si se puede cerrar
 * @param onClose - Callback al cerrar
 */
const Message = ({
  children,
  variant = ComponentVariant.PRIMARY,
  title,
  closable = false,
  onClose,
  className,
  ...rest
}: MessageProps) => (
  <div
    role="alert"
    className={classNames(
      styles.message,
      styles[`message--${variant}`],
      className
    )}
    {...rest}
  >
    <span className={styles.icon} aria-hidden="true">
      {variantIcons[variant]}
    </span>
    <div className={styles.body}>
      {title && <strong className={styles.title}>{title}</strong>}
      <div className={styles.content}>{children}</div>
    </div>
    {closable && (
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
)

export default Message
export type { MessageProps }
