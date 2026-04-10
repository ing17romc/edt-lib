import { ReactNode } from 'react';
import { ComponentSize } from '../types';

export interface ModalProps {
  /**
   * Indicates whether the modal is open or closed
   * @default false
   */
  isOpen: boolean;
  
  /**
   * Function called when the modal closes
   */
  onClose: () => void;
  
  /**
   * Modal title
   */
  title?: string;
  
  /**
   * Modal content
   */
  children: ReactNode;
  
  /**
   * Modal size
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /**
   * Indicates whether to show the close button
   * @default true
   */
  showCloseButton?: boolean;
  
  /**
   * Custom text for the close button
   */
  closeButtonText?: string;
  
  /**
   * Indicates whether the modal should close when clicking outside of it
   * @default true
   */
  closeOnOverlayClick?: boolean;
  
  /**
   * Indicates whether the modal should close when pressing the Escape key
   * @default true
   */
  closeOnEsc?: boolean;
  
  /**
   * Custom CSS class for the modal container
   */
  className?: string;
  
  /**
   * Inline styles for the modal container
   */
  style?: React.CSSProperties;
  
  /**
   * Element rendered in the modal footer
   */
  footer?: ReactNode;
  
  /**
   * Indicates whether the modal should be vertically centered
   * @default true
   */
  centerVertically?: boolean;
  
  /**
   * Indicates whether the modal should disable body scroll when open
   * @default true
   */
  preventScroll?: boolean;
}
