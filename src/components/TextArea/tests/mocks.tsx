import { TextAreaProps } from '../types';
import { ComponentSize } from '../../types';

const baseMockProps: Partial<TextAreaProps> = {
  rows: 3,
  'data-testid': 'textarea',
};

export const mockTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Description',
  placeholder: 'Write something...',
  value: '',
  size: ComponentSize.MEDIUM,
  onChange: vi.fn(),
  className: 'test-class',
};

export const mockDisabledTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Disabled field',
  value: 'This is sample text in a disabled textarea.',
  disabled: true,
};

export const mockErrorTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Field with error',
  error: true,
  helperText: 'This field is required',
  value: 'Text with error',
};

export const mockFullWidthTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Full width field',
  fullWidth: true,
  placeholder: 'This field takes up the full available width',
};

export const mockAutoResizeTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Auto-resize field',
  autoResize: true,
  placeholder: 'Write and the area will adjust automatically',
  minRows: 2,
  maxRows: 6,
};

export const mockWithMaxLengthTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Character limit field',
  maxLength: 100,
  placeholder: 'Write up to 100 characters',
};
