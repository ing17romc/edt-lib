import React from 'react';
import { ImageButtonProps } from './types';
import Icon from '../Icon';

/**
 * Componente ImageButton que muestra un botón con un ícono.
 * Proporciona una interfaz consistente para botones con íconos en la aplicación.
 * 
 * @param {ImageButtonProps} props - Propiedades del componente
 * @param {string} props.id - ID único para el botón
 * @param {string} props.text - Texto que se mostrará como título del botón
 * @param {IconName} props.icon - Nombre del ícono a mostrar
 * @param {IconSize} [props.size='MD'] - Tamaño del botón y el ícono
 * @param {boolean} [props.disabled=false] - Si el botón está deshabilitado
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Función que se ejecuta al hacer clic
 * @returns {JSX.Element} Elemento button con ícono y accesibilidad
 */

const ImageButton: React.FC<ImageButtonProps> = ({
  id,
  text,
  icon,
  size = 'MD',
  disabled = false,
  onClick
}) => {
  const getStyle = () => {
    return `imageButton ${disabled ? 'disabled' : ''}`;
  };

  const getButtonType = () => {
    return onClick ? 'button' : 'submit';
  };

  return (
    <abbr title={text} role="tooltip">
      <button
        className={getStyle()}
        id={id}
        type={getButtonType()}
        name={id}
        disabled={disabled}
        onClick={(e) => {
          if (!disabled && onClick) {
            onClick(e);
          }
        }}
        aria-label={text}
        aria-disabled={disabled}
      >
        <Icon name={icon} size={size} />
      </button>
    </abbr>
  );
};

export default ImageButton;
