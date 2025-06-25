import { ForwardedRef } from 'react';

export interface CheckButtonProps {
  /**
   * Unique identifier for the checkbox input
   */
  id: string;
  
  /**
   * Label text displayed next to the checkbox
   */
  label: string;
  
  /**
   * Whether the checkbox is required
   * @default false
   */
  required?: boolean;
  
  /**
   * Whether the checkbox is disabled
   * @default false
   */
  disabled?: boolean;
  
  /**
   * Whether the checkbox is read-only
   * @default false
   */
  readOnly?: boolean;
  
  /**
   * Whether the checkbox is checked
   * @default false
   */
  checked?: boolean;
  
  /**
   * Callback function called when the checkbox state changes
   * @param e - The change event from the input element
   */
  eventChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
  /**
   * Optional ref to forward to the input element
   */
  ref?: ForwardedRef<HTMLInputElement>;
  
  /**
   * Additional CSS class name
   */
  className?: string;
}

/**
 * Type for the CheckButton component
 */
export type CheckButtonComponent = React.ForwardRefExoticComponent<
  CheckButtonProps & React.RefAttributes<HTMLInputElement>
>;
