import React, { forwardRef } from 'react';
import classNames from '../../utils/classNames';
import styles from './styles/Button.module.scss';
import { ButtonProps } from './types';
import { ComponentVariant, ComponentSize } from '../types';
/**
 * Highly customizable Button component that provides an interactive user interface
 * with multiple style variants, sizes, and states.
 * 
 * @component
 * 
 * @example
 * // Basic example
 * <Button onClick={() => console.log('Click')}>
 *   Primary Button
 * </Button>
 * 
 * @example
 * // Button with secondary variant and large size
 * <Button variant="secondary" size="large">
 *   Secondary Action
 * </Button>
 * 
 * @example
 * // Disabled full-width button
 * <Button 
 *   variant="danger" 
 *   disabled 
 *   fullWidth
 *   onClick={handleDelete}
 * >
 *   Delete permanently
 * </Button>
 * 
 * @example
 * // Submit button in a form
 * <form onSubmit={handleSubmit}>
 *   <Button type="submit">Submit</Button>
 * </form>
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = ComponentVariant.PRIMARY,
  size = ComponentSize.MEDIUM,
  type = 'button',
  disabled = false,
  fullWidth = false,
  className,
  onClick,
  ...rest
}, ref) => {
  const buttonClasses = classNames(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    {
      [styles['button--fullWidth']]: fullWidth,
    },
    className
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={ref}
      type={type}
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
// Export types for easier importing
export type { ButtonProps };
