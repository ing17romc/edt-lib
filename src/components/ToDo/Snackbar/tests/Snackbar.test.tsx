import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import Snackbar from '../index'
import { ComponentVariant } from '../../../types'
import {
  defaultSnackbarProps,
  closableSnackbarProps,
  actionSnackbarProps,
  allSnackbarVariants,
  mockOnClose,
  mockOnAction,
} from './mocks'

beforeEach(() => {
  mockOnClose.mockClear()
  mockOnAction.mockClear()
})

describe('Snackbar', () => {
  describe('renderizado básico', () => {
    it('renderiza el mensaje', () => {
      render(<Snackbar {...defaultSnackbarProps} />)
      expect(screen.getByText('Operación realizada con éxito')).toBeInTheDocument()
    })

    it('usa rol status para accesibilidad', () => {
      render(<Snackbar {...defaultSnackbarProps} />)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('no renderiza cuando open=false', () => {
      render(<Snackbar {...defaultSnackbarProps} open={false} />)
      expect(screen.queryByRole('status')).not.toBeInTheDocument()
    })
  })

  describe('acciones', () => {
    it('muestra botón de cierre cuando onClose está definido', () => {
      render(<Snackbar {...closableSnackbarProps} />)
      expect(screen.getByLabelText('Cerrar')).toBeInTheDocument()
    })

    it('llama onClose al hacer click en cerrar', () => {
      render(<Snackbar {...closableSnackbarProps} />)
      fireEvent.click(screen.getByLabelText('Cerrar'))
      expect(mockOnClose).toHaveBeenCalledTimes(1)
    })

    it('muestra botón de acción cuando actionLabel está definido', () => {
      render(<Snackbar {...actionSnackbarProps} />)
      expect(screen.getByText('Deshacer')).toBeInTheDocument()
    })

    it('llama onAction al hacer click en el botón de acción', () => {
      render(<Snackbar {...actionSnackbarProps} />)
      fireEvent.click(screen.getByText('Deshacer'))
      expect(mockOnAction).toHaveBeenCalledTimes(1)
    })
  })

  describe('auto-cierre', () => {
    it('llama onClose después del duration especificado', () => {
      jest.useFakeTimers()
      render(<Snackbar {...closableSnackbarProps} duration={1000} />)
      act(() => { jest.advanceTimersByTime(1000) })
      expect(mockOnClose).toHaveBeenCalledTimes(1)
      jest.useRealTimers()
    })
  })

  describe('variantes', () => {
    it.each(allSnackbarVariants)('aplica la variante %s', (variant) => {
      const { container } = render(
        <Snackbar {...defaultSnackbarProps} variant={variant} />
      )
      expect(container.firstChild).toHaveClass(`snackbar--${variant}`)
    })

    it('usa variante primary por defecto', () => {
      const { container } = render(<Snackbar {...defaultSnackbarProps} />)
      expect(container.firstChild).toHaveClass(`snackbar--${ComponentVariant.PRIMARY}`)
    })
  })
})
