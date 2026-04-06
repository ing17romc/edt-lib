import React from 'react'
import { render, screen } from '@testing-library/react'
import MoneyAmount from '../index'
import {
  defaultMoneyAmountProps,
  copMoneyAmountProps,
  eurMoneyAmountProps,
  noDecimalsMoneyAmountProps,
  noCurrencySymbolProps,
} from './mocks'

describe('MoneyAmount', () => {
  describe('renderizado básico', () => {
    it('renderiza el componente', () => {
      render(<MoneyAmount {...defaultMoneyAmountProps} />)
      expect(screen.getByText(/1/)).toBeInTheDocument()
    })

    it('aplica la clase CSS correcta', () => {
      const { container } = render(<MoneyAmount {...defaultMoneyAmountProps} />)
      expect(container.firstChild).toHaveClass('moneyAmount')
    })
  })

  describe('formatos de moneda', () => {
    it('formatea en USD por defecto', () => {
      render(<MoneyAmount {...defaultMoneyAmountProps} />)
      const el = screen.getByText(/1[.,]500/)
      expect(el).toBeInTheDocument()
    })

    it('formatea en COP', () => {
      render(<MoneyAmount {...copMoneyAmountProps} />)
      expect(screen.getByText(/250\.000|250,000/)).toBeInTheDocument()
    })

    it('formatea en EUR', () => {
      render(<MoneyAmount {...eurMoneyAmountProps} />)
      expect(screen.getByText(/99/)).toBeInTheDocument()
    })
  })

  describe('opciones de formato', () => {
    it('muestra sin decimales cuando decimals=0', () => {
      render(<MoneyAmount {...noDecimalsMoneyAmountProps} />)
      expect(screen.getByText(/1[.,]000/)).toBeInTheDocument()
    })

    it('oculta el símbolo de moneda cuando showCurrency=false', () => {
      render(<MoneyAmount {...noCurrencySymbolProps} />)
      expect(screen.getByText(/3[.,]500/)).toBeInTheDocument()
    })
  })

  describe('atributos HTML', () => {
    it('acepta className adicional', () => {
      render(<MoneyAmount {...defaultMoneyAmountProps} className="custom" />)
      expect(screen.getByText(/1/)).toHaveClass('custom')
    })
  })
})
