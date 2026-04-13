import React from 'react';
import classNames from '../../utils/classNames';
import styles from './styles/Tag.module.scss';
import { TagProps } from './types';
import { ComponentVariant, ComponentSize } from '../types';

/**
 * Informational label for categorizing or classifying content.
 * Supports color variants, sizes, and close option.
 * @component
 */
const Tag: React.FC<TagProps> = ({
  children,
  variant = ComponentVariant.PRIMARY,
  size = ComponentSize.MEDIUM,
  closable = false,
  onClose,
  disabled = false,
  className,
  ...props
}) => {
  const tagClass = classNames(
    styles.tag,
    styles[`tag--${variant}`],
    styles[`tag--${size}`],
    disabled && styles['tag--disabled'],
    className
  );

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!disabled && onClose) {
      onClose();
    }
  };

  return (
    <span className={tagClass} {...props}>
      <span className={styles.tagLabel}>{children}</span>
      {closable && (
        <button
          type="button"
          className={styles.tagClose}
          onClick={handleClose}
          disabled={disabled}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </span>
  );
};

export default Tag;
export type { TagProps };

