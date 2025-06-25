import { TextAreaProps } from '../types';

export const mockBaseProps: TextAreaProps = {
  id: 'test-textarea',
  value: 'Test value',
};

export const mockFullProps: TextAreaProps = {
  id: 'test-textarea',
  titleTop: 'Título superior',
  placeholder: 'Ingrese texto',
  titleBottom: 'Título inferior',
  value: 'Test value',
  required: true,
  disabled: false,
  readOnly: false,
  noPaste: false,
  noCopy: false,
  size: 300,
  rows: 6,
};

export const mockDisabledProps: TextAreaProps = {
  ...mockBaseProps,
  disabled: true,
};

export const mockReadOnlyProps: TextAreaProps = {
  ...mockBaseProps,
  readOnly: true,
};

export const mockRequiredProps: TextAreaProps = {
  ...mockBaseProps,
  required: true,
};

export const mockNoPasteProps: TextAreaProps = {
  ...mockBaseProps,
  noPaste: true,
};

export const mockNoCopyProps: TextAreaProps = {
  ...mockBaseProps,
  noCopy: true,
};
