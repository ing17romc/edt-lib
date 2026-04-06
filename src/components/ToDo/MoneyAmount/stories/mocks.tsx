import { MoneyAmountProps } from '../types'

export const defaultArgs: Partial<MoneyAmountProps> = {
  amount: 1500.5,
  currency: 'USD',
  decimals: 2,
  locale: 'es-CO',
  showCurrency: true,
}

export const argTypes = {
  amount: { control: { type: 'number' } },
  currency: { control: 'text' },
  decimals: { control: { type: 'number', min: 0, max: 6 } },
  locale: { control: 'text' },
  showCurrency: { control: 'boolean' },
}
