import { TextAreaProps } from '../types';

export const mockTextAreaProps: TextAreaProps = {
  label: 'Descripción',
  placeholder: 'Escribe algo...',
  value: '',
  onChange: jest.fn(),
  className: 'test-class',
  'data-testid': 'textarea',
};

export const mockDisabledTextAreaProps: TextAreaProps = {
  label: 'Campo deshabilitado',
  value: 'Este es un texto de ejemplo en un área de texto deshabilitada.',
  disabled: true,
  rows: 3,
};

export const mockErrorTextAreaProps: TextAreaProps = {
  label: 'Campo con error',
  error: true,
  helperText: 'Este campo es requerido',
  value: 'Texto con error',
  rows: 3,
};

export const mockFullWidthTextAreaProps: TextAreaProps = {
  label: 'Campo de ancho completo',
  fullWidth: true,
  placeholder: 'Este campo ocupa todo el ancho disponible',
  rows: 3,
};

export const mockAutoResizeTextAreaProps: TextAreaProps = {
  label: 'Campo con redimensionamiento automático',
  autoResize: true,
  placeholder: 'Escribe y el área se ajustará automáticamente',
  minRows: 2,
  maxRows: 6,
};

export const mockWithMaxLengthTextAreaProps: TextAreaProps = {
  label: 'Campo con límite de caracteres',
  maxLength: 100,
  placeholder: 'Escribe hasta 100 caracteres',
  rows: 3,
};
