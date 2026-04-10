import React from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/Thumbnail.module.scss'
import { ThumbnailProps } from './types'

/**
 * Thumbnail component that displays a miniature image with optional caption.
 *
 * @param src - Image URL
 * @param alt - Alternative text
 * @param caption - Descriptive text below the image
 * @param rounded - Whether the image has circular rounded borders
 * @param width - Width in pixels
 * @param height - Height in pixels
 */
const Thumbnail = ({
  src,
  alt,
  caption,
  rounded = false,
  width = 120,
  height = 120,
  className,
  ...rest
}: ThumbnailProps) => (
  <figure className={classNames(styles.thumbnail, className)}>
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classNames(
        styles.image,
        rounded && styles['image--rounded']
      )}
      {...rest}
    />
    {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
  </figure>
)

export default Thumbnail
export type { ThumbnailProps }
