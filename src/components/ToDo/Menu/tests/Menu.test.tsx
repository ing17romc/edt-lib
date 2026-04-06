import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Menu from '../index'
import {
  defaultMenuProps,
  itemsWithDivider,
  itemsWithIcons,
  mockOnSelect,
} from './mocks'

beforeEach(() => {
  mockOnSelect.mockClear()
})

describe('Menu', () => {
  describe('renderizado básico', () => {
    it('renderiza el menú con role="menu"', () => {
      render(<Menu {...defaultMenuProps} />)
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    it('renderiza todos los elementos', () => {
      render(<Menu {...defaultMenuProps} />)
      expect(screen.getByRole('menuitem', { name: 'Elemento 1' })).toBeInTheDocument()
      expect(screen.getByRole('menuitem', { name: 'Elemento 2' })).toBeInTheDocument()
      expect(screen.getByRole('menuitem', { name: 'Elemento 3' })).toBeInTheDocument()
    })
  })

  describe('interacción', () => {
    it('llama onSelect al hacer click', () => {
      render(<Menu {...defaultMenuProps} />)
      fireEvent.click(screen.getByRole('menuitem', { name: 'Elemento 1' }))
      expect(mockOnSelect).toHaveBeenCalledWith('item1')
    })

    it('no llama onSelect en elemento deshabilitado', () => {
      render(<Menu items={itemsWithIcons} onSelect={mockOnSelect} />)
      fireEvent.click(screen.getByRole('menuitem', { name: 'Deshabilitado' }))
      expect(mockOnSelect).not.toHaveBeenCalled()
    })
  })

  describe('separador', () => {
    it('renderiza el separador', () => {
      render(<Menu items={itemsWithDivider} />)
      expect(screen.getByRole('separator')).toBeInTheDocument()
    })
  })

  describe('elemento activo', () => {
    it('aplica clase active al elemento activo', () => {
      render(<Menu {...defaultMenuProps} activeKey="item1" />)
      expect(screen.getByRole('menuitem', { name: 'Elemento 1' }).className).toMatch(/item--active/)
    })
  })
})
