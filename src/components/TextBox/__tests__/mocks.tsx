import React from 'react';
import { TextBoxProps } from '../types';

export const mockTextBoxProps: TextBoxProps = {
  label: 'Campo de texto',
  placeholder: 'Escribe algo...',
  value: '',
  onChange: jest.fn(),
  className: 'test-class',
  'data-testid': 'textbox',
};

export const mockDisabledTextBoxProps: TextBoxProps = {
  label: 'Campo deshabilitado',
  value: 'No se puede editar',
  disabled: true,
};

export const mockErrorTextBoxProps: TextBoxProps = {
  label: 'Campo con error',
  error: true,
  helperText: 'Este campo es requerido',
  value: 'Valor incorrecto',
  onChange: jest.fn(),
};

export const mockFullWidthTextBoxProps: TextBoxProps = {
  label: 'Campo de ancho completo',
  fullWidth: true,
  placeholder: 'Ocupa todo el ancho disponible',
};

export const mockWithAdornmentsTextBoxProps: TextBoxProps = {
  label: 'Campo con iconos',
  startAdornment: <span>🔍</span>,
  endAdornment: <span>✓</span>,
  placeholder: 'Buscar...',
};
