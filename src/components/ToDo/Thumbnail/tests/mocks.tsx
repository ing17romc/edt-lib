import { ThumbnailProps } from '../types'

export const defaultThumbnailProps: ThumbnailProps = {
  src: 'https://placehold.co/120x120',
  alt: 'Example image',
}

export const withCaptionProps: ThumbnailProps = {
  src: 'https://placehold.co/120x120',
  alt: 'Image with caption',
  caption: 'Image description',
}

export const roundedThumbnailProps: ThumbnailProps = {
  src: 'https://placehold.co/120x120',
  alt: 'Rounded avatar',
  rounded: true,
}

export const largeThumbnailProps: ThumbnailProps = {
  src: 'https://placehold.co/240x160',
  alt: 'Large image',
  width: 240,
  height: 160,
}
