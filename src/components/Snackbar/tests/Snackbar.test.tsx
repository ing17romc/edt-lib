import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import Snackbar from '../index'
import { ComponentVariant } from '../../types'
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
  describe('basic rendering', () => {
    it('renders the message', () => {
      render(<Snackbar {...defaultSnackbarProps} />)
      expect(screen.getByText('Operation completed successfully')).toBeInTheDocument()
    })

    it('uses status role for accessibility', () => {
      render(<Snackbar {...defaultSnackbarProps} />)
      expect(screen.getByRole('status')).toBeInTheDocument()
    })

    it('does not render when open=false', () => {
      render(<Snackbar {...defaultSnackbarProps} open={false} />)
      expect(screen.queryByRole('status')).not.toBeInTheDocument()
    })
  })

  describe('actions', () => {
    it('shows close button when onClose is defined', () => {
      render(<Snackbar {...closableSnackbarProps} />)
      expect(screen.getByLabelText('Close')).toBeInTheDocument()
    })

    it('calls onClose when clicking close', () => {
      render(<Snackbar {...closableSnackbarProps} />)
      fireEvent.click(screen.getByLabelText('Close'))
      expect(mockOnClose).toHaveBeenCalledTimes(1)
    })

    it('shows action button when actionLabel is defined', () => {
      render(<Snackbar {...actionSnackbarProps} />)
      expect(screen.getByText('Undo')).toBeInTheDocument()
    })

    it('calls onAction when clicking the action button', () => {
      render(<Snackbar {...actionSnackbarProps} />)
      fireEvent.click(screen.getByText('Undo'))
      expect(mockOnAction).toHaveBeenCalledTimes(1)
    })
  })

  describe('auto-close', () => {
    it('calls onClose after the specified duration', () => {
      vi.useFakeTimers()
      render(<Snackbar {...closableSnackbarProps} duration={1000} />)
      act(() => { vi.advanceTimersByTime(1000) })
      expect(mockOnClose).toHaveBeenCalledTimes(1)
      vi.useRealTimers()
    })
  })

  describe('variants', () => {
    it.each(allSnackbarVariants)('applies the %s variant', (variant) => {
      const { container } = render(
        <Snackbar {...defaultSnackbarProps} variant={variant} />
      )
      expect(container.firstChild).toHaveClass(`snackbar--${variant}`)
    })

    it('uses primary variant by default', () => {
      const { container } = render(<Snackbar {...defaultSnackbarProps} />)
      expect(container.firstChild).toHaveClass(`snackbar--${ComponentVariant.PRIMARY}`)
    })
  })
})
