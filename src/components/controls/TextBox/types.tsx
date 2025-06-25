export type ControlStatus = 'DISABLED' | 'READ_ONLY' | '';

export interface TextBoxProps {
  id: string;
  titleTop?: string;
  placeholder?: string;
  titleBottom?: string;
  value: string;
  required?: boolean;
  isPassword?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  noPaste?: boolean;
  noCopy?: boolean;
  size?: number;
  eventChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  eventFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  eventBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  eventKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  ref?: React.RefObject<HTMLInputElement>;
}

export type TextBoxComponent = React.FC<TextBoxProps>;

export type { TextBoxProps, TextBoxComponent };
