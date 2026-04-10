import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import DatePicker from '../index'
import { defaultArgs, argTypes, parameters } from './mocks'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
  parameters,
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    value: '2024-06-15',
    label: 'Selected date',
  },
}

const InteractiveDatePicker = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <DatePicker label="Date of birth" value={value} onChange={setValue} />
      {value && <p style={{ marginTop: 8 }}>Selected: {value}</p>}
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveDatePicker />,
}

export const WithMinMax: Story = {
  args: {
    value: '2024-06-15',
    min: '2024-06-01',
    max: '2024-06-30',
    label: 'June 2024 only',
  },
}

export const Disabled: Story = {
  args: {
    value: '2024-06-15',
    disabled: true,
    label: 'Disabled field',
  },
}
