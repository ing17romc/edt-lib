import { DatePickerProps } from '../types'

export const mockOnChange = vi.fn()

export const defaultDatePickerProps: DatePickerProps = {
  onChange: mockOnChange,
}

export const withValueProps: DatePickerProps = {
  value: '2024-06-15',
  onChange: mockOnChange,
}

export const withLabelProps: DatePickerProps = {
  label: 'Date of birth',
  value: '2024-01-01',
  onChange: mockOnChange,
}

export const withMinMaxProps: DatePickerProps = {
  value: '2024-06-15',
  min: '2024-06-10',
  max: '2024-06-25',
  onChange: mockOnChange,
}

export const disabledDatePickerProps: DatePickerProps = {
  value: '2024-06-15',
  disabled: true,
}
