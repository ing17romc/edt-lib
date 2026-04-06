import { MenuProps } from '../types'

export const defaultArgs: Partial<MenuProps> = {
  items: [
    { key: 'item1', label: 'Elemento 1' },
    { key: 'item2', label: 'Elemento 2' },
    { key: 'item3', label: 'Elemento 3' },
  ],
}

export const argTypes = {
  activeKey: { control: 'text' },
}
