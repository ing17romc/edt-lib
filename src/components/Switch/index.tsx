import React, { useId } from 'react';
import classNames from '../../utils/classNames';
import styles from './styles/Switch.module.scss';
import { SwitchProps } from './types';
import { ComponentSize } from '../types';

/**
 * Control de toggle on/off accesible.
 * @component
 */
const Switch: React.FC<SwitchProps> = ({
  label,
  checked = false,
  onChange,
  size = ComponentSize.MEDIUM,
  disabled = false,
  className,
  id,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const wrapperClass = classNames(
    styles.switch,
    styles[`switch--${size}`],
    disabled && styles['switch--disabled'],
    className
  );

  return (
    <label className={wrapperClass} htmlFor={inputId}>
      <input
        type="checkbox"
        id={inputId}
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className={styles.switchInput}
        aria-checked={checked}
        {...props}
      />
      <span className={styles.switchTrack}>
        <span className={styles.switchThumb} />
      </span>
      {label && <span className={styles.switchLabel}>{label}</span>}
    </label>
  );
};

export default Switch;
export type { SwitchProps };

