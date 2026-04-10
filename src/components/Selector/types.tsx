import { SelectHTMLAttributes } from 'react';
import { ComponentSize } from '../types';

export enum SelectorVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export interface SelectorOption {
  /**
   * Unique value of the option
   */
  value: string | number;
  
  /**
   * Display text for the option
   */
  label: string;
  
  /**
   * If true, the option is disabled
   * @default false
   */
  disabled?: boolean;
}

export interface SelectorProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Selector options
   */
  options: SelectorOption[];
  
  /**
   * Currently selected value
   */
  value?: string | number;
  
  /**
   * Default value of the selector
   */
  defaultValue?: string | number;
  
  /**
   * Selector label
   */
  label?: string;
  
  /**
   * Helper text or description
   */
  helperText?: string;
  
  /**
   * If true, shows an error indicator
   * @default false
   */
  error?: boolean;
  
  /**
   * Error message to display when there is an error
   */
  errorMessage?: string;
  
  /**
   * Visual variant of the selector
   * @default 'primary'
   */
  variant?: SelectorVariant;
  
  /**
   * Selector size
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * If true, the selector takes up the full available width
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * If true, the selector is in a loading state
   * @default false
   */
  loading?: boolean;
  
  /**
   * Text to display when there are no options
   */
  placeholder?: string;
  
  /**
   * If true, the selector is read-only
   * @default false
   */
  readOnly?: boolean;
}
