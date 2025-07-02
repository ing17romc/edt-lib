import React from 'react';
import { IconSize, IconVariant } from '../types';

// Tipos para los estilos de contenedor
type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

export const containerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  flexWrap: 'wrap' as FlexWrap,
  marginBottom: '16px',
};

export const itemContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column' as FlexDirection,
  alignItems: 'center',
  gap: '8px',
  minWidth: '80px',
};

// Configuración de tamaños para mostrar en las historias
export const sizeOptions = [
  { size: IconSize.XSMALL, label: 'XSmall' },
  { size: IconSize.SMALL, label: 'Small' },
  { size: IconSize.MEDIUM, label: 'Medium' },
  { size: IconSize.LARGE, label: 'Large' },
  { size: IconSize.XLARGE, label: 'XLarge' },
];

// Configuración de variantes para mostrar en las historias
export const variantOptions = [
  { variant: IconVariant.OUTLINE, label: 'Outline' },
  { variant: IconVariant.SOLID, label: 'Solid' },
  { variant: IconVariant.DUAL, label: 'Dual' },
];
