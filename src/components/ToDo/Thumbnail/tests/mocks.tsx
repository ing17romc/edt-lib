import { ThumbnailProps } from '../types'

export const defaultThumbnailProps: ThumbnailProps = {
  src: 'https://placehold.co/120x120',
  alt: 'Imagen de ejemplo',
}

export const withCaptionProps: ThumbnailProps = {
  src: 'https://placehold.co/120x120',
  alt: 'Imagen con caption',
  caption: 'Descripción de la imagen',
}

export const roundedThumbnailProps: ThumbnailProps = {
  src: 'https://placehold.co/120x120',
  alt: 'Avatar redondeado',
  rounded: true,
}

export const largeThumbnailProps: ThumbnailProps = {
  src: 'https://placehold.co/240x160',
  alt: 'Imagen grande',
  width: 240,
  height: 160,
}
