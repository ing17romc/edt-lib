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
  describe('basic rendering', () => {
    it('renders the content', () => {
      render(<Message {...defaultMessageProps} />)
      expect(screen.getByText('This is an informational message.')).toBeInTheDocument()
    })

    it('uses alert role for accessibility', () => {
      render(<Message {...defaultMessageProps} />)
      expect(screen.getByRole('alert')).toBeInTheDocument()
    })

    it('applies primary class by default', () => {
      const { container } = render(<Message {...defaultMessageProps} />)
      expect(container.firstChild).toHaveClass('message--primary')
    })
  })

  describe('title', () => {
    it('shows the title when defined', () => {
      render(<Message {...titleMessageProps} />)
      expect(screen.getByText('Message title')).toBeInTheDocument()
    })

    it('does not show the title when not defined', () => {
      render(<Message {...defaultMessageProps} />)
      expect(screen.queryByText(/Title/)).not.toBeInTheDocument()
    })
  })

  describe('closing', () => {
    it('shows close button when closable=true', () => {
      render(<Message {...closableMessageProps} />)
      expect(screen.getByLabelText('Close')).toBeInTheDocument()
    })

    it('does not show close button by default', () => {
      render(<Message {...defaultMessageProps} />)
      expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
    })

    it('calls onClose when clicking close', () => {
      render(<Message {...closableMessageProps} />)
      fireEvent.click(screen.getByLabelText('Close'))
      expect(mockOnClose).toHaveBeenCalledTimes(1)
    })
  })

  describe('variants', () => {
    it.each(allMessageVariants)('applies the %s variant', (variant) => {
      const { container } = render(<Message {...defaultMessageProps} variant={variant} />)
      expect(container.firstChild).toHaveClass(`message--${variant}`)
    })
  })

  describe('icons', () => {
    it('shows an icon with primary variant', () => {
      render(<Message variant={ComponentVariant.PRIMARY}>Message</Message>)
      expect(screen.getByText('ℹ')).toBeInTheDocument()
    })

    it('shows an icon with success variant', () => {
      render(<Message variant={ComponentVariant.SUCCESS}>Message</Message>)
      expect(screen.getByText('✓')).toBeInTheDocument()
    })
  })
})
