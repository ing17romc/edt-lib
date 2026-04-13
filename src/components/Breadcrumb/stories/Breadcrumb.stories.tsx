import { within, expect } from 'storybook/test'
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

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('navigation')).toBeInTheDocument()
  },
}

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
