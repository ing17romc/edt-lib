import React from 'react'
import { within, expect } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Tooltip from '../index'
import { defaultArgs, argTypes, allPlacements, parameters } from './mocks'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  args: {
    ...defaultArgs,
    children: <button type="button">Hover me</button>,
  },
  argTypes,
  parameters,
}

export default meta

type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByText('Hover me')).toBeInTheDocument()
  },
}

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '80px', padding: '60px', justifyContent: 'center' }}>
      {allPlacements.map((placement) => (
        <Tooltip key={placement} content={`Tooltip ${placement}`} placement={placement}>
          <button type="button">{placement}</button>
        </Tooltip>
      ))}
    </div>
  ),
}

export const WithReactContent: Story = {
  args: {
    content: (
      <span>
        <strong>Title</strong>
        <br />
        Additional description
      </span>
    ),
    children: <button type="button">Rich content</button>,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: <button type="button">Disabled tooltip</button>,
  },
}
