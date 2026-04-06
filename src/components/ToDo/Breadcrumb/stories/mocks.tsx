import { BreadcrumbProps } from '../types'

export const defaultArgs: Partial<BreadcrumbProps> = {
  items: [
    { label: 'Inicio', href: '/' },
    { label: 'Productos', href: '/productos' },
    { label: 'Detalle' },
  ],
  separator: '/',
}

export const argTypes = {
  separator: { control: 'text' },
}
