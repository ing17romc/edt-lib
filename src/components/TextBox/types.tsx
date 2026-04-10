import { InputHTMLAttributes, ReactNode } from 'react';
import { ComponentSize } from '../types';

export type TextBoxVariant = 'outlined' | 'filled' | 'standard';

export interface TextBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Label displayed above the text field
   */
  label?: string;
  
  /**
   * Helper text displayed below the field
   */
  helperText?: string;
  
  /**
   * If true, shows an error indicator
   * @default false
   */
  error?: boolean;
  
  /**
   * If true, the field takes up the full available width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Design variant of the text field
   * @default 'outlined'
   */
  variant?: TextBoxVariant;
  
  /**
   * Text field size
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * Element displayed at the start of the field
   */
  startAdornment?: ReactNode;
  
  /**
   * Element displayed at the end of the field
   */
  endAdornment?: ReactNode;
  
  /**
   * Custom CSS class for the container
   */
  containerClassName?: string;
  
  /**
   * Custom CSS class for the label
   */
  labelClassName?: string;
  
  /**
   * Custom CSS class for the input field
   */
  inputClassName?: string;
  
  /**
   * Custom CSS class for the helper text
   */
  helperTextClassName?: string;

  /**
   * Allows passing `data-*` attributes for testing purposes.
   */
  [key: `data-${string}`]: string | number | boolean;
}
