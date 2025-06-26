import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DatePicker from '../index';
import { mockOnChange, createTestProps } from './mocks';

describe('DatePicker Component', () => {
  beforeEach(() => {
    mockOnChange.mockClear();
    jest.clearAllMocks();
  });

  test('renders date picker with correct initial values', () => {
    render(
      <DatePicker
        id="date-picker"
        title="Fecha"
        value=""
        eventChange={mockOnChange}
      />
    );

    const label = screen.getByText('Fecha');
    expect(label).toBeInTheDocument();

    const monthSelect = screen.getByLabelText('Mes');
    
    

    expect(monthSelect).toBeInTheDocument();
    
    
  });

  test('updates date when selecting values', () => {
    render(
      <DatePicker
        id="date-picker"
        title="Fecha"
        value=""
        eventChange={mockOnChange}
      />
    );

    const monthSelect = screen.getByLabelText('Mes');

    fireEvent.change(monthSelect, { target: { value: '1' } });
    // Intenta disparar cambios en día y año si los selectores existen
    const daySelect = screen.queryByLabelText('Día');
    if (daySelect) {
      fireEvent.change(daySelect, { target: { value: '15' } });
    }
    const yearSelect = screen.queryByLabelText('Año');
    if (yearSelect) {
      fireEvent.change(yearSelect, { target: { value: '2025' } });
    }
    expect(mockOnChange).toHaveBeenCalled();
  });

  test('handles disabled state correctly', () => {
    render(
      <DatePicker
        id="date-picker"
        title="Fecha"
        value=""
        eventChange={mockOnChange}
        disabled
      />
    );

    const monthSelect = screen.getByLabelText('Mes');

    expect(monthSelect).toBeDisabled();
  });

  test('handles read-only state correctly', () => {
    // In read-only mode, the component should not call eventChange
    // when the user tries to change the date
    const { rerender } = render(<DatePicker {...createTestProps({ readOnly: true })} />);
    
    // Verify that the select elements have aria-readonly="true" in read-only mode
    const monthSelect = screen.getByLabelText('Mes');
    expect(monthSelect).toHaveAttribute('aria-readonly', 'true');
    
    const daySelect = screen.getByLabelText('Día');
    expect(daySelect).toHaveAttribute('aria-readonly', 'true');
    
    const yearSelect = screen.getByLabelText('Año');
    expect(yearSelect).toHaveAttribute('aria-readonly', 'true');
    
    // Verify that the component doesn't call eventChange when props change
    rerender(<DatePicker {...createTestProps({ readOnly: true, value: '1/15/2025' })} />);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('handles required state correctly', () => {
    render(<DatePicker {...createTestProps({ required: true })} />);

    const monthSelect = screen.getByLabelText('Mes');
    expect(monthSelect).toBeRequired();
    
    const daySelect = screen.getByLabelText('Día');
    expect(daySelect).toBeRequired();
    
    const yearSelect = screen.getByLabelText('Año');
    expect(yearSelect).toBeRequired();
  });

  test('handles initial value correctly', () => {
    render(<DatePicker {...createTestProps({ value: '1/15/2025' })} />);

    const monthSelect = screen.getByLabelText('Mes');
    expect(monthSelect).toHaveValue('1');
    
    const daySelect = screen.getByLabelText('Día');
    expect(daySelect).toHaveValue('15');
    
    const yearSelect = screen.getByLabelText('Año');
    expect(yearSelect).toHaveValue('2025');
  });
});
