import { ListControlProps } from '../types'

export const defaultArgs: Partial<ListControlProps> = {
  items: [
    { key: 'item1', label: 'Elemento 1' },
    { key: 'item2', label: 'Elemento 2', description: 'Descripción secundaria' },
    { key: 'item3', label: 'Elemento 3' },
  ],
  multiSelect: false,
}

export const argTypes = {
  multiSelect: { control: 'boolean' },
}
