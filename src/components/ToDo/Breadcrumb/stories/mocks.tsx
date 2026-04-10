import { BreadcrumbProps } from '../types'

export const defaultArgs: Partial<BreadcrumbProps> = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Detail' },
  ],
  separator: '/',
}

export const argTypes = {
  items: {
    control: false,
    description: 'Ordered list of breadcrumb entries. Each item has a `label` and an optional `href`.',
    table: { type: { summary: '{ label: string; href?: string }[]' } },
  },
  separator: {
    control: 'text',
    description: 'Character or node rendered between breadcrumb items.',
    table: { type: { summary: 'ReactNode' }, defaultValue: { summary: '/' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'A breadcrumb navigation trail showing the user\'s current location in a hierarchy. Items are separated by a customisable separator character.',
    },
  },
}
