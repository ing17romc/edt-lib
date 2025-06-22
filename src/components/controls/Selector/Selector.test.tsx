import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Selector from './index';

describe('Selector Component', () => {
  const mockId = 'test-selector';
  const mockTitleTop = 'Título superior';
  const mockTitleBottom = 'Título inferior';
  const mockValue = 'option2';
  const mockOptions = [
    { value: 'option1', label: 'Opción 1' },
    { value: 'option2', label: 'Opción 2' },
    { value: 'option3', label: 'Opción 3' }
  ];

  const mockProps = {
    id: mockId,
    titleTop: mockTitleTop,
    titleBottom: mockTitleBottom,
    value: mockValue,
    options: mockOptions
  };

  test('renders with required props', () => {
    render(
      <Selector
        id={mockId}
        options={mockOptions}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('id', mockId);
  });

  test('renders with titles', () => {
    render(
      <Selector {...mockProps} />
    );

    const titleTop = screen.getByText(mockTitleTop);
    expect(titleTop).toBeInTheDocument();

    const titleBottom = screen.getByText(mockTitleBottom);
    expect(titleBottom).toBeInTheDocument();
  });

  test('calls eventChange when option is selected', () => {
    const mockEventChange = jest.fn();

    render(
      <Selector
        {...mockProps}
        eventChange={mockEventChange}
      />
    );

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'option3' } });
    expect(mockEventChange).toHaveBeenCalledTimes(1);
  });

  test('handles disabled state', () => {
    render(
      <Selector
        {...mockProps}
        disabled={true}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toHaveAttribute('aria-disabled', 'true');
    expect(select).toHaveClass('DISABLED');
  });

  test('handles read-only state', () => {
    render(
      <Selector
        {...mockProps}
        readOnly={true}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeDisabled();
    expect(select).toHaveAttribute('aria-readonly', 'true');
    expect(select).toHaveClass('READ_ONLY');
  });

  test('handles required state', () => {
    render(
      <Selector
        {...mockProps}
        required={true}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toBeRequired();
    expect(select).toHaveAttribute('aria-required', 'true');
  });

  test('renders options correctly', () => {
    render(
      <Selector {...mockProps} />
    );

    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(mockOptions.length);

    mockOptions.forEach((option, index) => {
      expect(options[index]).toHaveValue(option.value);
      expect(options[index]).toHaveTextContent(option.label);
    });
  });

  test('has correct aria-label', () => {
    render(
      <Selector
        {...mockProps}
        titleTop={'Selector de opciones'}
      />
    );

    const select = screen.getByRole('combobox');
    expect(select).toHaveAttribute('aria-label', 'Selector de opciones');
  });
});
