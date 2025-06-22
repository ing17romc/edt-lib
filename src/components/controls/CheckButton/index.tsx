import React from 'react';
import { CheckButtonProps } from './types';

/**
 * Componente CheckButton que proporciona un checkbox estilizado y accesible.
 * Permite controlar el estado de verificación y manejar diferentes estados de UI.
 * 
 * @param {CheckButtonProps} props - Propiedades del componente
 * @param {string} props.id - ID único para el checkbox
 * @param {string} props.label - Texto que se mostrará junto al checkbox
 * @param {boolean} [props.required=false] - Si el checkbox es requerido
 * @param {boolean} [props.disabled=false] - Si el checkbox está deshabilitado
 * @param {boolean} [props.readOnly=false] - Si el checkbox está en modo solo lectura
 * @param {boolean} [props.checked=false] - Estado de verificación inicial
 * @param {(e: React.ChangeEvent) => void} props.eventChange - Función que se ejecuta al cambiar el estado
 * @param {React.ForwardedRef} [props.ref] - Referencia al elemento input
 * @returns {JSX.Element} Elemento div con checkbox y label estilizados
 */

const CheckButton = ({
  id,
  label,
  required = false,
  disabled = false,
  readOnly = false,
  checked = false,
  eventChange,
  ref
}: CheckButtonProps) => {
  const getStyle = () => {
    if (disabled) {
      return 'disabled';
    } else if (readOnly) {
      return 'read-only';
    } else if (required && !checked) {
      return 'required';
    }
    return '';
  };

  return (
    <div className={`checkbutton ${getStyle()}`} role="group" aria-label={label}>
      <input
        type="checkbox"
        id={id}
        name={id}
        required={!disabled && required && !checked}
        disabled={disabled}
        checked={checked}
        onChange={(e) => {
          if (!readOnly) {
            eventChange(e);
          }
        }}
        ref={ref}
        aria-checked={checked}
        aria-disabled={disabled}
        aria-readonly={readOnly}
      />
      <label htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CheckButton;
