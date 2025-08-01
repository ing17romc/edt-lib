import React, { forwardRef } from 'react';
import classNames from '../../utils/classNames';
import styles from './styles/Selector.module.scss';
import { SelectorProps, SelectorVariant } from './types';
import { ComponentSize } from '../types';

/**
 * Componente Selector que representa un menú desplegable con múltiples opciones.
 * 
 * @component
 * @example
 * // Uso básico
 * const options = [
 *   { value: '1', label: 'Opción 1' },
 *   { value: '2', label: 'Opción 2' },
 * ];
 * 
 * <Selector 
 *   options={options}
 *   label="Selecciona una opción"
 *   onChange={(e) => console.log(e.target.value)}
 * />
 * 
 * @example
 * // Selector con estado de error
 * <Selector
 *   options={options}
 *   label="Selecciona una opción"
 *   error={true}
 *   errorMessage="Selecciona una opción válida"
 * />
 */
const Selector = forwardRef<HTMLSelectElement, SelectorProps>(({
  options = [],
  label,
  helperText,
  error = false,
  errorMessage,
  variant = SelectorVariant.PRIMARY,
  size = ComponentSize.MEDIUM,
  fullWidth = false,
  loading = false,
  disabled = false,
  className,
  placeholder,
  onChange,
  value: controlledValue,
  defaultValue,
  ...rest
}, ref) => {
  // Estado interno para manejar el valor no controlado
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue || '');
  
  // Determinar si el componente está controlado o no
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;
  const selectClasses = classNames(
    styles.selector,
    styles[`selector--${variant}`],
    styles[`selector--${size}`],
    {
      [styles['selector--error']]: error,
      [styles['selector--fullWidth']]: fullWidth,
      [styles['selector--disabled']]: disabled || loading,
    },
    className
  );

  const wrapperClasses = classNames(styles.selectorWrapper, {
    [styles['selectorWrapper--fullWidth']]: fullWidth,
  });

  const hasLabel = !!label;
  const showHelperText = (helperText || (error && errorMessage)) && !loading;

  return (
    <div className={wrapperClasses}>
      {hasLabel && (
        <label className={styles.selectorLabel}>
          {label}
          {rest.required && <span className={styles.requiredIndicator}>*</span>}
        </label>
      )}
      
      <div className={styles.selectorContainer}>
        <select
          ref={ref}
          className={selectClasses}
          disabled={disabled || loading}
          aria-invalid={error}
          aria-describedby={error && errorMessage ? 'error-message' : undefined}
          value={value}
          onChange={(e) => {
            if (!isControlled) {
              setUncontrolledValue(e.target.value);
            }
            onChange?.(e);
          }}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        
        {loading && (
          <div className={styles.selectorLoading}>
            <div className={styles.selectorLoadingSpinner} />
          </div>
        )}
        
        {!loading && (
          <div className={styles.selectorIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        )}
      </div>
      
      {showHelperText && (
        <div 
          className={classNames(styles.helperText, {
            [styles['helperText--error']]: error,
          })}
          id={error ? 'error-message' : undefined}
        >
          {error && errorMessage ? errorMessage : helperText}
        </div>
      )}
    </div>
  );
});

Selector.displayName = 'Selector';

// Re-exportar SelectorSize para mantener la compatibilidad con código existente
export { SelectorVariant } from './types';

export { Selector };
export type { SelectorProps };
