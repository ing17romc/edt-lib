import React from 'react'
import { within, expect } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'
import FloatingMenu from '../index'
import { defaultArgs, argTypes, parameters } from './mocks'

const meta: Meta<typeof FloatingMenu> = {
  title: 'Components/FloatingMenu',
  component: FloatingMenu,
  tags: ['autodocs'],
  args: {
    ...defaultArgs,
    trigger: <button type="button">Options ▾</button>,
  },
  argTypes,
  parameters,
}

export default meta

type Story = StoryObj<typeof FloatingMenu>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Options ▾')).toBeInTheDocument()
  },
}

export const BottomEnd: Story = {
  args: { placement: 'bottom-end' },
}

export const WithIcons: Story = {
  args: {
    items: [
      { key: 'edit', label: 'Edit', icon: '✏️' },
      { key: 'duplicate', label: 'Duplicate', icon: '📋' },
      { key: 'sep', label: '', divider: true },
      { key: 'delete', label: 'Delete', icon: '🗑️' },
    ],
  },
}

export const Disabled: Story = {
  args: { disabled: true },
}
