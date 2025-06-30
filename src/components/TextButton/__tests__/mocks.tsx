import { TextButtonProps } from '../types';

export const mockTextButtonProps: TextButtonProps = {
  children: 'Botón de prueba',
  color: 'primary',
  size: 'medium',
  className: 'test-class',
  onClick: jest.fn(),
};

export const mockDisabledTextButtonProps: TextButtonProps = {
  children: 'Deshabilitado',
  color: 'primary',
  disabled: true,
};

export const mockLoadingTextButtonProps: TextButtonProps = {
  children: 'Cargando',
  loading: true,
};

export const mockFullWidthTextButtonProps: TextButtonProps = {
  children: 'Ancho completo',
  fullWidth: true,
};

export const mockCustomTextButtonProps: TextButtonProps = {
  children: 'Personalizado',
  color: 'secondary',
  size: 'large',
  underline: 'always',
};
