import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumb from '../index'
import {
  defaultBreadcrumbProps,
  customSeparatorProps,
  singleItemProps,
  twoItemsProps,
} from './mocks'

describe('Breadcrumb', () => {
  describe('basic rendering', () => {
    it('renders the nav with aria-label', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.getByRole('navigation', { name: 'breadcrumb' })).toBeInTheDocument()
    })

    it('renders all items', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Products')).toBeInTheDocument()
      expect(screen.getByText('Detail')).toBeInTheDocument()
    })

    it('the last item has aria-current="page"', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.getByText('Detail')).toHaveAttribute('aria-current', 'page')
    })

    it('items with href are links', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/')
      expect(screen.getByRole('link', { name: 'Products' })).toHaveAttribute('href', '/products')
    })

    it('the last item is not a link', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      expect(screen.queryByRole('link', { name: 'Detail' })).not.toBeInTheDocument()
    })
  })

  describe('separators', () => {
    it('shows the default separator ("/")', () => {
      render(<Breadcrumb {...defaultBreadcrumbProps} />)
      const separators = screen.getAllByText('/')
      expect(separators).toHaveLength(2)
    })

    it('shows the custom separator', () => {
      render(<Breadcrumb {...customSeparatorProps} />)
      const separators = screen.getAllByText('>')
      expect(separators).toHaveLength(2)
    })

    it('does not show separator for a single item', () => {
      render(<Breadcrumb {...singleItemProps} />)
      expect(screen.queryByText('/')).not.toBeInTheDocument()
    })
  })

  describe('special cases', () => {
    it('renders a single item without links', () => {
      render(<Breadcrumb {...singleItemProps} />)
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.queryAllByRole('link')).toHaveLength(0)
    })

    it('renders two items correctly', () => {
      render(<Breadcrumb {...twoItemsProps} />)
      expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
      expect(screen.getByText('Current')).toHaveAttribute('aria-current', 'page')
    })
  })
})
