import React from 'react';
import { TextBoxProps } from '../types';

const baseMockProps: TextBoxProps = {
  label: 'Text field',
  placeholder: 'Type something...',
  value: '',
  onChange: vi.fn(),
  'data-testid': 'textbox',
};

export const mockTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  className: 'test-class',
};

export const mockDisabledTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  label: 'Disabled field',
  value: 'Cannot be edited',
  disabled: true,
};

export const mockErrorTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  label: 'Field with error',
  error: true,
  helperText: 'This field is required',
  value: 'Incorrect value',
};

export const mockFullWidthTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  label: 'Full width field',
  fullWidth: true,
  placeholder: 'Takes up all available width',
};

export const mockWithAdornmentsTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  label: 'Field with icons',
  startAdornment: <span>🔍</span>,
  endAdornment: <span>✓</span>,
  placeholder: 'Search...',
};
