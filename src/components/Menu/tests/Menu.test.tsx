import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Menu from '../index'
import {
  defaultMenuProps,
  itemsWithDivider,
  itemsWithIcons,
  mockOnSelect,
} from './mocks'

beforeEach(() => {
  mockOnSelect.mockClear()
})

describe('Menu', () => {
  describe('basic rendering', () => {
    it('renders the menu with role="menu"', () => {
      render(<Menu {...defaultMenuProps} />)
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    it('renders all items', () => {
      render(<Menu {...defaultMenuProps} />)
      expect(screen.getByRole('menuitem', { name: 'Item 1' })).toBeInTheDocument()
      expect(screen.getByRole('menuitem', { name: 'Item 2' })).toBeInTheDocument()
      expect(screen.getByRole('menuitem', { name: 'Item 3' })).toBeInTheDocument()
    })
  })

  describe('interaction', () => {
    it('calls onSelect on click', () => {
      render(<Menu {...defaultMenuProps} />)
      fireEvent.click(screen.getByRole('menuitem', { name: 'Item 1' }))
      expect(mockOnSelect).toHaveBeenCalledWith('item1')
    })

    it('does not call onSelect on a disabled item', () => {
      render(<Menu items={itemsWithIcons} onSelect={mockOnSelect} />)
      fireEvent.click(screen.getByRole('menuitem', { name: 'Disabled' }))
      expect(mockOnSelect).not.toHaveBeenCalled()
    })
  })

  describe('separator', () => {
    it('renders the separator', () => {
      render(<Menu items={itemsWithDivider} />)
      expect(screen.getByRole('separator')).toBeInTheDocument()
    })
  })

  describe('active item', () => {
    it('applies active class to the active item', () => {
      render(<Menu {...defaultMenuProps} activeKey="item1" />)
      expect(screen.getByRole('menuitem', { name: 'Item 1' }).className).toMatch(/item--active/)
    })
  })
})
