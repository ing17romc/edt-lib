import React from 'react';
import { IconSize, IconVariant, IconProps } from '../types';

// Datos de prueba para el componente Icon
export const mockIconProps: IconProps = {
  name: 'home',
  size: IconSize.MEDIUM,
  variant: IconVariant.OUTLINE,
  'data-testid': 'icon',
};

// Props para diferentes tamaños
export const sizeVariants = [
  { size: IconSize.XSMALL, className: 'icon--xsmall' },
  { size: IconSize.SMALL, className: 'icon--small' },
  { size: IconSize.MEDIUM, className: 'icon--medium' },
  { size: IconSize.LARGE, className: 'icon--large' },
  { size: IconSize.XLARGE, className: 'icon--xlarge' },
];

// Props para diferentes variantes
export const variantOptions = [
  { variant: IconVariant.SOLID, className: 'icon--solid' },
  { variant: IconVariant.OUTLINE, className: 'icon--outline' },
  { variant: IconVariant.DUAL, className: 'icon--dual' },
];

// Props para diferentes estados
export const stateOptions = [
  { disabled: true, className: 'icon--disabled' },
  { inheritColor: true, className: 'icon--inherit-color' },
];

// Mock para el SVG del icono
export const MockSvgIcon = () => (
  <svg 
    viewBox="0 0 24 24"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    data-testid="mock-svg"
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </svg>
);
