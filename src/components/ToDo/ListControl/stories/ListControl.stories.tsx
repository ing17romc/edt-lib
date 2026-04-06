import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import ListControl from '../index'
import { ListControlItem } from '../types'
import { defaultArgs, argTypes } from './mocks'

const meta: Meta<typeof ListControl> = {
  title: 'Components/ListControl',
  component: ListControl,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
}

export default meta

type Story = StoryObj<typeof ListControl>

export const Default: Story = {}

export const WithSelection: Story = {
  args: {
    items: [
      { key: 'item1', label: 'Seleccionado', selected: true },
      { key: 'item2', label: 'No seleccionado' },
      { key: 'item3', label: 'Deshabilitado', disabled: true },
    ],
  },
}

export const Interactive: Story = {
  render: () => {
    const [items, setItems] = useState<ListControlItem[]>([
      { key: 'item1', label: 'Elemento A' },
      { key: 'item2', label: 'Elemento B' },
      { key: 'item3', label: 'Elemento C' },
    ])

    const handleSelect = (key: string) => {
      setItems((prev) =>
        prev.map((item) => ({ ...item, selected: item.key === key }))
      )
    }

    return <ListControl items={items} onSelect={handleSelect} />
  },
}
