import { HTMLAttributes, ReactNode } from 'react';
import { ComponentVariant } from '../../types';

export type MessageVariant =
  | ComponentVariant.PRIMARY
  | ComponentVariant.SUCCESS
  | ComponentVariant.DANGER
  | ComponentVariant.WARNING;

/**
 * Message component properties
 */
export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Message content
   */
  children: ReactNode;

  /**
   * Color/type variant of the message
   * @default 'primary'
   */
  variant?: MessageVariant;

  /**
   * Optional message title
   */
  title?: string;

  /**
   * Whether the message can be closed
   * @default false
   */
  closable?: boolean;

  /**
   * Callback when closing the message
   */
  onClose?: () => void;
}
