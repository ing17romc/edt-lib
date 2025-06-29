import React, { forwardRef } from 'react';
import { ControlStatus } from '../../utils/enums';
import type { RadioButtonProps, RadioButtonComponent } from './types';
import './styles/RadioButton.scss';

/**
 * Componente RadioButton que proporciona un botón de radio con múltiples opciones de configuración.
 * Permite crear grupos de botones de radio personalizados con diferentes estados.
 * 
 * @param {RadioButtonProps} props - Propiedades del componente
 * @param {string} props.id - ID único para el botón de radio (requerido)
 * @param {string} props.name - Nombre del grupo de botones de radio (requerido)
 * @param {string} props.label - Texto de la etiqueta del botón (requerido)
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado
 * @param {boolean} [props.required=false] - Si el botón es requerido
 * @param {boolean} [props.readOnly=false] - Si el botón es de solo lectura
 * @param {string} props.value - Valor del botón (requerido)
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.eventChange] - Evento de cambio
 * @param {Ref<HTMLInputElement>} [props.ref] - Referencia al elemento input
 * @returns {JSX.Element} Elemento radio button con configuración personalizada
 */

const RadioButton: React.FC<RadioButtonProps> = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      id,
      name,
      label,
      disabled = false,
      required = false,
      readOnly = false,
      value,
      eventChange,
      ...props
    },
    ref
  ) => {
    const getRadioButtonStyle = () => {
      if (disabled) {
        return ControlStatus.DISABLED;
      }
      if (readOnly) {
        return ControlStatus.READ_ONLY;
      }
      if (required && !value) {
        return ControlStatus.REQUIRED;
      }
      return '';
    };

    return (
      <div className={`radiobutton ${getRadioButtonStyle()}`}>
        <input
          type="radio"
          id={id}
          name={name}
          required={required && !disabled}
          disabled={disabled}
          value={value}
          checked={id === value}
          onChange={(e) => {
            if (!readOnly && eventChange) {
              eventChange(e);
            }
          }}
          ref={ref}
          aria-label={label}
          aria-disabled={disabled}
          {...props}
        />
        <label htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
);

RadioButton.displayName = 'RadioButton';

// Export the component with proper typing
const TypedRadioButton = RadioButton as RadioButtonComponent;

// Export the component as default
export default TypedRadioButton;

// Export the types
export type { RadioButtonProps, RadioButtonComponent } from './types';
