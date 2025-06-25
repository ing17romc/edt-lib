import { TextBoxProps } from '../types';

/**
 * Mock de las propiedades básicas del TextBox
 */
export const mockBaseProps: TextBoxProps = {
  id: 'test-input',
  value: 'Test value',
};

/**
 * Mock de las propiedades completas del TextBox
 */
export const mockFullProps: TextBoxProps = {
  id: 'test-input-full',
  titleTop: 'Título superior',
  placeholder: 'Ingrese texto',
  titleBottom: 'Título inferior',
  value: 'Test value',
  required: true,
  isPassword: false,
  disabled: false,
  readOnly: false,
  noPaste: false,
  noCopy: false,
  size: 200,
  eventChange: jest.fn(),
  eventFocus: jest.fn(),
  eventBlur: jest.fn(),
  eventKeyDown: jest.fn(),
};

/**
 * Mock de las propiedades para un campo deshabilitado
 */
export const mockDisabledProps: TextBoxProps = {
  ...mockBaseProps,
  disabled: true,
  value: 'Campo deshabilitado',
};

/**
 * Mock de las propiedades para un campo de solo lectura
 */
export const mockReadOnlyProps: TextBoxProps = {
  ...mockBaseProps,
  readOnly: true,
  value: 'Campo de solo lectura',
};

/**
 * Mock de las propiedades para un campo de contraseña
 */
export const mockPasswordProps: TextBoxProps = {
  ...mockBaseProps,
  isPassword: true,
  value: 'mysecretpassword',
};
