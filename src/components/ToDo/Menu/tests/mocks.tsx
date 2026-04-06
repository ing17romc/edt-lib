import React from 'react'
import { MenuItem, MenuProps } from '../types'

export const mockOnSelect = vi.fn()

export const defaultItems: MenuItem[] = [
  { key: 'item1', label: 'Elemento 1' },
  { key: 'item2', label: 'Elemento 2' },
  { key: 'item3', label: 'Elemento 3' },
]

export const itemsWithDivider: MenuItem[] = [
  { key: 'item1', label: 'Perfil' },
  { key: 'item2', label: 'Configuración' },
  { key: 'sep', label: '', divider: true },
  { key: 'item3', label: 'Cerrar sesión' },
]

export const itemsWithIcons: MenuItem[] = [
  { key: 'home', label: 'Inicio', icon: <span>🏠</span> },
  { key: 'settings', label: 'Ajustes', icon: <span>⚙️</span> },
  { key: 'disabled', label: 'Deshabilitado', disabled: true },
]

export const defaultMenuProps: MenuProps = {
  items: defaultItems,
  onSelect: mockOnSelect,
}
