/**
 * Componente Message
 * 
 * Muestra mensajes de retroalimentación al usuario con diferentes niveles de importancia.
 * Soporta diferentes tipos, títulos, cierre opcional y es completamente accesible.
 * 
 * @component
 * @example
 * // Uso básico
 * <Message>Mensaje informativo</Message>
 * 
 * // Con tipo y título
 * <Message type="success" title="¡Éxito!">
 *   La operación se completó correctamente.
 * </Message>
 * 
 * // Con cierre opcional
 * <Message type="warning" closable onClose={handleClose}>
 *   Este mensaje puede cerrarse.
 * </Message>
 */
import React, { useState, useCallback } from 'react';
import type { MessageProps } from './types';
import styles from './Message.module.scss';
import { Icon } from '../../components/Icon';

// Mapeo de iconos según el tipo de mensaje
const iconMap: Record<NonNullable<MessageProps['type']>, string> = {
  success: 'check-circle',
  info: 'info-circle',
  warning: 'exclamation-triangle',
  danger: 'times-circle',
};

/**
 * Determina el rol ARIA adecuado según el tipo de mensaje
 */
const getAriaRole = (type: MessageProps['type']) => 
  type === 'warning' || type === 'danger' ? 'alert' : 'status';

const Message: React.FC<MessageProps> = ({
  type = 'info',
  title,
  children,
  className,
  style,
  closable = false,
  onClose,
  role: propRole,
  'data-testid': testId = 'message',
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const role = propRole || getAriaRole(type);
  const ariaLive = role === 'alert' ? 'assertive' : 'polite';
  
  // Manejador para cerrar el mensaje
  const handleClose = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(false);
    onClose?.();
  }, [onClose]);
  
  if (!isVisible) {
    return null;
  }
  
  const messageClasses = [
    styles.message,
    styles[`message-${type}`],
    closable ? styles.closable : '',
    className || ''
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={messageClasses} 
      style={style} 
      role={role}
      aria-live={ariaLive}
      data-testid={testId}
      {...rest}
    >
      <div className={styles.messageContent}>
        <div className={styles.messageIcon}>
          <Icon name={iconMap[type]} aria-hidden="true" />
        </div>
        
        <div className={styles.messageText}>
          {title && (
            <div 
              className={styles.messageTitle}
              data-testid="message-title"
            >
              {title}
            </div>
          )}
          <div className={styles.messageBody}>
            {children}
          </div>
        </div>
      </div>
      
      {closable && (
        <button
          type="button"
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Cerrar mensaje"
          data-testid="message-close-button"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};

export default Message;