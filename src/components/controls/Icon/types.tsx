import React from 'react';

/**
 * Tamaños disponibles para el componente Icon
 * - SM: Pequeño (Small)
 * - MD: Mediano (Medium) - Valor por defecto
 * - LG: Grande (Large)
 */
export type IconSize = 'SM' | 'MD' | 'LG';

/**
 * Nombres de íconos disponibles en la aplicación
 */
export type IconName =
  | 'add'      // Ícono de agregar
  | 'remove'   // Ícono de remover
  | 'edit'     // Ícono de editar
  | 'delete'   // Ícono de eliminar
  | 'search'   // Ícono de búsqueda
  | 'save'     // Ícono de guardar
  | 'cancel'   // Ícono de cancelar
  | 'check'    // Ícono de verificación
  | 'warning'  // Ícono de advertencia
  | 'info'     // Ícono de información
  | 'help'     // Ícono de ayuda
  | 'close';   // Ícono de cerrar

/**
 * Propiedades del componente Icon
 */
export interface IconProps {
  /**
   * Nombre del ícono a mostrar
   * @required
   */
  name: IconName;
  
  /**
   * Tamaño del ícono
   * @default 'MD'
   */
  size?: IconSize;
}

/**
 * Tipo que representa el componente Icon
 */
export type IconComponent = React.FC<IconProps>;
