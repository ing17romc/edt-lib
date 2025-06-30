import React, { useState } from 'react';
import { CheckButtonProps } from './types';
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
 * />
 */
const CheckButton: React.FC<CheckButtonProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
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

  return (
    <label className={`check-button ${className} ${disabled ? 'disabled' : ''}`}>
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
