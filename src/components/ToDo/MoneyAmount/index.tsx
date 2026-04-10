import React from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/MoneyAmount.module.scss'
import { MoneyAmountProps } from './types'

/**
 * MoneyAmount component that formats and displays monetary values.
 *
 * @param amount - Numeric value to display
 * @param currency - ISO 4217 currency code
 * @param decimals - Number of decimal places
 * @param locale - Locale for number formatting
 * @param showCurrency - Whether to show the currency symbol
 */
const MoneyAmount = ({
  amount,
  currency = 'USD',
  decimals = 2,
  locale = 'es-CO',
  showCurrency = true,
  className,
  ...rest
}: MoneyAmountProps) => {
  const formatted = new Intl.NumberFormat(locale, {
    style: showCurrency ? 'currency' : 'decimal',
    currency: showCurrency ? currency : undefined,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount)

  return (
    <span
      className={classNames(styles.moneyAmount, className)}
      {...rest}
    >
      {formatted}
    </span>
  )
}

export default MoneyAmount
export type { MoneyAmountProps }
