import React, { forwardRef } from 'react';
import { TextBoxProps } from './types';
import { ComponentSize } from '../types';
import styles from './styles/TextBox.module.scss';

/**
 * Componente de campo de texto que permite la entrada de texto de una sola línea.
 * Soporta diferentes variantes, tamaños y estados.
 */
const TextBox = forwardRef<HTMLInputElement, TextBoxProps>(({
  label,
  helperText,
  error = false,
  fullWidth = false,
  variant = 'outlined',
  size = ComponentSize.MEDIUM,
  startAdornment,
  endAdornment,
  className = '',
  containerClassName = '',
  labelClassName = '',
  inputClassName = '',
  helperTextClassName = '',
  disabled = false,
  id,
  ...rest
}, ref) => {
  const inputId = id || `textbox-${Math.random().toString(36).substr(2, 9)}`;
  const helperTextId = helperText ? `${inputId}-helper-text` : undefined;

  const containerClasses = [
    styles.textBoxContainer,
    fullWidth ? styles.fullWidth : '',
    containerClassName,
  ].filter(Boolean).join(' ');

  // Asegurar que el ancho completo se herede correctamente
  const containerStyle = fullWidth ? { 
    width: '100%',
    display: 'block' 
  } : undefined;
  
  const inputWrapperStyle = fullWidth ? { 
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box' as const 
  } : undefined;

  const labelClasses = [
    styles.label,
    disabled ? styles.disabled : '',
    error ? styles.error : '',
    labelClassName,
  ].filter(Boolean).join(' ');

  const inputWrapperClasses = [
    styles.inputWrapper,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    error ? styles.error : '',
    disabled ? styles.disabled : '',
    className,
  ].filter(Boolean).join(' ');

  const inputClasses = [
    styles.input,
    startAdornment ? styles.hasStartAdornment : '',
    endAdornment ? styles.hasEndAdornment : '',
    inputClassName,
  ].filter(Boolean).join(' ');

  const helperTextClasses = [
    styles.helperText,
    error ? styles.error : '',
    helperTextClassName,
  ].filter(Boolean).join(' ');

  return (
    <div className={containerClasses} style={containerStyle}>
      {label && (
        <label htmlFor={inputId} className={labelClasses}>
          {label}
        </label>
      )}
      <div className={inputWrapperClasses} style={inputWrapperStyle}>
        {startAdornment && (
          <span className={styles.startAdornment}>
            {startAdornment}
          </span>
        )}
        <input
          id={inputId}
          type="text"
          ref={ref}
          className={inputClasses}
          disabled={disabled}
          aria-invalid={error}
          aria-describedby={helperTextId}
          style={fullWidth ? { width: '100%' } : undefined}
          {...rest}
        />
        {endAdornment && (
          <span className={styles.endAdornment}>
            {endAdornment}
          </span>
        )}
      </div>
      {helperText && (
        <p id={helperTextId} className={helperTextClasses}>
          {helperText}
        </p>
      )}
    </div>
  );
});

TextBox.displayName = 'TextBox';

export default TextBox;
