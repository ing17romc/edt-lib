import { HTMLAttributes } from 'react';

/**
 * DatePicker component properties
 */
export interface DatePickerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Selected value (ISO format: YYYY-MM-DD)
   */
  value?: string;

  /**
   * Callback when selecting a date
   */
  onChange?: (value: string) => void;

  /**
   * Minimum allowed date (ISO format: YYYY-MM-DD)
   */
  min?: string;

  /**
   * Maximum allowed date (ISO format: YYYY-MM-DD)
   */
  max?: string;

  /**
   * Input placeholder
   * @default 'DD/MM/YYYY'
   */
  placeholder?: string;

  /**
   * Whether the field is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Field label
   */
  label?: string;
}
