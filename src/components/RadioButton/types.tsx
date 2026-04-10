import { ComponentSize } from '../types';

export interface RadioButtonProps {
  /**
   * Unique value that identifies this radio button
   */
  value: string | number;
  
  /**
   * Text displayed next to the radio button
   */
  label: string;
  
  /**
   * Indicates whether the radio button is selected
   */
  checked?: boolean;
  
  /**
   * Indicates whether the radio button is disabled
   */
  disabled?: boolean;
  
  /**
   * Function called when the radio button state changes
   */
  onChange?: (value: string | number) => void;
  
  /**
   * Optional CSS class for custom styling
   */
  className?: string;
  
  /**
   * Name of the group the radio button belongs to
   */
  name?: string;

  /**
   * Radio button size
   * @default 'medium'
   */
  size?: ComponentSize;
}
