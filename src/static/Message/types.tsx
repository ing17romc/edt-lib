/**
 * Types and contracts for the Message component.
 * This component displays feedback messages to the user with different levels of importance.
 */

import { HTMLAttributes, ReactNode } from 'react';

/** Available message types */
export type MessageType = 'success' | 'info' | 'warning' | 'danger';

/**
 * Message component props
 * @interface MessageProps
 */
export interface MessageProps extends HTMLAttributes<HTMLDivElement> {
  /** 
   * Message type to display 
   * @default 'info'
   */
  type?: MessageType;
  
  /** Optional title displayed in bold */
  title?: string;
  
  /** Main content of the message */
  children: ReactNode;
  
  /** 
   * Allows closing the message 
   * @default false
   */
  closable?: boolean;
  
  /** 
   * Function called when the message is closed
   * Only used if `closable` is `true`
   */
  onClose?: () => void;
  
  /** 
   * Custom ARIA role 
   * @default 'status' for info/success, 'alert' for warning/danger
   */
  role?: 'alert' | 'status' | 'alertdialog';
  
  /** Test ID */
  'data-testid'?: string;
}
