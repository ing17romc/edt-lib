import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Tabs from '../index'
import {
  defaultTabsProps,
  tabsWithDisabled,
  controlledTabsProps,
  mockOnChange,
} from './mocks'

beforeEach(() => {
  mockOnChange.mockClear()
})

describe('Tabs', () => {
  describe('basic rendering', () => {
    it('renders the tab list', () => {
      render(<Tabs {...defaultTabsProps} />)
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })

    it('renders all tabs', () => {
      render(<Tabs {...defaultTabsProps} />)
      expect(screen.getByRole('tab', { name: 'Tab 1' })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'Tab 2' })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'Tab 3' })).toBeInTheDocument()
    })

    it('shows the first tab content by default', () => {
      render(<Tabs {...defaultTabsProps} />)
      expect(screen.getByText('Tab 1 content')).toBeInTheDocument()
    })

    it('the first tab has aria-selected="true" by default', () => {
      render(<Tabs {...defaultTabsProps} />)
      expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'true')
    })
  })

  describe('navigation', () => {
    it('changes content when clicking a tab', () => {
      render(<Tabs {...defaultTabsProps} />)
      fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }))
      expect(screen.getByText('Tab 2 content')).toBeInTheDocument()
    })

    it('updates aria-selected when changing tabs', () => {
      render(<Tabs {...defaultTabsProps} />)
      fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }))
      expect(screen.getByRole('tab', { name: 'Tab 2' })).toHaveAttribute('aria-selected', 'true')
      expect(screen.getByRole('tab', { name: 'Tab 1' })).toHaveAttribute('aria-selected', 'false')
    })
  })

  describe('disabled tab', () => {
    it('does not change content when clicking a disabled tab', () => {
      render(<Tabs tabs={tabsWithDisabled} />)
      fireEvent.click(screen.getByRole('tab', { name: 'Disabled' }))
      expect(screen.queryByText('Content 2')).not.toBeInTheDocument()
    })
  })

  describe('controlled mode', () => {
    it('calls onChange when changing tabs', () => {
      render(<Tabs {...controlledTabsProps} />)
      fireEvent.click(screen.getByRole('tab', { name: 'Tab 2' }))
      expect(mockOnChange).toHaveBeenCalledWith('tab2')
    })
  })

  describe('panel', () => {
    it('the panel has aria-labelledby pointing to the active tab', () => {
      render(<Tabs {...defaultTabsProps} />)
      const panel = screen.getByRole('tabpanel')
      expect(panel).toHaveAttribute('aria-labelledby', 'tab-tab1')
    })
  })
})
