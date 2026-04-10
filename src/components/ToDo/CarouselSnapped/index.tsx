import React, { useRef, useState } from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/CarouselSnapped.module.scss'
import { CarouselSnappedProps, CarouselSlide } from './types'

/**
 * CarouselSnapped component that displays slides with native scroll snapping.
 *
 * @param slides - Carousel slides
 * @param showNavigation - Whether to show prev/next buttons
 * @param showIndicators - Whether to show position indicators
 * @param defaultIndex - Initial index
 * @param onChange - Callback when slide changes
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
            aria-label="Previous"
            disabled={currentIndex === 0}
            className={classNames(styles.navButton, styles['navButton--prev'])}
            onClick={prev}
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={currentIndex === slides.length - 1}
            className={classNames(styles.navButton, styles['navButton--next'])}
            onClick={next}
          >
            ›
          </button>
        </>
      )}

      {showIndicators && (
        <div className={styles.indicators} aria-label="Position indicators">
          {slides.map((slide, i) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
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
