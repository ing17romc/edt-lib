import React, { useRef, useState } from 'react';
import classNames from '../../utils/classNames';
import styles from './styles/CarouselSnapped.module.scss';
import { CarouselSnappedProps, CarouselSlide } from './types';

/**
 * CarouselSnapped component that displays slides with native scroll snapping.
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
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const trackRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, slides.length - 1));
    setCurrentIndex(clamped);
    onChange?.(clamped);

    const track = trackRef.current;

    if (track) {
      const item = track.children[clamped] as HTMLElement;
      item?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
  };

  const prev = () => goTo(currentIndex - 1);
  const next = () => goTo(currentIndex + 1);

  return (
    <div className={classNames(styles.carousel, className)} {...rest}>
      <div className={styles.trackWrapper}>
        <div ref={trackRef} className={styles.track}>
          {slides.map((slide, index) => (
            <div
              key={slide.key}
              aria-hidden={index !== currentIndex}
              className={classNames(
                styles.slide,
                index === currentIndex && styles['slide--active']
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
            {'\u2039'}
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={currentIndex === slides.length - 1}
            className={classNames(styles.navButton, styles['navButton--next'])}
            onClick={next}
          >
            {'\u203A'}
          </button>
        </>
      )}

      {showIndicators && (
        <div className={styles.indicators} aria-label="Position indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.key}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
              className={classNames(
                styles.dot,
                index === currentIndex && styles['dot--active']
              )}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CarouselSnapped;
export type { CarouselSnappedProps, CarouselSlide };
