import React, { forwardRef } from 'react';
import cx from 'classnames';
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
  ...rest
}, ref) => {
  const iconClasses = cx(
    styles.icon,
    {
      [styles[`icon--${size}`]]: size,
      [styles[`icon--${variant}`]]: variant,
      [styles['icon--inherit-color']]: inheritColor,
    },
    className
  );

  const iconStyle = {
    ...(color && !inheritColor ? { color } : {}),
    ...style,
  };

  // Nota: En una implementación real, aquí podrías importar dinámicamente
  // los iconos desde un archivo de assets o usar una librería de iconos
  const renderIcon = () => {
    // Este es un ejemplo básico. En una implementación real, podrías tener
    // un sistema de iconos más sofisticado.
    return (
      <svg 
        className={styles.icon__svg} 
        viewBox="0 0 24 24"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Este es un icono de ejemplo (un círculo con una 'i' en el centro) */}
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          className={styles.icon__path} 
          style={{
            fill: variant === IconVariant.SOLID ? 'currentColor' : 'none',
            stroke: variant !== IconVariant.SOLID ? 'currentColor' : 'none',
            strokeWidth: 2,
          }}
        />
        <text 
          x="12" 
          y="16" 
          textAnchor="middle" 
          fill={variant === IconVariant.SOLID ? 'white' : 'currentColor'}
          style={{
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily: 'sans-serif',
          }}
        >
          {name.charAt(0).toUpperCase()}
        </text>
      </svg>
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
