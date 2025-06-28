import React, { forwardRef } from 'react';
import type { CheckButtonProps, CheckButtonComponent } from './types';
import { ControlStatus } from '../../utils/enums';
import './styles/CheckButton.scss';

/**
 * CheckButton component that provides a styled and accessible checkbox input.
 * Allows controlling the checked state and handles different UI states.
 *
 * @component
 * @example
 * ```tsx
 * <CheckButton
 *   id="terms"
 *   label="I agree to the terms and conditions"
 *   required={true}
 *   checked={isChecked}
 *   eventChange={(e) => setIsChecked(e.target.checked)}
 * />
 * ```
 */
const CheckButton = forwardRef<HTMLInputElement, Omit<CheckButtonProps, 'ref'>>(({
  id,
  label,
  required = false,
  disabled = false,
  readOnly = false,
  checked = false,
  className = '',
  eventChange,
}, ref) => {
  const getStyle = () => {
    if (disabled) {
      return ControlStatus.DISABLED;
    } else if (readOnly) {
      return ControlStatus.READ_ONLY;
    } else if (required && !checked) {
      return ControlStatus.REQUIRED;
    }
    return ControlStatus.NONE;
  };

  return (
    <div 
      className={`checkbutton ${getStyle()} ${className}`.trim()} 
      role="group" 
      aria-label={label}
      data-testid={`checkbutton-${id}`}
    >
      <input
        type="checkbox"
        id={id}
        name={id}
        required={!disabled && required && !checked}
        disabled={disabled}
        checked={checked}
        readOnly={readOnly}
        ref={ref}
        onChange={(e) => {
          if (!readOnly) {
            eventChange(e);
          }
        }}
        aria-checked={checked}
        aria-disabled={disabled}
        aria-readonly={readOnly}
      />
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  );
});

CheckButton.displayName = 'CheckButton';

export default CheckButton as CheckButtonComponent;
