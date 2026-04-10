import { HTMLAttributes } from 'react';
import { ComponentSize } from '../types';

export enum IconVariant {
  SOLID = 'solid',
  OUTLINE = 'outline',
  DUAL = 'dual',
}

export interface IconProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'children'> {
  /**
   * Name of the icon to display
   */
  name: string;
  
  /**
   * Icon size
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * Icon style
   * @default 'outline'
   */
  variant?: IconVariant;
  
  /**
   * Main icon color
   * @default 'currentColor'
   */
  color?: string;
  
  /**
   * Secondary color (only applies to the 'dual' variant)
   */
  secondaryColor?: string;
  
  /**
   * If true, the icon inherits the color from the parent element
   * @default false
   */
  inheritColor?: boolean;
  
  /**
   * If true, the icon is displayed as disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Custom component to render as icon
   */
  component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  
  /**
   * Custom CSS class
   */
  className?: string;
  
  /**
   * Inline styles
   */
  style?: React.CSSProperties;
  
  /**
   * Test identifier
   */
  'data-testid'?: string;
}
