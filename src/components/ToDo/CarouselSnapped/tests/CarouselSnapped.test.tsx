import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import CarouselSnapped from '../index'
import { defaultCarouselProps, minimalCarouselProps, mockOnChange } from './mocks'

beforeEach(() => {
  mockOnChange.mockClear()
  Element.prototype.scrollIntoView = jest.fn()
})

describe('CarouselSnapped', () => {
  describe('renderizado básico', () => {
    it('renderiza todos los slides', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByText('Slide 1')).toBeInTheDocument()
      expect(screen.getByText('Slide 2')).toBeInTheDocument()
      expect(screen.getByText('Slide 3')).toBeInTheDocument()
    })

    it('el slide inicial está activo', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByText('Slide 1').parentElement).toHaveClass('slide--active')
    })

    it('muestra botones de navegación por defecto', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByLabelText('Anterior')).toBeInTheDocument()
      expect(screen.getByLabelText('Siguiente')).toBeInTheDocument()
    })

    it('muestra indicadores de posición por defecto', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByLabelText('Indicadores de posición')).toBeInTheDocument()
    })
  })

  describe('navegación', () => {
    it('el botón anterior está deshabilitado en el primer slide', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      expect(screen.getByLabelText('Anterior')).toBeDisabled()
    })

    it('avanza al siguiente slide al hacer click en Siguiente', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      fireEvent.click(screen.getByLabelText('Siguiente'))
      expect(screen.getByText('Slide 2').parentElement).toHaveClass('slide--active')
    })

    it('el botón siguiente está deshabilitado en el último slide', () => {
      render(<CarouselSnapped {...defaultCarouselProps} defaultIndex={2} />)
      expect(screen.getByLabelText('Siguiente')).toBeDisabled()
    })

    it('va a un slide específico al hacer click en el indicador', () => {
      render(<CarouselSnapped {...defaultCarouselProps} />)
      fireEvent.click(screen.getByLabelText('Ir a slide 3'))
      expect(screen.getByText('Slide 3').parentElement).toHaveClass('slide--active')
    })
  })

  describe('props opcionales', () => {
    it('oculta la navegación cuando showNavigation=false', () => {
      render(<CarouselSnapped {...minimalCarouselProps} />)
      expect(screen.queryByLabelText('Anterior')).not.toBeInTheDocument()
    })

    it('oculta los indicadores cuando showIndicators=false', () => {
      render(<CarouselSnapped {...minimalCarouselProps} />)
      expect(screen.queryByLabelText('Indicadores de posición')).not.toBeInTheDocument()
    })
  })
})
