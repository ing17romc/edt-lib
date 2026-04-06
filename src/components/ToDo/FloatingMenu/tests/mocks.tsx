import React from 'react'
import { FloatingMenuItem, FloatingMenuProps } from '../types'

export const mockOnSelect = vi.fn()

export const defaultItems: FloatingMenuItem[] = [
  { key: 'edit', label: 'Editar' },
  { key: 'duplicate', label: 'Duplicar' },
  { key: 'sep', label: '', divider: true },
  { key: 'delete', label: 'Eliminar' },
]

export const itemsWithDisabled: FloatingMenuItem[] = [
  { key: 'action1', label: 'Acción 1' },
  { key: 'action2', label: 'Acción deshabilitada', disabled: true },
]

export const defaultFloatingMenuProps: FloatingMenuProps = {
  trigger: <button type="button">Abrir menú</button>,
  items: defaultItems,
  onSelect: mockOnSelect,
}
