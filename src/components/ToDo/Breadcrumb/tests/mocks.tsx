import { BreadcrumbItem, BreadcrumbProps } from '../types'

export const defaultItems: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Detail' },
]

export const defaultBreadcrumbProps: BreadcrumbProps = {
  items: defaultItems,
}

export const customSeparatorProps: BreadcrumbProps = {
  items: defaultItems,
  separator: '>',
}

export const singleItemProps: BreadcrumbProps = {
  items: [{ label: 'Home' }],
}

export const twoItemsProps: BreadcrumbProps = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Current' },
  ],
}
