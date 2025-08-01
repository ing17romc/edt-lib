import { TextAreaProps } from '../types';
import { ComponentSize } from '../../types';

const baseMockProps: Partial<TextAreaProps> = {
  rows: 3,
  'data-testid': 'textarea',
};

export const mockTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Descripción',
  placeholder: 'Escribe algo...',
  value: '',
  size: ComponentSize.MEDIUM,
  onChange: jest.fn(),
  className: 'test-class',
};

export const mockDisabledTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Campo deshabilitado',
  value: 'Este es un texto de ejemplo en un área de texto deshabilitada.',
  disabled: true,
};

export const mockErrorTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Campo con error',
  error: true,
  helperText: 'Este campo es requerido',
  value: 'Texto con error',
};

export const mockFullWidthTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Campo de ancho completo',
  fullWidth: true,
  placeholder: 'Este campo ocupa todo el ancho disponible',
};

export const mockAutoResizeTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Campo con redimensionamiento automático',
  autoResize: true,
  placeholder: 'Escribe y el área se ajustará automáticamente',
  minRows: 2,
  maxRows: 6,
};

export const mockWithMaxLengthTextAreaProps: TextAreaProps = {
  ...baseMockProps,
  label: 'Campo con límite de caracteres',
  maxLength: 100,
  placeholder: 'Escribe hasta 100 caracteres',
};
