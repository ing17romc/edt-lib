export interface SelectorOption {
  value: string | number;
  label: string;
}

export type ControlStatus = 'DISABLED' | 'READ_ONLY' | 'REQUIRED' | '';

export interface SelectorProps {
  id: string;
  titleTop?: string;
  titleBottom?: string;
  value: string | number;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  eventChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: SelectorOption[];
  ref?: React.RefObject<HTMLSelectElement>;
}

export type SelectorComponent = React.FC<SelectorProps>;

export type { SelectorOption, SelectorProps, SelectorComponent };
