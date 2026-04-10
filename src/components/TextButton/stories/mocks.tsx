import type { Meta } from '@storybook/react-vite';
import { TextButtonProps } from '../types';
import { ComponentSize } from '../../types';

export const parameters = {
  docs: {
    description: {
      component:
        'A text-style button for secondary actions. Supports configurable color, underline style, size, loading state, and full-width layout.',
    },
  },
};

export const defaultArgs: Partial<TextButtonProps> = {
  children: 'Text button',
  color: 'primary',
  size: ComponentSize.MEDIUM,
  underline: 'hover',
  disabled: false,
  loading: false,
  fullWidth: false,
};

export const argTypes: Meta<TextButtonProps>['argTypes'] = {
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Size of the text button.',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  color: {
    control: 'select',
    options: ['primary', 'secondary', 'error', 'success', 'warning', 'inherit'],
    description: 'Color tone of the button text.',
    table: {
      type: { summary: 'primary | secondary | error | success | warning | inherit' },
      defaultValue: { summary: 'primary' },
    },
  },
  underline: {
    control: 'select',
    options: ['none', 'hover', 'always'],
    description: 'Underline style — none, visible only on hover, or always shown.',
    table: {
      type: { summary: 'none | hover | always' },
      defaultValue: { summary: 'hover' },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'When true, the button is non-interactive and visually muted.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  loading: {
    control: 'boolean',
    description: 'When true, shows a loading spinner inside the button.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  fullWidth: {
    control: 'boolean',
    description: 'When true, the button stretches to fill the full width of its container.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
};

/**
 * All available TextButton colors
 */
export const allColors: Array<TextButtonProps['color']> = [
  'primary', 'secondary', 'error', 'success', 'warning', 'inherit',
];

/**
 * All available TextButton sizes
 */
export const allSizes = Object.values(ComponentSize);
