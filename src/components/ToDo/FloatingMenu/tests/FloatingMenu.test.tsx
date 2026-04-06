import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import FloatingMenu from '../index'
import {
  defaultFloatingMenuProps,
  itemsWithDisabled,
  mockOnSelect,
} from './mocks'

beforeEach(() => {
  mockOnSelect.mockClear()
})

describe('FloatingMenu', () => {
  describe('renderizado básico', () => {
    it('renderiza el trigger', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      expect(screen.getByRole('button', { name: 'Abrir menú' })).toBeInTheDocument()
    })

    it('no muestra el menú por defecto', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })

  describe('apertura y cierre', () => {
    it('muestra el menú al hacer click en el trigger', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }))
      expect(screen.getByRole('menu')).toBeInTheDocument()
    })

    it('muestra los elementos del menú al abrirse', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }))
      expect(screen.getByRole('menuitem', { name: 'Editar' })).toBeInTheDocument()
      expect(screen.getByRole('menuitem', { name: 'Eliminar' })).toBeInTheDocument()
    })

    it('cierra el menú al seleccionar un elemento', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }))
      fireEvent.click(screen.getByRole('menuitem', { name: 'Editar' }))
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })

  describe('selección', () => {
    it('llama onSelect con el key correcto', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} />)
      fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }))
      fireEvent.click(screen.getByRole('menuitem', { name: 'Editar' }))
      expect(mockOnSelect).toHaveBeenCalledWith('edit')
    })

    it('no llama onSelect en elemento deshabilitado', () => {
      render(
        <FloatingMenu
          trigger={<button type="button">Abrir</button>}
          items={itemsWithDisabled}
          onSelect={mockOnSelect}
        />
      )
      fireEvent.click(screen.getByRole('button', { name: 'Abrir' }))
      fireEvent.click(screen.getByRole('menuitem', { name: 'Acción deshabilitada' }))
      expect(mockOnSelect).not.toHaveBeenCalled()
    })
  })

  describe('disabled', () => {
    it('no abre el menú cuando disabled=true', () => {
      render(<FloatingMenu {...defaultFloatingMenuProps} disabled />)
      fireEvent.click(screen.getByRole('button', { name: 'Abrir menú' }))
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })
})
