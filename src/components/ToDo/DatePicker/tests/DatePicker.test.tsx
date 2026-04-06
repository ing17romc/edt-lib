import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DatePicker from '../index'
import {
  defaultDatePickerProps,
  withValueProps,
  withLabelProps,
  withMinMaxProps,
  disabledDatePickerProps,
  mockOnChange,
} from './mocks'

beforeEach(() => {
  mockOnChange.mockClear()
})

describe('DatePicker', () => {
  describe('renderizado básico', () => {
    it('renderiza el botón de entrada', () => {
      render(<DatePicker {...defaultDatePickerProps} />)
      expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument()
    })

    it('muestra el placeholder por defecto', () => {
      render(<DatePicker {...defaultDatePickerProps} />)
      expect(screen.getByText('DD/MM/YYYY')).toBeInTheDocument()
    })

    it('muestra la etiqueta cuando está definida', () => {
      render(<DatePicker {...withLabelProps} />)
      expect(screen.getByText('Fecha de nacimiento')).toBeInTheDocument()
    })

    it('muestra la fecha formateada cuando tiene valor', () => {
      render(<DatePicker {...withValueProps} />)
      expect(screen.getByText('15/06/2024')).toBeInTheDocument()
    })
  })

  describe('apertura del calendario', () => {
    it('abre el calendario al hacer click', () => {
      render(<DatePicker {...defaultDatePickerProps} />)
      fireEvent.click(screen.getByRole('button'))
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('muestra botones de navegación de mes', () => {
      render(<DatePicker {...defaultDatePickerProps} />)
      fireEvent.click(screen.getByRole('button'))
      expect(screen.getByLabelText('Mes anterior')).toBeInTheDocument()
      expect(screen.getByLabelText('Mes siguiente')).toBeInTheDocument()
    })
  })

  describe('selección de fecha', () => {
    it('llama onChange al seleccionar una fecha', () => {
      render(<DatePicker value="2024-06-15" onChange={mockOnChange} />)
      fireEvent.click(screen.getByRole('button'))
      fireEvent.click(screen.getByLabelText('2024-06-10'))
      expect(mockOnChange).toHaveBeenCalledWith('2024-06-10')
    })

    it('cierra el calendario tras seleccionar', () => {
      render(<DatePicker value="2024-06-15" onChange={mockOnChange} />)
      fireEvent.click(screen.getByRole('button'))
      fireEvent.click(screen.getByLabelText('2024-06-10'))
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  describe('min/max', () => {
    it('deshabilita días fuera del rango', () => {
      render(<DatePicker {...withMinMaxProps} />)
      fireEvent.click(screen.getByRole('button', { expanded: false }))
      expect(screen.getByLabelText('2024-06-05')).toBeDisabled()
      expect(screen.getByLabelText('2024-06-26')).toBeDisabled()
    })
  })

  describe('disabled', () => {
    it('no abre el calendario cuando está deshabilitado', () => {
      render(<DatePicker {...disabledDatePickerProps} />)
      fireEvent.click(screen.getByRole('button'))
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('el botón está deshabilitado', () => {
      render(<DatePicker {...disabledDatePickerProps} />)
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })
})
