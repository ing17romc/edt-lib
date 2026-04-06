import React from 'react'
import { CarouselSlide, CarouselSnappedProps } from '../types'

export const mockOnChange = jest.fn()

export const defaultSlides: CarouselSlide[] = [
  { key: 'slide1', content: <div>Slide 1</div> },
  { key: 'slide2', content: <div>Slide 2</div> },
  { key: 'slide3', content: <div>Slide 3</div> },
]

export const defaultCarouselProps: CarouselSnappedProps = {
  slides: defaultSlides,
}

export const carouselWithCallback: CarouselSnappedProps = {
  slides: defaultSlides,
  onChange: mockOnChange,
}

export const minimalCarouselProps: CarouselSnappedProps = {
  slides: defaultSlides,
  showNavigation: false,
  showIndicators: false,
}
