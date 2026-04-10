import { InputHTMLAttributes } from 'react';
import { ComponentSize } from '../types';

/**
 * CheckButton component props
 * Extends InputHTMLAttributes but omits 'onChange' and 'size' to avoid conflicts
 */
export interface CheckButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'> {
  /**
   * Label displayed next to the checkbox
   */
  label?: string;
  
  /**
   * Checkbox state (controlled)
   * @default false
   */
  checked?: boolean;
  
  /**
   * Disabled state of the checkbox
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Function called when the checkbox state changes
   * @param checked - New checkbox value
   */
  onChange?: (checked: boolean) => void;
  
  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * Checkbox button size
   * @default 'medium'
   */
  size?: ComponentSize;
}
