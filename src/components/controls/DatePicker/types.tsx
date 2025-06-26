import { ForwardedRef, ChangeEvent } from 'react';

/**
 * Props for the DatePicker component
 */
interface DatePickerProps {
  /** Unique identifier for the date picker */
  id: string;
  /** Label text displayed above the date picker */
  title: string;
  /** Current date value in MM/DD/YYYY format */
  value: string;
  /** Callback function called when the date changes */
  eventChange: (value: string) => void;
  /** If true, the date picker is disabled */
  disabled?: boolean;
  /** If true, the date picker is read-only */
  readOnly?: boolean;
  /** If true, the date picker is required */
  required?: boolean;
  /** Ref to the month select element */
  ref?: ForwardedRef<HTMLSelectElement>;
}

/**
 * Type for the DatePicker component
 */
type DatePickerComponent = React.FC<DatePickerProps>;

/**
 * Event handler type for select elements in the date picker
 */
type DateSelectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => void;

/**
 * Type for the date format function
 * @param month - Month value (1-12)
 * @param day - Day of the month (1-31)
 * @param year - Full year (e.g., 2023)
 * @returns Formatted date string (MM/DD/YYYY)
 */
type DateFormatFunction = (month: string, day: string, year: string) => string;

export type {
  DatePickerProps,
  DatePickerComponent,
  DateSelectChangeHandler,
  DateFormatFunction
};
