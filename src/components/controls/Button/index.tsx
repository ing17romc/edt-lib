import React from 'react';
import { ButtonProps } from './types';
import { ControlStyle, ControlSize } from '../../utils/enums';

/**
 * Componente Button que proporciona un botón estilizado y accesible.
 * Permite personalizar el estilo, tamaño y comportamiento del botón.
 * 
 * @param {ButtonProps} props - Propiedades del componente
 * @param {string} props.title - Texto que se mostrará en el botón (requerido)
 * @param {string} [props.id] - ID único para el botón
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado
 * @param {(e: React.MouseEvent) => void} [props.onClick] - Función que se ejecuta al hacer clic
 * @param {ControlStyle} [props.buttonType=ControlStyle.PRIMARY] - Estilo del botón (PRIMARY o SECONDARY)
 * @param {ControlSize} [props.size=ControlSize.MD] - Tamaño del botón (XS, SM, MD o LG)
 * @returns {JSX.Element} Elemento button con estilos y comportamiento personalizados
 */

const Button: React.FC<ButtonProps> = ({
  id,
  title,
  disabled = false,
  onClick,
  buttonType = ControlStyle.PRIMARY,
  size = ControlSize.MD,
  className = ''
}) => {
  return (
    <button
      id={id}
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`btn ${buttonType.toLowerCase()} ${size.toLowerCase()} ${disabled ? 'disabled' : ''} ${className}`.trim()}
      aria-disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
