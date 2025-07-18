import React, { forwardRef } from 'react';
import classNames from '../../utils/classNames';
import { IconProps, IconSize, IconVariant } from './types';
import styles from './styles/Icon.module.scss';

/**
 * Componente de icono que soporta múltiples tamaños y variantes.
 * Utiliza SVG para renderizar los iconos de manera escalable.
 */
export const Icon = forwardRef<HTMLSpanElement, IconProps>(({
  name,
  size = IconSize.MEDIUM,
  variant = IconVariant.OUTLINE,
  color,
  inheritColor = false,
  className,
  style,
  component: CustomIcon,
  ...rest
}, ref) => {
  const iconClasses = classNames(
    styles.icon,
    {
      [styles[`icon--${size}`]]: size,
      [styles[`icon--${variant}`]]: variant,
      [styles['icon--inherit-color']]: inheritColor,
      [styles['icon--disabled']]: rest.disabled,
    },
    className
  );

  const iconStyle = {
    ...(color && !inheritColor ? { color } : {}),
    ...style,
  };

  // Si se proporciona un componente personalizado, lo usamos
  if (CustomIcon) {
    return (
      <span
        ref={ref}
        className={iconClasses}
        style={iconStyle}
        role="img"
        aria-label={rest['aria-label'] || name}
        {...rest}
      >
        <CustomIcon />
      </span>
    );
  }

  // Renderiza un icono de Material Icons
  const renderIcon = () => {
    // Mapeo de variantes a estilos de Material Icons
    const variantClass = variant === IconVariant.SOLID ? '' : '-outlined';
    const iconClass = `material-icons${variantClass}`;
    
    return (
      <span className={iconClass}>
        {name || 'help_outline'}
      </span>
    );
  };

  return (
    <span
      ref={ref}
      className={iconClasses}
      style={iconStyle}
      role="img"
      aria-label={name}
      {...rest}
    >
      {renderIcon()}
    </span>
  );
});

Icon.displayName = 'Icon';

export default Icon;
