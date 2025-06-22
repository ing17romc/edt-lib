export type ControlStatus = 'DISABLED' | 'READ_ONLY' | '';

export interface TextAreaProps {
  id: string;
  titleTop?: string;
  placeholder?: string;
  titleBottom?: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  noPaste?: boolean;
  noCopy?: boolean;
  size?: number;
  rows?: number;
  eventChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  eventFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  eventBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  eventKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  ref?: React.RefObject<HTMLTextAreaElement>;
}

export type TextAreaComponent = React.FC<TextAreaProps>;

export type { TextAreaProps, TextAreaComponent };
