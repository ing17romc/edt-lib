import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import ListControl from '../index'
import { ListControlItem } from '../types'
import { defaultArgs, argTypes, parameters } from './mocks'

const meta: Meta<typeof ListControl> = {
  title: 'Components/ListControl',
  component: ListControl,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
  parameters,
}

export default meta

type Story = StoryObj<typeof ListControl>

export const Default: Story = {}

export const WithSelection: Story = {
  args: {
    items: [
      { key: 'item1', label: 'Selected', selected: true },
      { key: 'item2', label: 'Not selected' },
      { key: 'item3', label: 'Disabled', disabled: true },
    ],
  },
}

const InteractiveListControl = () => {
  const [items, setItems] = useState<ListControlItem[]>([
    { key: 'item1', label: 'Item A' },
    { key: 'item2', label: 'Item B' },
    { key: 'item3', label: 'Item C' },
  ])

  const handleSelect = (key: string) => {
    setItems((prev) =>
      prev.map((item) => ({ ...item, selected: item.key === key }))
    )
  }

  return <ListControl items={items} onSelect={handleSelect} />
}

export const Interactive: Story = {
  render: () => <InteractiveListControl />,
}
