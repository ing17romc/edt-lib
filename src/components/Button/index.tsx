import React, { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './styles/Button.module.scss';
import { ButtonProps, ButtonVariant, ButtonSize } from './types';

/**
 * Componente Button que representa un botón interactivo con múltiples variantes y tamaños.
 * 
 * @component
 * @example
 * // Uso básico
 * <Button variant="primary" size="medium" onClick={() => console.log('Clicked!')}>
 *   Hacer clic
 * </Button>
 * 
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.MEDIUM,
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
    
    onClick?.(e);
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
// Exportar los tipos para facilitar la importación
export { ButtonVariant, ButtonSize } from './types';
export type { ButtonProps };
