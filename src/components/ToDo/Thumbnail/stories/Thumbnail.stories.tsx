import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Thumbnail from '../index'
import { defaultArgs, argTypes } from './mocks'

const meta: Meta<typeof Thumbnail> = {
  title: 'Components/Thumbnail',
  component: Thumbnail,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
}

export default meta

type Story = StoryObj<typeof Thumbnail>

export const Default: Story = {}

export const WithCaption: Story = {
  args: {
    caption: 'Descripción de la imagen',
  },
}

export const Rounded: Story = {
  args: {
    rounded: true,
    alt: 'Avatar de usuario',
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
