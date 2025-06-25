import { FormState } from '../types';

/**
 * Mock del estado inicial del formulario para pruebas
 */
export const mockInitialState: FormState = {
  name: 'Rafael Orlando',
  lastName: 'Márquez Cedeño',
  dni: 'MACR860512',
  civilStatus: '1',
  gender: '',
  noticePrivacy: false,
  description: '',
  birthDate: '',
  disabled: false,
  required: false,
  readOnly: false,
};

/**
 * Mock de datos para probar el formulario
 */
export const mockFormData = {
  name: 'Nuevo Nombre',
  lastName: 'Nuevo Apellido',
  dni: 'NUEVO123',
  civilStatus: '2',
  gender: 'M',
  noticePrivacy: true,
  description: 'Nueva descripción',
  birthDate: '2000-01-01',
};
