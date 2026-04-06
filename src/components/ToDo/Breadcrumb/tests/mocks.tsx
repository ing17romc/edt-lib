import { BreadcrumbItem, BreadcrumbProps } from '../types'

export const defaultItems: BreadcrumbItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Productos', href: '/productos' },
  { label: 'Detalle' },
]

export const defaultBreadcrumbProps: BreadcrumbProps = {
  items: defaultItems,
}

export const customSeparatorProps: BreadcrumbProps = {
  items: defaultItems,
  separator: '>',
}

export const singleItemProps: BreadcrumbProps = {
  items: [{ label: 'Inicio' }],
}

export const twoItemsProps: BreadcrumbProps = {
  items: [
    { label: 'Inicio', href: '/' },
    { label: 'Actual' },
  ],
}
