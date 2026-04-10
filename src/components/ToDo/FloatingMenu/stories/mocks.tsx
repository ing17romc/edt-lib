import { FloatingMenuProps } from '../types'
import { FloatingMenuPlacement } from '../types'

export const defaultArgs: Partial<FloatingMenuProps> = {
  items: [
    { key: 'edit', label: 'Edit' },
    { key: 'duplicate', label: 'Duplicate' },
    { key: 'sep', label: '', divider: true },
    { key: 'delete', label: 'Delete' },
  ],
  placement: 'bottom-start',
  disabled: false,
}

export const argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'] satisfies FloatingMenuPlacement[],
    description: 'Preferred alignment of the menu relative to its trigger.',
    table: {
      type: { summary: 'bottom-start | bottom-end | top-start | top-end' },
      defaultValue: { summary: 'bottom-start' },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'When true, the trigger is non-interactive and the menu cannot be opened.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  items: {
    control: false,
    description: 'List of menu items. Use `divider: true` on an item to insert a separator.',
    table: { type: { summary: '{ key: string; label: string; divider?: boolean }[]' } },
  },
  onSelect: {
    action: 'selected',
    description: 'Callback fired with the key of the selected menu item.',
    table: { type: { summary: '(key: string) => void' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'A button-triggered floating dropdown menu. Items can include dividers and the menu supports configurable placement relative to its trigger.',
    },
  },
}
