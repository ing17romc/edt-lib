import React from 'react';
import classNames from '../../utils/classNames';
import styles from './styles/Message.module.scss';
import { MessageProps } from './types';
import { ComponentVariant } from '../types';

const variantIcons: Record<string, string> = {
  [ComponentVariant.PRIMARY]: '\u2139',
  [ComponentVariant.SUCCESS]: '\u2713',
  [ComponentVariant.DANGER]: '\u2715',
  [ComponentVariant.WARNING]: '\u26A0',
};

/**
 * Message component that displays informational messages with different levels of importance.
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
        aria-label="Close"
        onClick={onClose}
      >
        {'\u00D7'}
      </button>
    )}
  </div>
);

export default Message;
export type { MessageProps };
