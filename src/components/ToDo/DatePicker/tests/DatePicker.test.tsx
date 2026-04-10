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
  describe('basic rendering', () => {
    it('renders the input button', () => {
      render(<DatePicker {...defaultDatePickerProps} />)
      expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument()
    })

    it('shows the default placeholder', () => {
      render(<DatePicker {...defaultDatePickerProps} />)
      expect(screen.getByText('DD/MM/YYYY')).toBeInTheDocument()
    })

    it('shows the label when defined', () => {
      render(<DatePicker {...withLabelProps} />)
      expect(screen.getByText('Date of birth')).toBeInTheDocument()
    })

    it('shows the formatted date when it has a value', () => {
      render(<DatePicker {...withValueProps} />)
      expect(screen.getByText('15/06/2024')).toBeInTheDocument()
    })
  })

  describe('calendar opening', () => {
    it('opens the calendar on click', () => {
      render(<DatePicker {...defaultDatePickerProps} />)
      fireEvent.click(screen.getByRole('button'))
      expect(screen.getByRole('dialog')).toBeInTheDocument()
    })

    it('shows month navigation buttons', () => {
      render(<DatePicker {...defaultDatePickerProps} />)
      fireEvent.click(screen.getByRole('button'))
      expect(screen.getByLabelText('Previous month')).toBeInTheDocument()
      expect(screen.getByLabelText('Next month')).toBeInTheDocument()
    })
  })

  describe('date selection', () => {
    it('calls onChange when selecting a date', () => {
      render(<DatePicker value="2024-06-15" onChange={mockOnChange} />)
      fireEvent.click(screen.getByRole('button'))
      fireEvent.click(screen.getByLabelText('2024-06-10'))
      expect(mockOnChange).toHaveBeenCalledWith('2024-06-10')
    })

    it('closes the calendar after selecting', () => {
      render(<DatePicker value="2024-06-15" onChange={mockOnChange} />)
      fireEvent.click(screen.getByRole('button'))
      fireEvent.click(screen.getByLabelText('2024-06-10'))
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  describe('min/max', () => {
    it('disables days outside the range', () => {
      render(<DatePicker {...withMinMaxProps} />)
      fireEvent.click(screen.getByRole('button', { expanded: false }))
      expect(screen.getByLabelText('2024-06-05')).toBeDisabled()
      expect(screen.getByLabelText('2024-06-26')).toBeDisabled()
    })
  })

  describe('disabled', () => {
    it('does not open the calendar when disabled', () => {
      render(<DatePicker {...disabledDatePickerProps} />)
      fireEvent.click(screen.getByRole('button'))
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('the button is disabled', () => {
      render(<DatePicker {...disabledDatePickerProps} />)
      expect(screen.getByRole('button')).toBeDisabled()
    })
  })
})
