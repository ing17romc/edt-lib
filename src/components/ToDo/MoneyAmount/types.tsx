import { HTMLAttributes } from 'react';

export type CurrencyCode = 'USD' | 'EUR' | 'COP' | 'MXN' | 'ARS' | 'CLP' | string;

/**
 * Propiedades del componente MoneyAmount
 */
export interface MoneyAmountProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Valor numérico a mostrar
   */
  amount: number;

  /**
   * Código de moneda ISO 4217
   * @default 'USD'
   */
  currency?: CurrencyCode;

  /**
   * Número de decimales a mostrar
   * @default 2
   */
  decimals?: number;

  /**
   * Locale para el formato numérico
   * @default 'es-CO'
   */
  locale?: string;

  /**
   * Si muestra el símbolo de la moneda
   * @default true
   */
  showCurrency?: boolean;
}
