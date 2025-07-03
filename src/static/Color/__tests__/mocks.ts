import { ColorGroup } from '../types';

/**
 * Datos de prueba para el componente Color
 */
export const mockColorGroups: ColorGroup[] = [
  {
    title: 'Font color',
    type: 'font',
    items: ['font-blue', 'font-red', 'font-gray']
  },
  {
    title: 'Background color',
    type: 'background',
    items: ['bg-primary-1', 'bg-white', 'bg-gray']
  },
  {
    title: 'SCSS color variables',
    type: 'variable',
    items: ['black-color', 'white-color', 'primary-color']
  }
];

/**
 * Mock para las props por defecto del componente
 */
export const defaultProps = {
  showFontColors: true,
  showBackgroundColors: true,
  showScssVariables: true
};

/**
 * Mock para las funciones de utilidad de color
 */
export const mockColorUtils = {
  renderColorItem: (className: string, type: string) => ({
    type,
    className,
    key: className
  })
};
