export interface RadioButtonProps {
  /**
   * Valor único que identifica este botón de radio
   */
  value: string | number;
  
  /**
   * Texto que se muestra junto al botón de radio
   */
  label: string;
  
  /**
   * Indica si el botón de radio está seleccionado
   */
  checked?: boolean;
  
  /**
   * Indica si el botón de radio está deshabilitado
   */
  disabled?: boolean;
  
  /**
   * Función que se ejecuta cuando cambia el estado del botón de radio
   */
  onChange?: (value: string | number) => void;
  
  /**
   * Clase CSS opcional para personalizar el estilo
   */
  className?: string;
  
  /**
   * Nombre del grupo al que pertenece el botón de radio
   */
  name?: string;
}
