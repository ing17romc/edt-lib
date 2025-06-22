export type ControlStatus = 'DISABLED' | 'READ_ONLY' | 'REQUIRED' | '';

export interface RadioButtonProps {
  id: string;
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  value: string;
  eventChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement>;
}

export type RadioButtonComponent = React.FC<RadioButtonProps>;

export type { RadioButtonProps, RadioButtonComponent };
