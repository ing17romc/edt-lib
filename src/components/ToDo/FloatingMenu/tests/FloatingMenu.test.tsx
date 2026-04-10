import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import FloatingMenu from '../index'
import {
  defaultFloatingMenuProps,
  itemsWithDisabled,
  mockOnSelect,
} from './mocks'

beforeEach(() => {
  mockOnSelect.mockClear()
})

describe('FloatingMenu', () => {
  describe('basic rendering', () => {
    it('renders the trigger', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
    })

    it('does not show the menu by default', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })

  describe('opening and closing', () => {
    it('shows the menu when clicking the trigger', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    it('shows the menu items when opened', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
      expect(screen.getByRole('menuitem', { name: 'Edit' })).toBeInTheDocument()
      expect(screen.getByRole('menuitem', { name: 'Delete' })).toBeInTheDocument()
    })

    it('closes the menu when selecting an item', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
      fireEvent.click(screen.getByRole('menuitem', { name: 'Edit' }))
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })

  describe('selection', () => {
    it('calls onSelect with the correct key', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
      fireEvent.click(screen.getByRole('menuitem', { name: 'Edit' }))
      expect(mockOnSelect).toHaveBeenCalledWith('edit')
    })

    it('does not call onSelect on disabled item', () => {
      render(
        <FloatingMenu
          trigger={<button type="button">Open</button>}
          items={itemsWithDisabled}
          onSelect={mockOnSelect}
        />
      )
      fireEvent.click(screen.getByRole('button', { name: 'Open' }))
      fireEvent.click(screen.getByRole('menuitem', { name: 'Disabled action' }))
      expect(mockOnSelect).not.toHaveBeenCalled()
    })
  })

  describe('disabled', () => {
    it('does not open the menu when disabled=true', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} disabled />)
      fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })
})
