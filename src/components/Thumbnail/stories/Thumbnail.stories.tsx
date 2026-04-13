import React from 'react'
import { within, expect } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Thumbnail from '../index'
import { defaultArgs, argTypes, parameters } from './mocks'

const meta: Meta<typeof Thumbnail> = {
  title: 'Components/Thumbnail',
  component: Thumbnail,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
  parameters,
}

export default meta

type Story = StoryObj<typeof Thumbnail>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('img')).toBeInTheDocument()
  },
}

export const WithCaption: Story = {
  args: {
    caption: 'Image description',
  },
}

export const Rounded: Story = {
  args: {
    rounded: true,
    alt: 'User avatar',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-end' }}>
      <Thumbnail src="https://placehold.co/60x60" alt="Small" width={60} height={60} caption="60×60" />
      <Thumbnail src="https://placehold.co/120x120" alt="Medium" width={120} height={120} caption="120×120" />
      <Thumbnail src="https://placehold.co/200x200" alt="Large" width={200} height={200} caption="200×200" />
    </div>
  ),
}
