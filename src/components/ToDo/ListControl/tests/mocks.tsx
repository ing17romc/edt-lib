import { ListControlItem, ListControlProps } from '../types'

export const mockOnSelect = jest.fn()

export const defaultItems: ListControlItem[] = [
  { key: 'item1', label: 'Elemento 1' },
  { key: 'item2', label: 'Elemento 2', description: 'Descripción del elemento 2' },
  { key: 'item3', label: 'Elemento 3' },
]

export const itemsWithSelection: ListControlItem[] = [
  { key: 'item1', label: 'Seleccionado', selected: true },
  { key: 'item2', label: 'No seleccionado' },
  { key: 'item3', label: 'Deshabilitado', disabled: true },
]

export const defaultListControlProps: ListControlProps = {
  items: defaultItems,
  onSelect: mockOnSelect,
}
