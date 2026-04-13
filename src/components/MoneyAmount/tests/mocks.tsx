import { MoneyAmountProps } from '../types'

export const defaultMoneyAmountProps: MoneyAmountProps = {
  amount: 1500.5,
}

export const copMoneyAmountProps: MoneyAmountProps = {
  amount: 250000,
  currency: 'COP',
  locale: 'es-CO',
}

export const eurMoneyAmountProps: MoneyAmountProps = {
  amount: 99.99,
  currency: 'EUR',
  locale: 'es-ES',
}

export const noDecimalsMoneyAmountProps: MoneyAmountProps = {
  amount: 1000,
  decimals: 0,
}

export const noCurrencySymbolProps: MoneyAmountProps = {
  amount: 3500.75,
  showCurrency: false,
}
