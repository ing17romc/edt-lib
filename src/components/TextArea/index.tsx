import React, { forwardRef, useEffect, useRef, useCallback, useId } from 'react';
import { TextAreaProps } from './types';
import { ComponentSize } from '../types';
import styles from './styles/TextArea.module.scss';

/**
 * Text area component that allows multi-line text input.
 * Supports different variants, sizes, and auto-resize.
 */
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  label,
  helperText,
  error = false,
  fullWidth = false,
  variant = 'outlined',
  size = ComponentSize.MEDIUM,
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
  const generatedId = useId();
  const textareaId = id || `textarea-${generatedId}`;
  const helperTextId = helperText ? `${textareaId}-helper-text` : undefined;

  // Combine internal and external refs
  const setRefs = (element: HTMLTextAreaElement | null) => {
    // Assign the internal reference
    (textareaRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = element;
    
    // If an external reference was provided, assign it
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = element;
    }
  };

  // Function to adjust textarea height based on content
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

  // Custom change handler
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (autoResize) {
      adjustHeight();
    }
    
    if (onChange) {
      onChange(e);
    }
  };

  // CSS classes
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
