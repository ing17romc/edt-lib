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
    (defaultTestProps.onChange as jest.Mock).mockClear();
  });

  it('se renderiza correctamente con opciones', () => {
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

  it('muestra la etiqueta correctamente', () => {
    render(<Selector {...defaultTestProps} />);
    const labelElement = screen.getByText(mockLabel);
    expect(labelElement).toBeInTheDocument();
  });

  it('maneja el cambio de selección', () => {
    render(<Selector {...defaultTestProps} />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '2' } });
    expect(defaultTestProps.onChange).toHaveBeenCalledTimes(1);
    expect(selectElement).toHaveValue('2');
  });

  it('muestra el estado de error cuando se proporciona', () => {
    render(<Selector {...defaultTestProps} error errorMessage={mockErrorMessage} />);
    const selectElement = screen.getByRole('combobox');
    const errorElement = screen.getByText(mockErrorMessage);
    expect(selectElement).toHaveClass('selector--error');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('helperText--error');
  });

  it('muestra el texto de ayuda cuando se proporciona', () => {
    render(<Selector {...defaultTestProps} helperText={mockHelperText} />);
    const helperTextElement = screen.getByText(mockHelperText);
    expect(helperTextElement).toBeInTheDocument();
  });

  it('se deshabilita cuando loading es true', () => {
    render(<Selector {...defaultTestProps} loading />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
    const loadingSpinner = document.querySelector('.selectorLoadingSpinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('se deshabilita cuando disabled es true', () => {
    render(<Selector {...defaultTestProps} disabled />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
  });

  it('acepta un valor por defecto', () => {
    const defaultValue = '2';
    render(<Selector {...defaultTestProps} defaultValue={defaultValue} />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue(defaultValue);
  });

  it('acepta un valor controlado', () => {
    const value = '3';
    render(<Selector {...defaultTestProps} value={value} readOnly />);
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue(value);
  });

  it('muestra el placeholder cuando se proporciona', () => {
    render(<Selector {...defaultTestProps} placeholder={mockPlaceholder} />);
    const optionElement = screen.getByRole('option', { name: mockPlaceholder });
    expect(optionElement).toBeInTheDocument();
    expect(optionElement).toHaveValue('');
    expect(optionElement).toBeDisabled();
  });
});
