/**
 * Message
 *
 * Este componente muestra mensajes de estado (éxito, información, advertencia y peligro) 
 * para proporcionar retroalimentación visual clara al usuario según el contexto de la acción realizada.
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
 */
import React from 'react';
import cx from 'classnames';
import type { MessageProps } from './types';
import styles from './Message.module.scss';

const Message: React.FC<MessageProps> = ({
  type = 'info',
  title,
  children,
  className,
  style,
}) => {
  const messageClasses = cx(
    styles.message,
    {
      [styles[`message-${type}`]]: type,
    },
    className
  );

  return (
    <div className={messageClasses} style={style} data-testid="message">
      {title && <strong data-testid="message-title">{title}</strong>}{' '}
      <span data-testid="message-content">{children}</span>
    </div>
  );
};

export default Message;