import React from 'react'
import { FloatingMenuProps } from '../types'
import { FloatingMenuPlacement } from '../types'

export const defaultArgs: Partial<FloatingMenuProps> = {
  items: [
    { key: 'edit', label: 'Editar' },
    { key: 'duplicate', label: 'Duplicar' },
    { key: 'sep', label: '', divider: true },
    { key: 'delete', label: 'Eliminar' },
  ],
  placement: 'bottom-start',
  disabled: false,
}

export const argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'] satisfies FloatingMenuPlacement[],
  },
  disabled: { control: 'boolean' },
}
