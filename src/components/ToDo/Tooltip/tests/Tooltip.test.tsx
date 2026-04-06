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
  describe('renderizado básico', () => {
    it('renderiza el elemento hijo', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument()
    })

    it('no muestra el tooltip por defecto', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })
  })

  describe('interacción hover', () => {
    it('muestra el tooltip al hacer hover', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
      expect(screen.getByRole('tooltip')).toHaveTextContent('Información adicional')
    })

    it('oculta el tooltip al salir del hover', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      const trigger = screen.getByRole('button')
      fireEvent.mouseEnter(trigger)
      fireEvent.mouseLeave(trigger)
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('muestra el tooltip al recibir foco', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      fireEvent.focus(screen.getByRole('button').parentElement!)
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })

  describe('placements', () => {
    it('aplica clase top por defecto', () => {
      render(<Tooltip {...defaultTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip').className).toMatch(/tooltip--top/)
    })

    it('aplica clase bottom', () => {
      render(<Tooltip {...bottomTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip').className).toMatch(/tooltip--bottom/)
    })

    it('aplica clase left', () => {
      render(<Tooltip {...leftTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip').className).toMatch(/tooltip--left/)
    })

    it('aplica clase right', () => {
      render(<Tooltip {...rightTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.getByRole('tooltip').className).toMatch(/tooltip--right/)
    })
  })

  describe('disabled', () => {
    it('no muestra el tooltip cuando está deshabilitado', () => {
      render(<Tooltip {...disabledTooltipProps} />)
      fireEvent.mouseEnter(screen.getByRole('button'))
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument()
    })

    it('sigue renderizando el elemento hijo cuando está deshabilitado', () => {
      render(<Tooltip {...disabledTooltipProps} />)
      expect(screen.getByRole('button', { name: 'Disabled' })).toBeInTheDocument()
    })
  })
})
