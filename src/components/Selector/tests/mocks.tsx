import { SelectorProps, SelectorOption } from '../types';

export const mockOptions: SelectorOption[] = [
  { value: '1', label: 'Opción 1' },
  { value: '2', label: 'Opción 2' },
  { value: '3', label: 'Opción 3', disabled: true },
  { value: '4', label: 'Opción 4' },
  { value: '5', label: 'Opción 5' },
];

export const mockLabel = 'Selecciona una opción';
export const mockErrorMessage = 'Campo requerido';
export const mockHelperText = 'Selecciona una opción de la lista';
export const mockPlaceholder = 'Selecciona una opción';

export const defaultTestProps: SelectorProps = {
  options: mockOptions,
  label: mockLabel,
  onChange: jest.fn(),
};
