// Tipos para el componente Form

/**
 * Estado del formulario.
 */
export interface FormState {
  name: string;
  lastName: string;
  dni: string;
  civilStatus: string;
  gender: string;
  noticePrivacy: boolean;
  description: string;
  birthDate: string;
  disabled: boolean;
  required: boolean;
  readOnly: boolean;
}

/**
 * Props para el componente Form.
 * Actualmente el componente no recibe props, pero se deja la interfaz para futura extensión.
 */
// No se requiere interfaz vacía para FormProps
