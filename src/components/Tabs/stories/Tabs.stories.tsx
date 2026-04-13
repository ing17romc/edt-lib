import React from 'react'
import { within, expect } from 'storybook/test'
import type { Meta, StoryObj } from '@storybook/react-vite'
import Tabs from '../index'
import { defaultArgs, argTypes, parameters } from './mocks'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
  parameters,
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('tablist')).toBeInTheDocument()
  },
}

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { key: 't1', label: 'Active', content: <div>Active tab</div> },
      { key: 't2', label: 'Disabled', content: <div>Not accessible</div>, disabled: true },
      { key: 't3', label: 'Normal', content: <div>Normal tab</div> },
    ],
  },
}

export const DefaultActiveSecond: Story = {
  args: {
    defaultActiveKey: 'tab2',
    tabs: [
      { key: 'tab1', label: 'First', content: <div>Content 1</div> },
      { key: 'tab2', label: 'Second', content: <div>Content 2 (active by default)</div> },
      { key: 'tab3', label: 'Third', content: <div>Content 3</div> },
    ],
  },
}
