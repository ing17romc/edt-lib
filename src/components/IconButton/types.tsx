import { ButtonHTMLAttributes } from 'react';
import { IconVariant } from '../Icon/types';
import { ComponentSize, ComponentVariant } from '../types'; 

/**
 * IconButton component props
 */
export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'color'> {
  /**
   * Name of the icon to display. Must be a valid icon name.
   */
  icon: string;
  
  /**
   * Button size
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ComponentVariant;
  
  /**
   * If the button takes up the full available width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * If it shows a loading indicator
   * @default false
   */
  loading?: boolean;
  
  /**
   * Custom icon color. Overrides the default color.
   */
  iconColor?: string;
  
  /**
   * Custom icon size. Overrides the calculated size.
   */
  iconSize?: string | number;
  
  /**
   * Icon style (solid, outline, etc.)
   * @default 'outline'
   */
  iconVariant?: IconVariant;
  
  /**
   * Additional CSS class for the button
   */
  className?: string;
  
  /**
   * Additional CSS class for the icon
   */
  iconClassName?: string;
  
  /**
   * Inline styles for the button
   */
  buttonStyle?: React.CSSProperties;
  
  /**
   * Inline styles for the icon
   */
  iconStyle?: React.CSSProperties;
  
  /**
   * Accessible text for screen readers
   */
  'aria-label': string;
}

// Icon size map based on button size
export const iconSizeMap: Record<ComponentSize, string> = {
  small: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
} as const;
