import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DatePicker from './index';

describe('DatePicker Component', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
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
    render(
      <DatePicker
        id="date-picker"
        title="Fecha"
        value=""
        eventChange={mockOnChange}
        readOnly
      />
    );

    const monthSelect = screen.getByLabelText('Mes');

    fireEvent.change(monthSelect, { target: { value: '1' } });
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('handles required state correctly', () => {
    render(
      <DatePicker
        id="date-picker"
        title="Fecha"
        value=""
        eventChange={mockOnChange}
        required
      />
    );

    const monthSelect = screen.getByLabelText('Mes');

    expect(monthSelect).toBeRequired();
  });

  test('handles initial value correctly', () => {
    render(
      <DatePicker
        id="date-picker"
        title="Fecha"
        value="1/15/2025"
        eventChange={mockOnChange}
      />
    );

    const monthSelect = screen.getByLabelText('Mes');

    expect(monthSelect).toHaveValue('1');
  });
});
