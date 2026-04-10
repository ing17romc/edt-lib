import React from 'react'
import { MenuItem, MenuProps } from '../types'

export const mockOnSelect = vi.fn()

export const defaultItems: MenuItem[] = [
  { key: 'item1', label: 'Item 1' },
  { key: 'item2', label: 'Item 2' },
  { key: 'item3', label: 'Item 3' },
]

export const itemsWithDivider: MenuItem[] = [
  { key: 'item1', label: 'Profile' },
  { key: 'item2', label: 'Settings' },
  { key: 'sep', label: '', divider: true },
  { key: 'item3', label: 'Log out' },
]

export const itemsWithIcons: MenuItem[] = [
  { key: 'home', label: 'Home', icon: <span>🏠</span> },
  { key: 'settings', label: 'Settings', icon: <span>⚙️</span> },
  { key: 'disabled', label: 'Disabled', disabled: true },
]

export const defaultMenuProps: MenuProps = {
  items: defaultItems,
  onSelect: mockOnSelect,
}
