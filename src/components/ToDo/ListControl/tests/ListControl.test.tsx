import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ListControl from '../index'
import {
  defaultListControlProps,
  itemsWithSelection,
  mockOnSelect,
} from './mocks'

beforeEach(() => {
  mockOnSelect.mockClear()
})

describe('ListControl', () => {
  describe('basic rendering', () => {
    it('renders the list with role="listbox"', () => {
      render(<ListControl {...defaultListControlProps} />)
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    it('renders all items', () => {
      render(<ListControl {...defaultListControlProps} />)
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
      expect(screen.getByText('Item 3')).toBeInTheDocument()
    })

    it('shows the description when defined', () => {
      render(<ListControl {...defaultListControlProps} />)
      expect(screen.getByText('Description of item 2')).toBeInTheDocument()
    })
  })

  describe('selection', () => {
    it('calls onSelect when clicking an item', () => {
      render(<ListControl {...defaultListControlProps} />)
      fireEvent.click(screen.getByText('Item 1'))
      expect(mockOnSelect).toHaveBeenCalledWith('item1')
    })

    it('the selected item has aria-selected="true"', () => {
      render(<ListControl items={itemsWithSelection} />)
      const options = screen.getAllByRole('option')
      expect(options[0]).toHaveAttribute('aria-selected', 'true')
    })

    it('does not call onSelect on a disabled item', () => {
      render(<ListControl items={itemsWithSelection} onSelect={mockOnSelect} />)
      fireEvent.click(screen.getByText('Disabled'))
      expect(mockOnSelect).not.toHaveBeenCalled()
    })
  })

  describe('multiSelect', () => {
    it('has aria-multiselectable="true" when multiSelect=true', () => {
      render(<ListControl {...defaultListControlProps} multiSelect />)
      expect(screen.getByRole('listbox')).toHaveAttribute('aria-multiselectable', 'true')
    })
  })
})
