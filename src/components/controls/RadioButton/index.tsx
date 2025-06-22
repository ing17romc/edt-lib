import React, { forwardRef, Ref } from 'react';
import { STYLE_STATUS_CONTROL } from '../../utils/constant';
import { RadioButtonProps } from './types';

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
        return STYLE_STATUS_CONTROL.DISABLED;
      }
      if (readOnly) {
        return STYLE_STATUS_CONTROL.READ_ONLY;
      }
      if (required && !value) {
        return STYLE_STATUS_CONTROL.REQUIRED;
      }
      return '';
    };

    return (
      <div className={`radiobutton ${getRadioButtonStyle()}`}>
        <input
          type="radio"
          id={id}
          name={name}
          required={!disabled && required && !value}
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
          aria-required={required}
          aria-disabled={disabled}
          aria-readonly={readOnly}
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

export default RadioButton;
