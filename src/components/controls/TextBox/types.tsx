/**
 * Estado del control
 */
export type ControlStatus = 'DISABLED' | 'READ_ONLY' | '';

/**
 * Propiedades del componente TextBox
 */
export interface TextBoxProps {
  /** ID único del campo de entrada */
  id: string;
  
  /** Título que aparece encima del campo */
  titleTop?: string;
  
  /** Texto de marcador de posición */
  placeholder?: string;
  
  /** Texto descriptivo debajo del campo */
  titleBottom?: string;
  
  /** Valor actual del campo */
  value: string;
  
  /** Indica si el campo es obligatorio */
  required?: boolean;
  
  /** Indica si el campo es de tipo contraseña */
  isPassword?: boolean;
  
  /** Indica si el campo está deshabilitado */
  disabled?: boolean;
  
  /** Indica si el campo es de solo lectura */
  readOnly?: boolean;
  
  /** Indica si está deshabilitado el pegado de texto */
  noPaste?: boolean;
  
  /** Indica si está deshabilitada la copia de texto */
  noCopy?: boolean;
  
  /** Ancho del campo en píxeles */
  size?: number;
  
  /** Manejador del evento de cambio */
  eventChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  
  /** Manejador del evento de foco */
  eventFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  
  /** Manejador del evento de pérdida de foco */
  eventBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  
  /** Manejador del evento de tecla presionada */
  eventKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  
  /** Referencia al elemento input */
  ref?: React.RefObject<HTMLInputElement>;
}

/**
 * Tipo del componente TextBox
 */
export type TextBoxComponent = React.FC<TextBoxProps>;
