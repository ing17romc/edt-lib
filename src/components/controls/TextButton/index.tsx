import React from 'react';
import { TextButtonProps } from './types';

/**
 * Componente TextButton que muestra un botón de texto con diferentes estilos.
 * Permite crear botones de texto con diferentes estados y funcionalidades.
 * 
 * @param {TextButtonProps} props - Propiedades del componente
 * @param {string} props.id - ID único para el botón (requerido)
 * @param {string} props.text - Texto que se mostrará en el botón (requerido)
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado
 * @param {(e: React.MouseEvent) => void} [props.onClick] - Función que se ejecuta al hacer clic
 * @param {ControlStyle} [props.type='PRIMARY'] - Estilo del botón (PRIMARY, SECONDARY, DANGER, SUCCESS, WARNING, INFO)
 * @returns {JSX.Element} Elemento button con texto y estilos personalizados
 */

const TextButton: React.FC<TextButtonProps> = ({
  id,
  text,
  disabled = false,
  onClick,
  type = 'PRIMARY'
}) => {
  const getButtonStyle = () => {
    return `textButton ${type} ${disabled ? 'DISABLED' : ''}`;
  };

  return (
    <button
      className={getButtonStyle()}
      id={id}
      type={onClick ? 'button' : 'submit'}
      name={id}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={(e) => {
        if (!disabled && onClick) {
          onClick(e);
        }
      }}
    >
      {text}
    </button>
  );
};

export default TextButton;
