import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ListControl from '../index'
import {
  defaultListControlProps,
  itemsWithSelection,
  mockOnSelect,
} from './mocks'

beforeEach(() => {
  mockOnSelect.mockClear()
})

describe('ListControl', () => {
  describe('renderizado básico', () => {
    it('renderiza la lista con role="listbox"', () => {
      render(<ListControl {...defaultListControlProps} />)
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    it('renderiza todos los elementos', () => {
      render(<ListControl {...defaultListControlProps} />)
      expect(screen.getByText('Elemento 1')).toBeInTheDocument()
      expect(screen.getByText('Elemento 2')).toBeInTheDocument()
      expect(screen.getByText('Elemento 3')).toBeInTheDocument()
    })

    it('muestra la descripción cuando está definida', () => {
      render(<ListControl {...defaultListControlProps} />)
      expect(screen.getByText('Descripción del elemento 2')).toBeInTheDocument()
    })
  })

  describe('selección', () => {
    it('llama onSelect al hacer click en un elemento', () => {
      render(<ListControl {...defaultListControlProps} />)
      fireEvent.click(screen.getByText('Elemento 1'))
      expect(mockOnSelect).toHaveBeenCalledWith('item1')
    })

    it('el elemento seleccionado tiene aria-selected="true"', () => {
      render(<ListControl items={itemsWithSelection} />)
      const options = screen.getAllByRole('option')
      expect(options[0]).toHaveAttribute('aria-selected', 'true')
    })

    it('no llama onSelect en elemento deshabilitado', () => {
      render(<ListControl items={itemsWithSelection} onSelect={mockOnSelect} />)
      fireEvent.click(screen.getByText('Deshabilitado'))
      expect(mockOnSelect).not.toHaveBeenCalled()
    })
  })

  describe('multiSelect', () => {
    it('tiene aria-multiselectable="true" cuando multiSelect=true', () => {
      render(<ListControl {...defaultListControlProps} multiSelect />)
      expect(screen.getByRole('listbox')).toHaveAttribute('aria-multiselectable', 'true')
    })
  })
})
