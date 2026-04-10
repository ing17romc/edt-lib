import { ColorGroup } from '../types';

/**
 * Test data for the Color component
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
 * Mock for the component's default props
 */
export const defaultProps = {
  showFontColors: true,
  showBackgroundColors: true,
  showScssVariables: true
};

/**
 * Mock for color utility functions
 */
export const mockColorUtils = {
  renderColorItem: (className: string, type: string) => ({
    type,
    className,
    key: className
  })
};
