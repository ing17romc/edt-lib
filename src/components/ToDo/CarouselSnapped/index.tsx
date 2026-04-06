import React, { useRef, useState } from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/CarouselSnapped.module.scss'
import { CarouselSnappedProps, CarouselSlide } from './types'

/**
 * Componente CarouselSnapped que muestra slides con scroll snapping nativo.
 *
 * @param slides - Diapositivas del carrusel
 * @param showNavigation - Si muestra botones prev/next
 * @param showIndicators - Si muestra indicadores de posición
 * @param defaultIndex - Índice inicial
 * @param onChange - Callback al cambiar de slide
 */
const CarouselSnapped = ({
  slides,
  showNavigation = true,
  showIndicators = true,
  defaultIndex = 0,
  onChange,
  className,
  ...rest
}: CarouselSnappedProps) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex)
  const trackRef = useRef<HTMLDivElement>(null)

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, slides.length - 1))
    setCurrentIndex(clamped)
    onChange?.(clamped)
    const track = trackRef.current
    if (track) {
      const item = track.children[clamped] as HTMLElement
      item?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }

  const prev = () => goTo(currentIndex - 1)
  const next = () => goTo(currentIndex + 1)

  return (
    <div className={classNames(styles.carousel, className)} {...rest}>
      <div className={styles.trackWrapper}>
        <div ref={trackRef} className={styles.track}>
          {slides.map((slide, i) => (
            <div
              key={slide.key}
              aria-hidden={i !== currentIndex}
              className={classNames(
                styles.slide,
                i === currentIndex && styles['slide--active']
              )}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {showNavigation && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            disabled={currentIndex === 0}
            className={classNames(styles.navButton, styles['navButton--prev'])}
            onClick={prev}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            disabled={currentIndex === slides.length - 1}
            className={classNames(styles.navButton, styles['navButton--next'])}
            onClick={next}
          >
            ›
          </button>
        </>
      )}

      {showIndicators && (
        <div className={styles.indicators} aria-label="Indicadores de posición">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`Ir a slide ${i + 1}`}
              aria-current={i === currentIndex}
              className={classNames(
                styles.dot,
                i === currentIndex && styles['dot--active']
              )}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default CarouselSnapped
export type { CarouselSnappedProps, CarouselSlide }
