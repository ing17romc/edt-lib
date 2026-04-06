import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Tabs from '../index'
import {
  defaultTabsProps,
  tabsWithDisabled,
  controlledTabsProps,
  mockOnChange,
} from './mocks'

beforeEach(() => {
  mockOnChange.mockClear()
})

describe('Tabs', () => {
  describe('renderizado básico', () => {
    it('renderiza la lista de pestañas', () => {
      render(<Tabs {...defaultTabsProps} />)
      expect(screen.getByRole('tablist')).toBeInTheDocument()
    })

    it('renderiza todas las pestañas', () => {
      render(<Tabs {...defaultTabsProps} />)
      expect(screen.getByRole('tab', { name: 'Pestaña 1' })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'Pestaña 2' })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: 'Pestaña 3' })).toBeInTheDocument()
    })

    it('muestra el contenido del primer tab por defecto', () => {
      render(<Tabs {...defaultTabsProps} />)
      expect(screen.getByText('Contenido de pestaña 1')).toBeInTheDocument()
    })

    it('el primer tab tiene aria-selected="true" por defecto', () => {
      render(<Tabs {...defaultTabsProps} />)
      expect(screen.getByRole('tab', { name: 'Pestaña 1' })).toHaveAttribute('aria-selected', 'true')
    })
  })

  describe('navegación', () => {
    it('cambia el contenido al hacer click en un tab', () => {
      render(<Tabs {...defaultTabsProps} />)
      fireEvent.click(screen.getByRole('tab', { name: 'Pestaña 2' }))
      expect(screen.getByText('Contenido de pestaña 2')).toBeInTheDocument()
    })

    it('actualiza aria-selected al cambiar de tab', () => {
      render(<Tabs {...defaultTabsProps} />)
      fireEvent.click(screen.getByRole('tab', { name: 'Pestaña 2' }))
      expect(screen.getByRole('tab', { name: 'Pestaña 2' })).toHaveAttribute('aria-selected', 'true')
      expect(screen.getByRole('tab', { name: 'Pestaña 1' })).toHaveAttribute('aria-selected', 'false')
    })
  })

  describe('tab deshabilitado', () => {
    it('no cambia el contenido al hacer click en tab deshabilitado', () => {
      render(<Tabs tabs={tabsWithDisabled} />)
      fireEvent.click(screen.getByRole('tab', { name: 'Deshabilitado' }))
      expect(screen.queryByText('Contenido 2')).not.toBeInTheDocument()
    })
  })

  describe('modo controlado', () => {
    it('llama onChange al cambiar de tab', () => {
      render(<Tabs {...controlledTabsProps} />)
      fireEvent.click(screen.getByRole('tab', { name: 'Pestaña 2' }))
      expect(mockOnChange).toHaveBeenCalledWith('tab2')
    })
  })

  describe('panel', () => {
    it('el panel tiene aria-labelledby apuntando al tab activo', () => {
      render(<Tabs {...defaultTabsProps} />)
      const panel = screen.getByRole('tabpanel')
      expect(panel).toHaveAttribute('aria-labelledby', 'tab-tab1')
    })
  })
})
