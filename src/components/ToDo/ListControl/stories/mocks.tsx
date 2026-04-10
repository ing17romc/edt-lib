import { ListControlProps } from '../types'

export const defaultArgs: Partial<ListControlProps> = {
  items: [
    { key: 'item1', label: 'Item 1' },
    { key: 'item2', label: 'Item 2', description: 'Secondary description' },
    { key: 'item3', label: 'Item 3' },
  ],
  multiSelect: false,
}

export const argTypes = {
  multiSelect: {
    control: 'boolean',
    description: 'When true, multiple items can be selected simultaneously.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  items: {
    control: false,
    description: 'List of selectable items. Each item requires a unique key and a display label.',
    table: { type: { summary: '{ key: string; label: string; description?: string }[]' } },
  },
  onSelect: {
    action: 'selected',
    description: 'Callback fired with the selected item key(s) when the selection changes.',
    table: { type: { summary: '(keys: string[]) => void' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'A scrollable list control for selecting one or multiple items. Supports single and multi-select modes and fires a callback with the selected keys.',
    },
  },
}
