import React from 'react';
import { ControlSize } from '../../utils/enums';
import { AllIconsType } from '../../utils/IconTypes';

/**
 * Propiedades del componente Icon
 */
export interface IconProps {
  /**
   * Nombre del ícono a mostrar
   * @required
   */
  name: AllIconsType | null;
  
  /**
   * Tamaño del ícono
   * @default 'MD'
   */
  size?: ControlSize;
}

/**
 * Tipo que representa el componente Icon
 */
export type IconComponent = React.FC<IconProps>;
