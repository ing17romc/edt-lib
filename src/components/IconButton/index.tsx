import React, { forwardRef } from 'react';
import classNames from '../../utils/classNames';
import Icon from '../Icon';
import { IconButtonProps } from './types';
import { ALL_ICONS, AllIconsType } from '../utils/IconTypes';
import styles from './styles/IconButton.module.scss';
import { ComponentVariant, ComponentSize } from '../types';

/**
 * Button component that displays only an icon.
 * Combines the functionality of Button and Icon in a single component.
 * 
 * @component
 * @example
 * // Basic usage
 * <IconButton 
 *   icon="home" 
 *   variant="primary" 
 *   aria-label="Home" 
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
  // Map button sizes to icon sizes
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
  
  // Ensure the icon is valid
  const isValidIcon = (value: string): value is AllIconsType => {
    return Object.values(ALL_ICONS).includes(value as AllIconsType);
  };
  
  const iconToShow: AllIconsType | null = isValidIcon(icon) ? icon : 'help_outline' as AllIconsType;
  
  // Button classes
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
      aria-label={loading ? 'Loading...' : ariaLabel}
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
