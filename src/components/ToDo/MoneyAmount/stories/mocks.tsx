import { MoneyAmountProps } from '../types'

export const defaultArgs: Partial<MoneyAmountProps> = {
  amount: 1500.5,
  currency: 'USD',
  decimals: 2,
  locale: 'en-US',
  showCurrency: true,
}

export const argTypes = {
  amount: {
    control: { type: 'number' },
    description: 'Numeric monetary value to display.',
    table: { type: { summary: 'number' } },
  },
  currency: {
    control: 'text',
    description: 'ISO 4217 currency code (e.g. USD, EUR).',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'USD' } },
  },
  decimals: {
    control: { type: 'number', min: 0, max: 6 },
    description: 'Number of decimal places to show.',
    table: { type: { summary: 'number' }, defaultValue: { summary: '2' } },
  },
  locale: {
    control: 'text',
    description: 'BCP 47 locale tag used for number formatting (e.g. en-US, de-DE).',
    table: { type: { summary: 'string' }, defaultValue: { summary: 'en-US' } },
  },
  showCurrency: {
    control: 'boolean',
    description: 'When true, the currency code or symbol is displayed alongside the amount.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'Displays a monetary amount formatted according to a locale and currency. Supports configurable decimal precision and optional currency symbol display.',
    },
  },
}
