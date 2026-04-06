import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import DatePicker from '../index'
import { defaultArgs, argTypes } from './mocks'

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {}

export const WithValue: Story = {
  args: {
    value: '2024-06-15',
    label: 'Fecha seleccionada',
  },
}

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div>
        <DatePicker label="Fecha de nacimiento" value={value} onChange={setValue} />
        {value && <p style={{ marginTop: 8 }}>Seleccionada: {value}</p>}
      </div>
    )
  },
}

export const WithMinMax: Story = {
  args: {
    value: '2024-06-15',
    min: '2024-06-01',
    max: '2024-06-30',
    label: 'Solo junio 2024',
  },
}

export const Disabled: Story = {
  args: {
    value: '2024-06-15',
    disabled: true,
    label: 'Campo deshabilitado',
  },
}
