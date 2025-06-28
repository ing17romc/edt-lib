import React from 'react';
import { IconProps } from './types';
import { ControlSize } from '../../utils/enums';
import { ALL_ICONS } from '../../utils/IconTypes';
import './styles/Icon.scss';

/**
 * Componente Icon que muestra un ícono de Material Icons.
 * Proporciona una interfaz consistente para mostrar íconos en la aplicación.
 * 
 * @param {IconProps} props - Propiedades del componente
 * @param {IconName} props.name - Nombre del ícono a mostrar (requerido)
 * @param {ControlSize} [props.size='MD'] - Tamaño del ícono (SM, MD, LG)
 * @returns {JSX.Element} Elemento div con el ícono especificado
 */


const Icon: React.FC<IconProps> = ({ name, size = ControlSize.MD }) => {
  if (!Object.values(ALL_ICONS).includes(name)) return null;
  return (
    <div className={`container-icon ${size.toLowerCase()}`} role="img" aria-label={name}>
      <div className='material-icons'>{name}</div>
    </div>
  );
};

export default Icon;
