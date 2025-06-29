import { Ref } from 'react';

/**
 * Status types for form controls
 */
export type ControlStatus = 'DISABLED' | 'READ_ONLY' | '';

/**
 * Props for the TextArea component
 */
export interface TextAreaProps {
  /** Unique identifier for the textarea (required) */
  id: string;
  /** Text to display above the textarea */
  titleTop?: string;
  /** Placeholder text to display when the textarea is empty */
  placeholder?: string;
  /** Text to display below the textarea */
  titleBottom?: string;
  /** Current value of the textarea (controlled component) */
  value: string;
  /** Whether the textarea is required */
  required?: boolean;
  /** Whether the textarea is disabled */
  disabled?: boolean;
  /** Whether the textarea is read-only */
  readOnly?: boolean;
  /** Whether to prevent paste operations */
  noPaste?: boolean;
  /** Whether to prevent copy operations */
  noCopy?: boolean;
  /** Maximum number of characters allowed */
  size?: number;
  /** Number of visible text lines */
  rows?: number;
  /** Callback when the value changes */
  eventChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Callback when the textarea receives focus */
  eventFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Callback when the textarea loses focus */
  eventBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Callback when a key is pressed */
  eventKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  /** Ref to the underlying textarea element */
  ref?: Ref<HTMLTextAreaElement>;
  /** Additional HTML attributes */
  [key: string]: unknown;
}

/**
 * Type for the TextArea component
 */
export type TextAreaComponent = React.ForwardRefExoticComponent<
  TextAreaProps & React.RefAttributes<HTMLTextAreaElement>
>;
