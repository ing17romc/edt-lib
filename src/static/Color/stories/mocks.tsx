import type { ColorGroup, ColorProps } from '../types';
import type { Meta } from '@storybook/react';

/**
 * Grupos de colores para mostrar en el componente
 */
export const colorGroups: ColorGroup[] = [
  {
    title: 'Font color',
    type: 'font',
    items: [
      'font-blue',
      'font-red',
      'font-orange',
      'font-green',
      'font-white',
      'font-yellow',
      'font-gray',
    ],
  },
  {
    title: 'Background color',
    type: 'background',
    items: [
      'bg-primary-1',
      'bg-primary-2',
      'bg-primary-3',
      'bg-white',
      'bg-light-gray',
      'bg-gray',
    ],
  },
  {
    title: 'SCSS color variables',
    type: 'variable',
    items: [
      'black-color',
      'dark-gray-color',
      'gray-color',
      'light-gray-color',
      'white-color',
      'light-blue-color',
      'dark-blue-color',
      'red-color',
      'orange-color',
      'green-color',
      'yellow-color',
      'primary-color-1',
      'primary-color-2',
      'primary-color-3',
    ],
  },
];

/**
 * Configuración por defecto para las historias de Storybook
 */
export const defaultArgs: ColorProps = {
  showFontColors: true,
  showBackgroundColors: true,
  showScssVariables: true,
};

/**
 * Configuración de controles para Storybook
 */
export const argTypes: Meta<ColorProps>['argTypes'] = {
  className: {
    control: { type: 'text' },
    description: 'Clase CSS personalizada para el contenedor principal',
  },
  showFontColors: {
    control: { type: 'boolean' },
    description: 'Mostrar colores de fuente',
  },
  showBackgroundColors: {
    control: { type: 'boolean' },
    description: 'Mostrar colores de fondo',
  },
  showScssVariables: {
    control: { type: 'boolean' },
    description: 'Mostrar variables SCSS de color',
  },
};

/**
 * Configuración de parámetros para las historias
 */
export const parameters = {
  layout: 'fullscreen',
  docs: {
    description: {
      component: 'Componente que muestra ejemplos de colores, incluyendo colores de fuente, colores de fondo y variables SCSS de color.',
    },
  },
};
