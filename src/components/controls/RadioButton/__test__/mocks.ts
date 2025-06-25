import { RadioButtonProps } from '../types';

/**
 * Default mock props for the RadioButton component
 */
export const defaultProps: RadioButtonProps = {
  id: 'test-radio',
  name: 'test-group',
  label: 'Test Radio Button',
  value: 'test-value',
};

/**
 * Disabled state mock props
 */
export const disabledProps: RadioButtonProps = {
  ...defaultProps,
  disabled: true,
};

/**
 * Required state mock props
 */
export const requiredProps: RadioButtonProps = {
  ...defaultProps,
  required: true,
};

/**
 * Read-only state mock props
 */
export const readOnlyProps: RadioButtonProps = {
  ...defaultProps,
  readOnly: true,
};

/**
 * Mock event handler for change events
 */
export const mockEventChange = jest.fn();

/**
 * Mock ref object
 */
export const mockRef = { current: null };
