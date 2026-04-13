import { HTMLAttributes } from 'react';

export type CurrencyCode = 'USD' | 'EUR' | 'COP' | 'MXN' | 'ARS' | 'CLP' | string;

/**
 * MoneyAmount component properties
 */
export interface MoneyAmountProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Numeric value to display
   */
  amount: number;

  /**
   * ISO 4217 currency code
   * @default 'USD'
   */
  currency?: CurrencyCode;

  /**
   * Number of decimal places to display
   * @default 2
   */
  decimals?: number;

  /**
   * Locale for number formatting
   * @default 'es-CO'
   */
  locale?: string;

  /**
   * Whether to show the currency symbol
   * @default true
   */
  showCurrency?: boolean;
}
