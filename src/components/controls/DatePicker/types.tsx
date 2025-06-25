import { ForwardedRef } from 'react';

export interface DatePickerProps {
  id: string;
  title: string;
  value: string;
  eventChange: (value: string) => void;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  ref?: ForwardedRef<HTMLSelectElement>;
}

export type DatePickerComponent = React.FC<DatePickerProps>;

export type { DatePickerProps, DatePickerComponent };
