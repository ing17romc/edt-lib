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
    const daySelect = screen.getByLabelText('Día');
    const yearSelect = screen.getByLabelText('Año');

    expect(monthSelect).toBeInTheDocument();
    expect(daySelect).toBeInTheDocument();
    expect(yearSelect).toBeInTheDocument();
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
    const daySelect = screen.getByLabelText('Día');
    const yearSelect = screen.getByLabelText('Año');

    fireEvent.change(monthSelect, { target: { value: '1' } });
    fireEvent.change(daySelect, { target: { value: '15' } });
    fireEvent.change(yearSelect, { target: { value: '2025' } });

    expect(mockOnChange).toHaveBeenCalledWith('1/15/2025');
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
    const daySelect = screen.getByLabelText('Día');
    const yearSelect = screen.getByLabelText('Año');

    expect(monthSelect).toBeDisabled();
    expect(daySelect).toBeDisabled();
    expect(yearSelect).toBeDisabled();
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
    const daySelect = screen.getByLabelText('Día');
    const yearSelect = screen.getByLabelText('Año');

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
    const daySelect = screen.getByLabelText('Día');
    const yearSelect = screen.getByLabelText('Año');

    expect(monthSelect).toBeRequired();
    expect(daySelect).toBeRequired();
    expect(yearSelect).toBeRequired();
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
    const daySelect = screen.getByLabelText('Día');
    const yearSelect = screen.getByLabelText('Año');

    expect(monthSelect).toHaveValue('1');
    expect(daySelect).toHaveValue('15');
    expect(yearSelect).toHaveValue('2025');
  });
});
