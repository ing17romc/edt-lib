import React from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/Thumbnail.module.scss'
import { ThumbnailProps } from './types'

/**
 * Componente Thumbnail que muestra una imagen en miniatura con caption opcional.
 *
 * @param src - URL de la imagen
 * @param alt - Texto alternativo
 * @param caption - Texto descriptivo bajo la imagen
 * @param rounded - Si la imagen tiene bordes redondeados en círculo
 * @param width - Ancho en píxeles
 * @param height - Alto en píxeles
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
