import type { Meta } from '@storybook/react-vite'
import { ThumbnailProps } from '../types'

export const defaultArgs: Partial<ThumbnailProps> = {
  src: 'https://placehold.co/120x120',
  alt: 'Example image',
  width: 120,
  height: 120,
  rounded: false,
}

export const argTypes: NonNullable<Meta<ThumbnailProps>['argTypes']> = {
  src: {
    control: { type: 'text' },
    description: 'URL of the image to display.',
    table: { type: { summary: 'string' } },
  },
  alt: {
    control: { type: 'text' },
    description: 'Accessible alternative text for the image.',
    table: { type: { summary: 'string' } },
  },
  caption: {
    control: { type: 'text' },
    description: 'Optional caption text rendered below the image.',
    table: { type: { summary: 'string' } },
  },
  rounded: {
    control: { type: 'boolean' },
    description: 'When true, the image corners are fully rounded (circle).',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  width: {
    control: { type: 'number', min: 40 },
    description: 'Width of the thumbnail in pixels.',
    table: { type: { summary: 'number' } },
  },
  height: {
    control: { type: 'number', min: 40 },
    description: 'Height of the thumbnail in pixels.',
    table: { type: { summary: 'number' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'An image thumbnail with optional caption and rounded-corner support. Accepts explicit width and height for consistent sizing across layouts.',
    },
  },
}
