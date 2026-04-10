import React from 'react'
import { render, screen } from '@testing-library/react'
import Thumbnail from '../index'
import {
  defaultThumbnailProps,
  withCaptionProps,
  roundedThumbnailProps,
  largeThumbnailProps,
} from './mocks'

describe('Thumbnail', () => {
  describe('basic rendering', () => {
    it('renders the image', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      expect(screen.getByRole('img')).toBeInTheDocument()
    })

    it('has the correct alt text', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      expect(screen.getByAltText('Example image')).toBeInTheDocument()
    })

    it('applies default width and height (120)', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('width', '120')
      expect(img).toHaveAttribute('height', '120')
    })
  })

  describe('caption', () => {
    it('shows the caption when defined', () => {
      render(<Thumbnail {...withCaptionProps} />)
      expect(screen.getByText('Image description')).toBeInTheDocument()
    })

    it('does not show caption when not defined', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      expect(screen.queryByRole('group')).not.toBeInTheDocument()
    })
  })

  describe('visual variants', () => {
    it('applies rounded class when rounded=true', () => {
      render(<Thumbnail {...roundedThumbnailProps} />)
      expect(screen.getByRole('img')).toHaveClass('image--rounded')
    })

    it('does not apply rounded class by default', () => {
      render(<Thumbnail {...defaultThumbnailProps} />)
      expect(screen.getByRole('img')).not.toHaveClass('image--rounded')
    })
  })

  describe('custom size', () => {
    it('applies the specified width and height', () => {
      render(<Thumbnail {...largeThumbnailProps} />)
      const img = screen.getByRole('img')
      expect(img).toHaveAttribute('width', '240')
      expect(img).toHaveAttribute('height', '160')
    })
  })
})
