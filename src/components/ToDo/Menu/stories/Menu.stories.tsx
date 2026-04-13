import React from 'react'
import { within, expect } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Menu from '../index'
import { defaultArgs, argTypes, parameters } from './mocks'

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
  parameters,
}

export default meta

type Story = StoryObj<typeof Menu>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('menu')).toBeInTheDocument()
  },
}

export const WithActiveItem: Story = {
  args: {
    activeKey: 'item2',
  },
}

export const WithDivider: Story = {
  args: {
    items: [
      { key: 'profile', label: 'Profile' },
      { key: 'settings', label: 'Settings' },
      { key: 'sep', label: '', divider: true },
      { key: 'logout', label: 'Log out' },
    ],
  },
}

export const WithIcons: Story = {
  render: () => (
    <Menu
      items={[
        { key: 'home', label: 'Home', icon: '🏠' },
        { key: 'settings', label: 'Settings', icon: '⚙️' },
        { key: 'sep', label: '', divider: true },
        { key: 'disabled', label: 'No access', disabled: true },
      ]}
    />
  ),
}
