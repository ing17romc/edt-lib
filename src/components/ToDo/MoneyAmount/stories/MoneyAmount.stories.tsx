import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import MoneyAmount from '../index'
import { defaultArgs, argTypes } from './mocks'

const meta: Meta<typeof MoneyAmount> = {
  title: 'Components/MoneyAmount',
  component: MoneyAmount,
  tags: ['autodocs'],
  args: defaultArgs,
  argTypes,
}

export default meta

type Story = StoryObj<typeof MoneyAmount>

export const Default: Story = {}

export const Currencies: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <MoneyAmount amount={1500.5} currency="USD" locale="en-US" />
      <MoneyAmount amount={250000} currency="COP" locale="es-CO" />
      <MoneyAmount amount={99.99} currency="EUR" locale="es-ES" />
      <MoneyAmount amount={1800} currency="MXN" locale="es-MX" />
    </div>
  ),
}

export const NoDecimals: Story = {
  args: {
    amount: 50000,
    currency: 'COP',
    decimals: 0,
    locale: 'es-CO',
  },
}

export const WithoutSymbol: Story = {
  args: {
    amount: 3500.75,
    showCurrency: false,
  },
}

export const NegativeAmount: Story = {
  args: {
    amount: -250.0,
  },
}
