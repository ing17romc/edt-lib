import React from 'react';
import { ButtonProps } from './types';

/**
 * Componente Button que proporciona un botón estilizado y accesible.
 * Permite personalizar el estilo, tamaño y comportamiento del botón.
 * 
 * @param {ButtonProps} props - Propiedades del componente
 * @param {string} props.title - Texto que se mostrará en el botón (requerido)
 * @param {string} [props.id] - ID único para el botón
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado
 * @param {(e: React.MouseEvent) => void} [props.onClick] - Función que se ejecuta al hacer clic
 * @param {'PRIMARY' | 'SECONDARY' | 'DANGER' | 'SUCCESS' | 'WARNING' | 'INFO'} [props.type='PRIMARY'] - Estilo del botón
 * @param {'SM' | 'MD' | 'LG'} [props.size='MD'] - Tamaño del botón
 * @returns {JSX.Element} Elemento button con estilos y comportamiento personalizados
 */

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  disabled = false,
  onClick,
  type = 'PRIMARY',
  size = 'MD'
}) => {
  return (
    <button
      id={id}
      className={`${type.toLowerCase()} ${size.toLowerCase()}`}
      type={onClick ? 'button' : 'submit'}
      onClick={(e) => {
        if (!disabled && onClick) {
          onClick(e);
        }
      }}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
