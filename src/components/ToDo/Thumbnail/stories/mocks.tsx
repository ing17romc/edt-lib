import { ThumbnailProps } from '../types'

export const defaultArgs: Partial<ThumbnailProps> = {
  src: 'https://placehold.co/120x120',
  alt: 'Imagen de ejemplo',
  width: 120,
  height: 120,
  rounded: false,
}

export const argTypes = {
  src: { control: 'text' },
  alt: { control: 'text' },
  caption: { control: 'text' },
  rounded: { control: 'boolean' },
  width: { control: { type: 'number', min: 40 } },
  height: { control: { type: 'number', min: 40 } },
}
