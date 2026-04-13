import { InputHTMLAttributes } from 'react';
import { ComponentSize } from '../types';

/**
 * Switch component props
 */
export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size' | 'type'> {
  /**
   * Switch label
   */
  label?: string;

  /**
   * Whether the switch is on
   * @default false
   */
  checked?: boolean;

  /**
   * Callback when state changes
   */
  onChange?: (checked: boolean) => void;

  /**
   * Switch size
   * @default 'medium'
   */
  size?: ComponentSize;

  /**
   * Whether the switch is disabled
   * @default false
   */
  disabled?: boolean;
}
