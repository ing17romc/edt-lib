/**
 * Message
 *
 * Este componente muestra mensajes de estado (éxito, información, advertencia y peligro) 
 * para proporcionar retroalimentación visual clara al usuario según el contexto de la acción realizada.
 * Incluye soporte para accesibilidad, cierre opcional y personalización de estilos.
 *
 * @component
 * @example
 * // Uso básico
 * <Message type="success">Operación completada con éxito</Message>
 * 
 * // Con título personalizado
 * <Message type="warning" title="Atención">
 *   Este es un mensaje de advertencia importante.
 * </Message>
 * 
 * // Con botón de cierre
 * <Message 
 *   type="info" 
 *   title="Información"
 *   closable
 *   onClose={() => console.log('Mensaje cerrado')}
 * >
 *   Este mensaje se puede cerrar haciendo clic en la X.
 * </Message>
 */
import React, { useState, useCallback } from 'react';
import cx from 'classnames';
import type { MessageProps } from './types';
import styles from './Message.module.scss';
import { Icon } from '../../components/Icon';

/**
 * Componente Message
 * 
 * Muestra un mensaje con diferentes estilos según su tipo (éxito, info, advertencia, peligro).
 * Soporta títulos, cierre opcional, y es completamente accesible.
 */
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
  
  // Determinar el rol ARIA por defecto según el tipo de mensaje
  const defaultRole = type === 'warning' || type === 'danger' ? 'alert' : 'status';
  const role = propRole || defaultRole;
  
  // Mapeo de iconos según el tipo de mensaje
  const iconMap = {
    success: 'check-circle',
    info: 'info-circle',
    warning: 'exclamation-triangle',
    danger: 'times-circle',
  };
  
  // Manejador para cerrar el mensaje
  const handleClose = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  }, [onClose]);
  
  // Si el mensaje no es visible, no renderizar nada
  if (!isVisible) {
    return null;
  }
  
  const messageClasses = cx(
    styles.message,
    {
      [styles[`message-${type}`]]: type,
      [styles.closable]: closable,
    },
    className
  );

  return (
    <div 
      className={messageClasses} 
      style={style} 
      role={role}
      aria-live={role === 'alert' ? 'assertive' : 'polite'}
      data-testid={testId}
      {...rest}
    >
      <div className={styles.messageContent}>
        <div className={styles.messageIcon}>
          <Icon name={iconMap[type]} aria-hidden="true" />
        </div>
        
        <div className={styles.messageBody}>
          {title && (
            <strong className={styles.messageTitle} data-testid="message-title">
              {title}
            </strong>
          )}
          
          <div className={styles.messageText} data-testid="message-content">
            {children}
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
            <Icon name="times" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Message;