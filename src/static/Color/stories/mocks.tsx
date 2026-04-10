import type { ColorGroup, ColorProps } from '../types';
import type { Meta } from '@storybook/react';

/**
 * Color groups to display in the component
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
 * Default configuration for Storybook stories
 */
export const defaultArgs: ColorProps = {
  showFontColors: true,
  showBackgroundColors: true,
  showScssVariables: true,
};

/**
 * Control configuration for Storybook
 */
export const argTypes: Meta<ColorProps>['argTypes'] = {
  className: {
    control: { type: 'text' },
    description: 'Custom CSS class for the main container',
  },
  showFontColors: {
    control: { type: 'boolean' },
    description: 'Show font colors',
  },
  showBackgroundColors: {
    control: { type: 'boolean' },
    description: 'Show background colors',
  },
  showScssVariables: {
    control: { type: 'boolean' },
    description: 'Show SCSS color variables',
  },
};

/**
 * Parameter configuration for stories
 */
export const parameters = {
  layout: 'fullscreen',
  docs: {
    description: {
      component: 'Component that displays color examples, including font colors, background colors, and SCSS color variables.',
    },
  },
};
