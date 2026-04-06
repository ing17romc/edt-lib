import React from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/MoneyAmount.module.scss'
import { MoneyAmountProps } from './types'

/**
 * Componente MoneyAmount que formatea y muestra valores monetarios.
 *
 * @param amount - Valor numérico a mostrar
 * @param currency - Código de moneda ISO 4217
 * @param decimals - Número de decimales
 * @param locale - Locale para el formato numérico
 * @param showCurrency - Si se muestra el símbolo de moneda
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
