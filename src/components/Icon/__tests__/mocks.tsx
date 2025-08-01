import React from 'react';
import { IconVariant, IconProps } from '../types';
import { ComponentSize } from '../../types';

// Datos de prueba para el componente Icon
export const mockIconProps: IconProps = {
  name: 'home',
  size: ComponentSize.MEDIUM,
  variant: IconVariant.OUTLINE,
  'data-testid': 'icon',
};

// Props para diferentes tamaños
export const sizeVariants = [
  { size: ComponentSize.SMALL, className: 'icon--small' },
  { size: ComponentSize.MEDIUM, className: 'icon--medium' },
  { size: ComponentSize.LARGE, className: 'icon--large' },
];

// Props para diferentes variantes
export const variantOptions = [
  { variant: IconVariant.SOLID, className: 'material-icons' },
  { variant: IconVariant.OUTLINE, className: 'material-icons-outlined' },
];

// Props para diferentes estados
export const stateOptions = [
  { disabled: true, inheritColor: false, className: 'icon--disabled' },
  { disabled: false, inheritColor: true, className: 'icon--inherit-color' },
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