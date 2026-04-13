import { ListControlItem, ListControlProps } from '../types'

export const mockOnSelect = vi.fn()

export const defaultItems: ListControlItem[] = [
  { key: 'item1', label: 'Item 1' },
  { key: 'item2', label: 'Item 2', description: 'Description of item 2' },
  { key: 'item3', label: 'Item 3' },
]

export const itemsWithSelection: ListControlItem[] = [
  { key: 'item1', label: 'Selected', selected: true },
  { key: 'item2', label: 'Not selected' },
  { key: 'item3', label: 'Disabled', disabled: true },
]

export const defaultListControlProps: ListControlProps = {
  items: defaultItems,
  onSelect: mockOnSelect,
}
