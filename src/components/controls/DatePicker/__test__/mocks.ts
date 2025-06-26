import { DatePickerProps } from '../types';

/**
 * Default props for the DatePicker component
 */
export const defaultProps: Omit<DatePickerProps, 'eventChange'> = {
  id: 'test-date-picker',
  title: 'Test Date',
  value: '',
  disabled: false,
  readOnly: false,
  required: false,
};

/**
 * Mock function for the eventChange handler
 */
export const mockOnChange = jest.fn();

/**
 * Create test props for the DatePicker component
 */
export const createTestProps = (
  overrides: Partial<DatePickerProps> = {}
): DatePickerProps => ({
  ...defaultProps,
  eventChange: mockOnChange,
  ...overrides,
});

/**
 * Helper to generate test dates
 */
export const testDates = {
  past: '01/15/2020',
  future: '12/31/2025',
  current: new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }),
};
