import { MenuProps } from '../types'

export const defaultArgs: Partial<MenuProps> = {
  items: [
    { key: 'item1', label: 'Item 1' },
    { key: 'item2', label: 'Item 2' },
    { key: 'item3', label: 'Item 3' },
  ],
}

export const argTypes = {
  activeKey: {
    control: 'text',
    description: 'Key of the currently active (highlighted) menu item.',
    table: { type: { summary: 'string' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'A vertical navigation menu that highlights the active item. Accepts a list of keyed items and fires a callback when an item is selected.',
    },
  },
}
