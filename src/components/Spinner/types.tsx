import { HTMLAttributes } from 'react';
import { ComponentSize } from '../types';

export enum SpinnerVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  LIGHT = 'light',
  DARK = 'dark',
}

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Spinner size
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * Spinner color variant
   * @default 'primary'
   */
  variant?: SpinnerVariant;
  
  /**
   * If true, the spinner will be a "pulse" type instead of spinning
   * @default false
   */
  pulse?: boolean;
  
  /**
   * Accessible text for screen readers
   * @default 'Loading...'
   */
  'aria-label'?: string;
  
  /**
   * Custom CSS class
   */
  className?: string;
}
