import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Message from '../index'
import { ComponentVariant } from '../../../types'
import {
  defaultMessageProps,
  titleMessageProps,
  closableMessageProps,
  allMessageVariants,
  mockOnClose,
} from './mocks'

beforeEach(() => {
  mockOnClose.mockClear()
})

describe('Message', () => {
  describe('renderizado básico', () => {
    it('renderiza el contenido', () => {
      render(<Message {...defaultMessageProps} />)
      expect(screen.getByText('Este es un mensaje informativo.')).toBeInTheDocument()
    })

    it('usa rol alert para accesibilidad', () => {
      render(<Message {...defaultMessageProps} />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('aplica clase primary por defecto', () => {
      const { container } = render(<Message {...defaultMessageProps} />)
      expect(container.firstChild).toHaveClass('message--primary')
    })
  })

  describe('título', () => {
    it('muestra el título cuando está definido', () => {
      render(<Message {...titleMessageProps} />)
      expect(screen.getByText('Título del mensaje')).toBeInTheDocument()
    })

    it('no muestra el título cuando no está definido', () => {
      render(<Message {...defaultMessageProps} />)
      expect(screen.queryByText(/Título/)).not.toBeInTheDocument()
    })
  })

  describe('cierre', () => {
    it('muestra botón de cierre cuando closable=true', () => {
      render(<Message {...closableMessageProps} />)
      expect(screen.getByLabelText('Cerrar')).toBeInTheDocument()
    })

    it('no muestra botón de cierre por defecto', () => {
      render(<Message {...defaultMessageProps} />)
      expect(screen.queryByLabelText('Cerrar')).not.toBeInTheDocument()
    })

    it('llama onClose al hacer click en cerrar', () => {
      render(<Message {...closableMessageProps} />)
      fireEvent.click(screen.getByLabelText('Cerrar'))
      expect(mockOnClose).toHaveBeenCalledTimes(1)
    })
  })

  describe('variantes', () => {
    it.each(allMessageVariants)('aplica la variante %s', (variant) => {
      const { container } = render(<Message {...defaultMessageProps} variant={variant} />)
      expect(container.firstChild).toHaveClass(`message--${variant}`)
    })
  })

  describe('iconos', () => {
    it('muestra un icono con variant primary', () => {
      render(<Message variant={ComponentVariant.PRIMARY}>Mensaje</Message>)
      expect(screen.getByText('ℹ')).toBeInTheDocument()
    })

    it('muestra un icono con variant success', () => {
      render(<Message variant={ComponentVariant.SUCCESS}>Mensaje</Message>)
      expect(screen.getByText('✓')).toBeInTheDocument()
    })
  })
})
