import React, { forwardRef } from 'react';
import classNames from '../../utils/classNames';
import Icon from '../Icon';
import { IconButtonProps } from './types';
import { ALL_ICONS, AllIconsType } from '../utils/IconTypes';
import styles from './styles/IconButton.module.scss';
import { ComponentVariant, ComponentSize } from '../types';

/**
 * Componente de botón que muestra únicamente un icono.
 * Combina la funcionalidad de Button e Icon en un solo componente.
 * 
 * @component
 * @example
 * // Uso básico
 * <IconButton 
 *   icon="home" 
 *   variant="primary" 
 *   aria-label="Inicio" 
 *   onClick={() => console.log('Click')} 
 * />
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({
  icon,
  size = ComponentSize.MEDIUM,
  variant = ComponentVariant.PRIMARY,
  fullWidth = false,
  loading = false,
  disabled = false,
  iconSize,
  className,
  iconClassName,
  buttonStyle,
  iconStyle,
  'aria-label': ariaLabel,
  ...rest
}, ref) => {
  // Mapear tamaños de botón a tamaños de icono
  const getIconSize = (): ComponentSize => {
    switch (size) {
      case ComponentSize.SMALL:
        return ComponentSize.SMALL;
      case ComponentSize.LARGE:
        return ComponentSize.LARGE;
      case ComponentSize.MEDIUM:
      default:
        return ComponentSize.MEDIUM;
    }
  };
  
  const calculatedIconSize = (iconSize as ComponentSize) || getIconSize();
  
  // Asegurarse de que el icono sea válido
  const isValidIcon = (value: string): value is AllIconsType => {
    return Object.values(ALL_ICONS).includes(value as AllIconsType);
  };
  
  const iconToShow: AllIconsType | null = isValidIcon(icon) ? icon : 'help_outline' as AllIconsType;
  
  // Clases del botón
  const buttonClasses = classNames(
    styles.iconButton,
    styles[`iconButton--${size}`],
    styles[`iconButton--${variant}`],
    {
      [styles['iconButton--loading']]: loading,
      [styles['iconButton--fullWidth']]: fullWidth,
    },
    className
  );

  return (
    <button
      ref={ref}
      type="button"
      className={buttonClasses}
      disabled={disabled || loading}
      aria-label={loading ? 'Cargando...' : ariaLabel}
      aria-busy={loading}
      aria-disabled={disabled || loading}
      style={buttonStyle}
      {...rest}
    >
      {!loading && (
        <div className={iconClassName} style={iconStyle}>
          <Icon
            name={iconToShow}
            size={calculatedIconSize}
            aria-hidden="true"
          />
        </div>
      )}
    </button>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
