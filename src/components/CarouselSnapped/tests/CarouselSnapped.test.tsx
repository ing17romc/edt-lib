import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CarouselSnapped from '../index'
import { defaultCarouselProps, minimalCarouselProps, mockOnChange } from './mocks'

beforeEach(() => {
  mockOnChange.mockClear()
  Element.prototype.scrollIntoView = vi.fn()
})

describe('CarouselSnapped', () => {
  describe('basic rendering', () => {
    it('renders all slides', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByText('Slide 1')).toBeInTheDocument()
      expect(screen.getByText('Slide 2')).toBeInTheDocument()
      expect(screen.getByText('Slide 3')).toBeInTheDocument()
    })

    it('the initial slide is active', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByText('Slide 1').parentElement).toHaveClass('slide--active')
    })

    it('shows navigation buttons by default', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByLabelText('Previous')).toBeInTheDocument()
      expect(screen.getByLabelText('Next')).toBeInTheDocument()
    })

    it('shows position indicators by default', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByLabelText('Position indicators')).toBeInTheDocument()
    })
  })

  describe('navigation', () => {
    it('the previous button is disabled on the first slide', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByLabelText('Previous')).toBeDisabled()
    })

    it('advances to the next slide when clicking Next', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      fireEvent.click(screen.getByLabelText('Next'))
      expect(screen.getByText('Slide 2').parentElement).toHaveClass('slide--active')
    })

    it('the next button is disabled on the last slide', () => {
      render(<CarouselSnapped {...defaultCarouselProps} defaultIndex={2} />)
      expect(screen.getByLabelText('Next')).toBeDisabled()
    })

    it('goes to a specific slide when clicking the indicator', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      fireEvent.click(screen.getByLabelText('Go to slide 3'))
      expect(screen.getByText('Slide 3').parentElement).toHaveClass('slide--active')
    })
  })

  describe('optional props', () => {
    it('hides navigation when showNavigation=false', () => {
      render(<CarouselSnapped {...minimalCarouselProps} />)
      expect(screen.queryByLabelText('Previous')).not.toBeInTheDocument()
    })

    it('hides indicators when showIndicators=false', () => {
      render(<CarouselSnapped {...minimalCarouselProps} />)
      expect(screen.queryByLabelText('Position indicators')).not.toBeInTheDocument()
    })
  })
})
