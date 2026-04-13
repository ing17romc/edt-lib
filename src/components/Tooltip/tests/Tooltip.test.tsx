import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Tooltip from '../index'
import {
  defaultTooltipProps,
  bottomTooltipProps,
  leftTooltipProps,
  rightTooltipProps,
  disabledTooltipProps,
} from './mocks'

describe('Tooltip', () => {
  describe('basic rendering', () => {
    it('renders the child element', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument()
    })

    it('does not show the tooltip by default', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  })

  describe('hover interaction', () => {
    it('shows the tooltip on hover', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
      expect(screen.getByRole('tooltip')).toHaveTextContent('Additional information')
    })

    it('hides the tooltip on mouse leave', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      const trigger = screen.getByRole('button')
      fireEvent.mouseEnter(trigger)
      fireEvent.mouseLeave(trigger)
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('shows the tooltip on focus', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      fireEvent.focus(screen.getByRole('button').parentElement!)
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })

  describe('placements', () => {
    it('applies top class by default', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip').className).toMatch(/tooltip--top/)
    })

    it('applies bottom class', () => {
      render(<Tooltip {...bottomTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip').className).toMatch(/tooltip--bottom/)
    })

    it('applies left class', () => {
      render(<Tooltip {...leftTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip').className).toMatch(/tooltip--left/)
    })

    it('applies right class', () => {
      render(<Tooltip {...rightTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip').className).toMatch(/tooltip--right/)
    })
  })

  describe('disabled', () => {
    it('does not show the tooltip when disabled', () => {
      render(<Tooltip {...disabledTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('still renders the child element when disabled', () => {
      render(<Tooltip {...disabledTooltipProps} />)
      expect(screen.getByRole('button', { name: 'Disabled' })).toBeInTheDocument()
    })
  })
})
