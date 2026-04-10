import { SelectorProps, SelectorOption } from '../types';

export const mockOptions: SelectorOption[] = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3', disabled: true },
  { value: '4', label: 'Option 4' },
  { value: '5', label: 'Option 5' },
];

export const mockLabel = 'Select an option';
export const mockErrorMessage = 'Required field';
export const mockHelperText = 'Select an option from the list';
export const mockPlaceholder = 'Select an option';

export const defaultTestProps: SelectorProps = {
  options: mockOptions,
  label: mockLabel,
  onChange: vi.fn(),
};
