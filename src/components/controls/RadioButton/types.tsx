import { ChangeEvent, RefObject } from 'react';

/**
 * Represents the possible statuses for the RadioButton component.
 * @typedef {'DISABLED' | 'READ_ONLY' | 'REQUIRED' | ''} ControlStatus
 */
export type ControlStatus = 'DISABLED' | 'READ_ONLY' | 'REQUIRED' | '';

/**
 * Props for the RadioButton component
 * @interface RadioButtonProps
 * @property {string} id - Unique identifier for the radio button (required)
 * @property {string} name - Name of the radio button group (required)
 * @property {string} label - Label text displayed next to the radio button (required)
 * @property {boolean} [disabled=false] - Whether the radio button is disabled
 * @property {boolean} [required=false] - Whether the radio button is required
 * @property {boolean} [readOnly=false] - Whether the radio button is read-only
 * @property {string} value - Current value of the radio button (required)
 * @property {(e: ChangeEvent<HTMLInputElement>) => void} [eventChange] - Change event handler
 * @property {React.RefObject<HTMLInputElement>} [ref] - Reference to the input element
 */
export interface RadioButtonProps {
  id: string;
  name: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  value: string;
  eventChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  ref?: RefObject<HTMLInputElement>;
}

/**
 * Type definition for the RadioButton component
 * @type {React.FC<RadioButtonProps>}
 */
export type RadioButtonComponent = React.FC<RadioButtonProps>;
