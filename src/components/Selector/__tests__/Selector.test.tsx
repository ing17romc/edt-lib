import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Selector } from '..';
import { mockOptions } from './mocks';

describe('Selector', () => {
  it('se renderiza correctamente con opciones', () => {
    render(<Selector options={mockOptions} label="Selecciona una opción" />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    // Verificar que la primera opción está seleccionada por defecto
    expect(selectElement).toHaveValue(mockOptions[0].value.toString());
    
    // Verificar que las opciones se rendericen correctamente
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
    const labelText = 'Selecciona una opción';
    render(<Selector options={mockOptions} label={labelText} />);
    
    const labelElement = screen.getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });

  it('maneja el cambio de selección', () => {
    const handleChange = jest.fn();
    render(<Selector options={mockOptions} onChange={handleChange} />);
    
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '2' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(selectElement).toHaveValue('2');
  });

  it('muestra el estado de error cuando se proporciona', () => {
    const errorMessage = 'Campo requerido';
    render(
      <Selector 
        options={mockOptions} 
        error 
        errorMessage={errorMessage} 
      />
    );
    
    const selectElement = screen.getByRole('combobox');
    const errorElement = screen.getByText(errorMessage);
    
    expect(selectElement).toHaveClass('selector--error');
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('helperText--error');
  });

  it('muestra el texto de ayuda cuando se proporciona', () => {
    const helperText = 'Selecciona una opción de la lista';
    render(<Selector options={mockOptions} helperText={helperText} />);
    
    const helperTextElement = screen.getByText(helperText);
    expect(helperTextElement).toBeInTheDocument();
  });

  it('se deshabilita cuando loading es true', () => {
    render(<Selector options={mockOptions} loading />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
    
    const loadingSpinner = document.querySelector('.selectorLoadingSpinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  it('se deshabilita cuando disabled es true', () => {
    render(<Selector options={mockOptions} disabled />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeDisabled();
  });

  it('acepta un valor por defecto', () => {
    const defaultValue = '2';
    render(<Selector options={mockOptions} defaultValue={defaultValue} />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue(defaultValue);
  });

  it('acepta un valor controlado', () => {
    const value = '3';
    render(<Selector options={mockOptions} value={value} readOnly />);
    
    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveValue(value);
  });

  it('muestra el placeholder cuando se proporciona', () => {
    const placeholder = 'Selecciona una opción';
    render(<Selector options={mockOptions} placeholder={placeholder} />);
    
    const optionElement = screen.getByRole('option', { name: placeholder });
    expect(optionElement).toBeInTheDocument();
    expect(optionElement).toHaveValue('');
    expect(optionElement).toBeDisabled();
  });
});
