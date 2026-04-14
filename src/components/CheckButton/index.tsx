import React, { useEffect, useState } from 'react';
import classNames from '../../utils/classNames';
import { CheckButtonProps } from './types';
import styles from './styles/CheckButton.module.scss';
import { ComponentSize } from '../types';

/**
 * CheckButton - A customizable checkbox button component.
 * 
 * @component
 * @example
 * <CheckButton 
 *   label="Option 1"
 *   onChange={(checked) => console.log(checked)}
 *   checked={false}
 *   disabled={false}
 *   size="medium"
 * />
 * 
 * @example
 * // Example with different sizes
 * <div>
 *   <CheckButton label="Small" size="small" />
 *   <CheckButton label="Medium (default)" size="medium" />
 *   <CheckButton label="Large" size="large" />
 * </div>
 * 
 * @param {string} [label] - Text displayed next to the checkbox
 * @param {boolean} [checked=false] - Initial checkbox state
 * @param {boolean} [disabled=false] - If true, the checkbox is disabled
 * @param {Function} [onChange] - Function called when the checkbox state changes
 * @param {'small'|'medium'|'large'} [size='medium'] - Checkbox button size
 * @param {string} [className] - Additional CSS class for custom styling
 */
const CheckButton: React.FC<CheckButtonProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  size = ComponentSize.MEDIUM,
  className = '',
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = () => {
    if (!disabled) {
      const newValue = !isChecked;
      setIsChecked(newValue);
      onChange?.(newValue);
    }
  };

  const checkButtonClasses = classNames(
    styles.checkButton,
    {
      [styles.small]: size === ComponentSize.SMALL,
      [styles.large]: size === ComponentSize.LARGE,
      [styles.disabled]: disabled,
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
        className={styles.input}
        {...props}
      />
      <span className={styles.checkmark}></span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default CheckButton;
