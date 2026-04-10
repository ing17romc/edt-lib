import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ComponentSize, ComponentVariant } from '../types';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
  /**
   * Button content (text or React elements)
   */
  children: ReactNode;
  
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ComponentVariant;
  
  /**
   * Button size
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * If true, the button takes up the full available width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * HTML button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  
  /**
   * If true, the button is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * If true, the button is loading
   * @default false
   */
  loading?: boolean;
  
  /**
   * Button click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
    /**
   * Additional CSS class for the button
   */
  className?: string;
}
