import type { Meta, StoryObj } from '@storybook/react-vite'
import Breadcrumb from '../index'
import { defaultArgs, argTypes, parameters } from './mocks'

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
  parameters,
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {}

export const CustomSeparator: Story = {
  args: {
    separator: '>',
  },
}

export const SingleItem: Story = {
  args: {
    items: [{ label: 'Home' }],
  },
}

export const DeepNavigation: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Blog', href: '/blog' },
      { label: 'Technology', href: '/blog/technology' },
      { label: 'React', href: '/blog/technology/react' },
      { label: 'Components' },
    ],
  },
}
