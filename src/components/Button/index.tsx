import React, { forwardRef } from 'react';
import classNames from '../../utils/classNames';
import styles from './styles/Button.module.scss';
import { ButtonProps, ButtonVariant, ButtonSize } from './types';

/**
 * Componente Button altamente personalizable que proporciona una interfaz de usuario interactiva
 * con múltiples variantes de estilo, tamaños y estados.
 * 
 * @component
 * 
 * @example
 * // Ejemplo básico
 * <Button onClick={() => console.log('Click')}>
 *   Botón Primario
 * </Button>
 * 
 * @example
 * // Botón con variante secundaria y tamaño grande
 * <Button variant="secondary" size="large">
 *   Acción Secundaria
 * </Button>
 * 
 * @example
 * // Botón deshabilitado de ancho completo
 * <Button 
 *   variant="danger" 
 *   disabled 
 *   fullWidth
 *   onClick={handleDelete}
 * >
 *   Eliminar permanentemente
 * </Button>
 * 
 * @example
 * // Botón de tipo submit en un formulario
 * <form onSubmit={handleSubmit}>
 *   <Button type="submit">Enviar</Button>
 * </form>
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
// Exportar los tipos para facilitar la importación
export { ButtonVariant, ButtonSize } from './types';
export type { ButtonProps };
