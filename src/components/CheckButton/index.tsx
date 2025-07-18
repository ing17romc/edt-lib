import React, { useState } from 'react';
import classNames from '../../utils/classNames';
import { CheckButtonProps, ButtonSize } from './types';
import './styles/CheckButton.scss';

/**
 * CheckButton - Un componente de botón de verificación personalizable.
 * 
 * @component
 * @example
 * <CheckButton 
 *   label="Opción 1"
 *   onChange={(checked) => console.log(checked)}
 *   checked={false}
 *   disabled={false}
 *   size="medium"
 * />
 * 
 * @example
 * // Ejemplo con diferentes tamaños
 * <div>
 *   <CheckButton label="Pequeño" size="small" />
 *   <CheckButton label="Mediano (predeterminado)" size="medium" />
 *   <CheckButton label="Grande" size="large" />
 * </div>
 * 
 * @param {string} [label] - Texto que se muestra junto al checkbox
 * @param {boolean} [checked=false] - Estado inicial del checkbox
 * @param {boolean} [disabled=false] - Si es true, el checkbox está deshabilitado
 * @param {Function} [onChange] - Función que se ejecuta cuando cambia el estado del checkbox
 * @param {'small'|'medium'|'large'} [size='medium'] - Tamaño del botón de verificación
 * @param {string} [className] - Clase CSS adicional para personalizar el estilo
 */
const CheckButton: React.FC<CheckButtonProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  size = ButtonSize.MEDIUM,
  className = '',
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    if (!disabled) {
      const newValue = !isChecked;
      setIsChecked(newValue);
      onChange?.(newValue);
    }
  };

  const checkButtonClasses = classNames(
    'check-button',
    `check-button--${size}`,
    {
      'check-button--disabled': disabled,
    },
    className
  );

  return (
    <label className={checkButtonClasses}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className="check-button__input"
        {...props}
      />
      <span className="check-button__checkmark"></span>
      {label && <span className="check-button__label">{label}</span>}
    </label>
  );
};

export default CheckButton;
