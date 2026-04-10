import React from 'react'
import { FloatingMenuItem, FloatingMenuProps } from '../types'

export const mockOnSelect = vi.fn()

export const defaultItems: FloatingMenuItem[] = [
  { key: 'edit', label: 'Edit' },
  { key: 'duplicate', label: 'Duplicate' },
  { key: 'sep', label: '', divider: true },
  { key: 'delete', label: 'Delete' },
]

export const itemsWithDisabled: FloatingMenuItem[] = [
  { key: 'action1', label: 'Action 1' },
  { key: 'action2', label: 'Disabled action', disabled: true },
]

export const defaultFloatingMenuProps: FloatingMenuProps = {
  trigger: <button type="button">Open menu</button>,
  items: defaultItems,
  onSelect: mockOnSelect,
}
