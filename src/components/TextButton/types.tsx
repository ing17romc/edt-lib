import { ButtonProps } from '../Button/types';
import { ComponentSize } from '../types';

export interface TextButtonProps extends Omit<ButtonProps, 'variant' | 'size' | 'fullWidth'> {
  /** 
   * Text button size
   * @default 'medium'
   */
  size?: ComponentSize;
  
  /** 
   * If true, the button takes up the full available width
   * @default false
   */
  fullWidth?: boolean;
  
  /** 
   * If true, shows the button in disabled state
   * @default false
   */
  disabled?: boolean;
  
  /** 
   * If true, shows a loading indicator
   * @default false
   */
  loading?: boolean;
  
  /** 
   * Button text color
   * @default 'primary'
   */
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'inherit';
  
  /** 
   * If true, adds an underline to the text
   * @default false
   */
  underline?: 'none' | 'hover' | 'always';
}
