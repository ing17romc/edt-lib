import React, { forwardRef, useEffect, useRef, useCallback } from 'react';
import { TextAreaProps } from './types';
import styles from './styles/TextArea.module.scss';

/**
 * Componente de área de texto que permite la entrada de texto de múltiples líneas.
 * Soporta diferentes variantes, tamaños y redimensionamiento automático.
 */
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  helperText,
  error = false,
  fullWidth = false,
  variant = 'outlined',
  size = 'medium',
  rows = 3,
  maxLength,
  autoResize = false,
  minRows,
  maxRows,
  className = '',
  containerClassName = '',
  labelClassName = '',
  textareaClassName = '',
  helperTextClassName = '',
  disabled = false,
  onChange,
  style,
  id,
  ...rest
}, ref) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const helperTextId = helperText ? `${textareaId}-helper-text` : undefined;

  // Combinar las referes internas y externas
  const setRefs = (element: HTMLTextAreaElement | null) => {
    // Asignar la referencia interna
    (textareaRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = element;
    
    // Si se proporcionó una referencia externa, asignarla
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = element;
    }
  };

  // Función para ajustar la altura del textarea según el contenido
  const adjustHeight = useCallback(() => {
    if (autoResize && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto'; // Reset height to get correct scrollHeight

      const computedStyle = window.getComputedStyle(textarea);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const paddingTop = parseFloat(computedStyle.paddingTop);
      const paddingBottom = parseFloat(computedStyle.paddingBottom);
      const borderTop = parseFloat(computedStyle.borderTopWidth);
      const borderBottom = parseFloat(computedStyle.borderBottomWidth);
      
      const verticalPaddingAndBorder = paddingTop + paddingBottom + borderTop + borderBottom;

      const minHeight = minRows && lineHeight ? (minRows * lineHeight) + verticalPaddingAndBorder : -Infinity;
      const maxHeight = maxRows && lineHeight ? (maxRows * lineHeight) + verticalPaddingAndBorder : Infinity;

      const scrollHeight = textarea.scrollHeight;
      const newHeight = Math.max(minHeight, Math.min(scrollHeight, maxHeight));

      textarea.style.height = `${newHeight}px`;

      if (maxHeight !== Infinity && scrollHeight > maxHeight) {
        textarea.style.overflow = 'auto';
      } else {
        textarea.style.overflow = 'hidden';
      }
    }
  }, [autoResize, minRows, maxRows]);

  // Efecto para ajustar la altura inicial
  useEffect(() => {
    if (autoResize) {
      adjustHeight();
    }
  }, [autoResize, adjustHeight]);

  // Manejador de cambio personalizado
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (autoResize) {
      adjustHeight();
    }
    
    if (onChange) {
      onChange(e);
    }
  };

  // Clases CSS
  const containerClasses = [
    styles.textAreaContainer,
    fullWidth ? styles.fullWidth : '',
    containerClassName,
    className, // Mover className al contenedor principal
  ].filter(Boolean).join(' ');

  const labelClasses = [
    styles.label,
    disabled ? styles.disabled : '',
    error ? styles.error : '',
    labelClassName,
  ].filter(Boolean).join(' ');

  const textareaWrapperClasses = [
    styles.textareaWrapper,
    styles[`variant-${variant}`],
    styles[`size-${size}`],
    error ? styles.error : '',
    disabled ? styles.disabled : '',
  ].filter(Boolean).join(' ');

  const textareaClasses = [
    styles.textarea,
    textareaClassName,
  ].filter(Boolean).join(' ');

  const helperTextClasses = [
    styles.helperText,
    error ? styles.error : '',
    helperTextClassName,
  ].filter(Boolean).join(' ');

  const charCount = maxLength && rest.value 
    ? `${String(rest.value).length}/${maxLength}` 
    : null;

  return (
    <div className={containerClasses} style={style}>
      {label && (
        <label htmlFor={textareaId} className={labelClasses}>
          {label}
        </label>
      )}
      <div className={textareaWrapperClasses}>
        <textarea
          id={textareaId}
          ref={setRefs}
          className={textareaClasses}
          disabled={disabled}
          aria-invalid={error}
          aria-describedby={helperTextId}
          rows={rows}
          maxLength={maxLength}
          onChange={handleChange}
          {...rest}
        />
        {maxLength && (
          <div className={styles.charCount}>
            {charCount}
          </div>
        )}
      </div>
      {(helperText || charCount) && (
        <div className={styles.helperContainer}>
          {helperText && (
            <p id={helperTextId} className={helperTextClasses}>
              {helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
