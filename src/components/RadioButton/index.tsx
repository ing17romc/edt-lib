import React from 'react';
import styles from './styles/RadioButton.module.scss';
import { RadioButtonProps } from './types';

/**
 * Componente RadioButton que permite seleccionar una opción de un conjunto de opciones mutuamente excluyentes.
 */
const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  checked = false,
  disabled = false,
  onChange,
  className = '',
  name = 'radio-group',
  ...props
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(value);
    }
  };

  return (
    <label className={`${styles.radioButton} ${className}`} {...props}>
      <input
        type="radio"
        className={styles.radioButton__input}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
        value={value}
      />
      <span className={styles.radioButton__checkmark} />
      {label && <span className={styles.radioButton__label}>{label}</span>}
    </label>
  );
};

export default RadioButton;
