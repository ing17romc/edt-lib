import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Selector } from '..';
import {
  mockOptions,
  defaultTestProps,
  mockLabel,
  mockErrorMessage,
  mockHelperText,
  mockPlaceholder,
} from './mocks';

describe('Selector', () => {
  beforeEach(() => {
    (defaultTestProps.onChange as ReturnType<typeof vi.fn>).mockClear();
  });

  it('renders correctly with options', () => {
    render(<Selector {...defaultTestProps} />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue(mockOptions[0].value.toString());
    
    mockOptions.forEach(option => {
      const optionElement = screen.getByRole('option', { name: option.label });
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveValue(option.value.toString());
      if (option.disabled) {
        expect(optionElement).toBeDisabled();
      }
    });
  });

  it('shows the label correctly', () => {
    render(<Selector {...defaultTestProps} />);
    const labelElement = screen.getByText(mockLabel);
    expect(labelElement).toBeInTheDocument();
  });

  it('handles selection change', () => {
    render(<Selector {...defaultTestProps} />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '2' } });
    expect(defaultTestProps.onChange).toHaveBeenCalledTimes(1);
    expect(selectElement).toHaveValue('2');
  });

  it('shows the error state when provided', () => {
    render(<Selector {...defaultTestProps} error errorMessage={mockErrorMessage} />);
    const selectElement = screen.getByRole('combobox');
    const errorElement = screen.getByText(mockErrorMessage);
    expect(selectElement).toHaveClass('selector--error');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('helperText--error');
  });

  it('shows the helper text when provided', () => {
    render(<Selector {...defaultTestProps} helperText={mockHelperText} />);
    const helperTextElement = screen.getByText(mockHelperText);
    expect(helperTextElement).toBeInTheDocument();
  });

  it('is disabled when loading is true', () => {
    render(<Selector {...defaultTestProps} loading />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
    const loadingSpinner = document.querySelector('.selectorLoadingSpinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('is disabled when disabled is true', () => {
    render(<Selector {...defaultTestProps} disabled />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
  });

  it('accepts a default value', () => {
    const defaultValue = '2';
    render(<Selector {...defaultTestProps} defaultValue={defaultValue} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue(defaultValue);
  });

  it('accepts a controlled value', () => {
    const value = '3';
    render(<Selector {...defaultTestProps} value={value} readOnly />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue(value);
  });

  it('shows the placeholder when provided', () => {
    render(<Selector {...defaultTestProps} placeholder={mockPlaceholder} />);
    const optionElement = screen.getByRole('option', { name: mockPlaceholder });
    expect(optionElement).toBeInTheDocument();
    expect(optionElement).toHaveValue('');
    expect(optionElement).toBeDisabled();
  });
});
