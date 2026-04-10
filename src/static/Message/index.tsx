/**
 * Message Component
 * 
 * Displays feedback messages to the user with different levels of importance.
 * Supports different types, titles, optional closing, and is fully accessible.
 * 
 * @component
 * @example
 * // Basic usage
 * <Message>Informational message</Message>
 * 
 * // With type and title
 * <Message type="success" title="Success!">
 *   The operation was completed successfully.
 * </Message>
 * 
 * // With optional closing
 * <Message type="warning" closable onClose={handleClose}>
 *   This message can be closed.
 * </Message>
 */
import React, { useState, useCallback } from 'react';
import type { MessageProps } from './types';
import styles from './Message.module.scss';
import { Icon } from '../../components/Icon';

// Icon mapping based on message type
const iconMap: Record<NonNullable<MessageProps['type']>, string> = {
  success: 'check-circle',
  info: 'info-circle',
  warning: 'exclamation-triangle',
  danger: 'times-circle',
};

/**
 * Determines the appropriate ARIA role based on message type
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
  
  // Handler for closing the message
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
          aria-label="Close message"
          data-testid="message-close-button"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};

export default Message;