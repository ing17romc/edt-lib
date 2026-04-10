import { TextareaHTMLAttributes } from 'react';
import { ComponentSize } from '../types';

export type TextAreaVariant = 'outlined' | 'filled' | 'standard';

export interface Testable {
  'data-testid'?: string;
}

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>, Testable {
  /**
   * Label displayed above the textarea
   */
  label?: string;
  
  /**
   * Helper text displayed below the textarea
   */
  helperText?: string;
  
  /**
   * If true, shows an error indicator
   * @default false
   */
  error?: boolean;
  
  /**
   * If true, the textarea takes up the full available width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Design variant of the textarea
   * @default 'outlined'
   */
  variant?: TextAreaVariant;
  
  /**
   * Textarea size
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * Default number of rows
   * @default 3
   */
  rows?: number;
  
  /**
   * Maximum number of characters allowed
   */
  maxLength?: number;
  
  /**
   * If true, the textarea resizes automatically based on content
   * @default false
   */
  autoResize?: boolean;

  /**
   * Minimum number of rows when autoResize is true
   */
  minRows?: number;

  /**
   * Maximum number of rows when autoResize is true
   */
  maxRows?: number;
  
  /**
   * Custom CSS class for the container
   */
  containerClassName?: string;
  
  /**
   * Custom CSS class for the label
   */
  labelClassName?: string;
  
  /**
   * Custom CSS class for the textarea
   */
  textareaClassName?: string;
  
  /**
   * Custom CSS class for the helper text
   */
  helperTextClassName?: string;
  
  /**
   * Function called when the textarea value changes
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
