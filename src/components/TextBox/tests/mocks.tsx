import React from 'react';
import { TextBoxProps } from '../types';

const baseMockProps: TextBoxProps = {
  label: 'Campo de texto',
  placeholder: 'Escribe algo...',
  value: '',
  onChange: jest.fn(),
  'data-testid': 'textbox',
};

export const mockTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  className: 'test-class',
};

export const mockDisabledTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  label: 'Campo deshabilitado',
  value: 'No se puede editar',
  disabled: true,
};

export const mockErrorTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  label: 'Campo con error',
  error: true,
  helperText: 'Este campo es requerido',
  value: 'Valor incorrecto',
};

export const mockFullWidthTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  label: 'Campo de ancho completo',
  fullWidth: true,
  placeholder: 'Ocupa todo el ancho disponible',
};

export const mockWithAdornmentsTextBoxProps: TextBoxProps = {
  ...baseMockProps,
  label: 'Campo con iconos',
  startAdornment: <span>🔍</span>,
  endAdornment: <span>✓</span>,
  placeholder: 'Buscar...',
};
