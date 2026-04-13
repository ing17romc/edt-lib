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
  describe('basic rendering', () => {
    it('renders the component', () => {
      render(<MoneyAmount {...defaultMoneyAmountProps} />)
      expect(screen.getByText(/1/)).toBeInTheDocument()
    })

    it('applies the correct CSS class', () => {
      const { container } = render(<MoneyAmount {...defaultMoneyAmountProps} />)
      expect(container.firstChild).toHaveClass('moneyAmount')
    })
  })

  describe('currency formats', () => {
    it('formats in USD by default', () => {
      render(<MoneyAmount {...defaultMoneyAmountProps} />)
      const el = screen.getByText(/1[.,]500/)
      expect(el).toBeInTheDocument()
    })

    it('formats in COP', () => {
      render(<MoneyAmount {...copMoneyAmountProps} />)
      expect(screen.getByText(/250\.000|250,000/)).toBeInTheDocument()
    })

    it('formats in EUR', () => {
      render(<MoneyAmount {...eurMoneyAmountProps} />)
      expect(screen.getByText(/99/)).toBeInTheDocument()
    })
  })

  describe('format options', () => {
    it('shows without decimals when decimals=0', () => {
      render(<MoneyAmount {...noDecimalsMoneyAmountProps} />)
      expect(screen.getByText(/1[.,]000/)).toBeInTheDocument()
    })

    it('hides currency symbol when showCurrency=false', () => {
      render(<MoneyAmount {...noCurrencySymbolProps} />)
      expect(screen.getByText(/3[.,]500/)).toBeInTheDocument()
    })
  })

  describe('HTML attributes', () => {
    it('accepts additional className', () => {
      render(<MoneyAmount {...defaultMoneyAmountProps} className="custom" />)
      expect(screen.getByText(/1/)).toHaveClass('custom')
    })
  })
})
