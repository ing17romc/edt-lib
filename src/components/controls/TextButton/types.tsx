export type ControlStyle = 'PRIMARY' | 'SECONDARY' | 'DANGER' | 'SUCCESS' | 'WARNING' | 'INFO';
export type ControlStatus = 'DISABLED' | '';

export interface TextButtonProps {
  id: string;
  text: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  type?: ControlStyle;
}

export type TextButtonComponent = React.FC<TextButtonProps>;

export type { TextButtonProps, TextButtonComponent };
