import React from 'react';
import Button from '../Button';
import { TextButtonProps } from './types';
import styles from './styles/TextButton.module.scss';
import { ComponentSize, ComponentVariant } from '../types';
  
/**
 * Text button component that extends the functionality of the Button component.
 * Designed for secondary or less prominent actions than regular buttons.
 */
const TextButton: React.FC<TextButtonProps> = ({
  children,
  className = '',
  size = ComponentSize.MEDIUM,
  color = 'primary',
  underline = 'hover',
  disabled = false,
  loading = false,
  fullWidth = false,
  ...rest
}) => {
  const buttonClasses = [
    styles.textButton,
    styles[`size-${size}`],
    styles[`color-${color}`],
    styles[`underline-${underline}`],
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  // Inline styles to override any styles that might be causing issues
  const buttonStyle: React.CSSProperties = {
    // Force transparent color when loading
    ...(loading && { color: 'transparent' }),
    // Force full width when fullWidth is true
    ...(fullWidth && { width: '100%' })
  };

  return (
    <Button
      className={buttonClasses}
      style={buttonStyle}
      disabled={disabled || loading}
      variant={ComponentVariant.PRIMARY}
      size={size as ComponentSize}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default TextButton;
