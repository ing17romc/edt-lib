import React from 'react';
import { BreadcrumbOption } from '../types';

export const mockOptions: BreadcrumbOption[] = [
  { 
    url: '/home', 
    text: 'Home',
    className: 'home-link'
  },
  { 
    url: '/products', 
    text: 'Products',
    disabled: false
  },
  { 
    url: '/details', 
    text: 'Product Details',
    disabled: true
  },
];

export const mockGetCurrentPath = jest.fn((url: string, event?: React.MouseEvent<HTMLButtonElement>) => {
  event?.preventDefault?.();
  return url;
});

export const mockSeparator = React.createElement('span', { className: 'custom-separator' }, '/');

export const mockCustomOptions: BreadcrumbOption[] = [
  { url: '/', text: 'Inicio' },
  { url: '/categoria', text: 'Categoría' },
  { url: '/producto/123', text: 'Producto 123' },
];
