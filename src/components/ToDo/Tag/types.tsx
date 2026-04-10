import { HTMLAttributes, ReactNode } from 'react';
import { ComponentVariant, ComponentSize } from '../../types';

/**
 * Tag component properties
 */
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Tag content
   */
  children: ReactNode;

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: ComponentVariant;

  /**
   * Tag size
   * @default 'medium'
   */
  size?: ComponentSize;

  /**
   * Whether the tag can be closed/removed
   * @default false
   */
  closable?: boolean;

  /**
   * Callback when closing the tag
   */
  onClose?: () => void;

  /**
   * Whether the tag is disabled
   * @default false
   */
  disabled?: boolean;
}
