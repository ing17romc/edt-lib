import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentSize } from '../../types';
import TextBox from '../';
import { 
  mockTextBoxProps, 
  mockDisabledTextBoxProps, 
  mockErrorTextBoxProps, 
  mockFullWidthTextBoxProps,
  mockWithAdornmentsTextBoxProps
} from './mocks';

describe('TextBox Component', () => {
  it('se renderiza correctamente con las propiedades predeterminadas', () => {
    render(<TextBox label="Campo de prueba" />);
    const input = screen.getByLabelText('Campo de prueba');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('aplica la clase personalizada cuando se proporciona', () => {
    render(<TextBox {...mockTextBoxProps} />);
    const container = screen.getByTestId('textbox').parentElement;
    expect(container).toHaveClass('test-class');
  });

  it('maneja el evento onChange correctamente', () => {
    const handleChange = jest.fn();
    render(
      <TextBox 
        label="Campo de prueba" 
        onChange={handleChange} 
      />
    );
    const input = screen.getByLabelText('Campo de prueba');
    fireEvent.change(input, { target: { value: 'nuevo valor' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('se deshabilita correctamente cuando la propiedad disabled es true', () => {
    render(<TextBox {...mockDisabledTextBoxProps} />);
    const input = screen.getByLabelText('Campo deshabilitado') as HTMLInputElement;
    expect(input).toBeDisabled();
    expect(input.value).toBe('No se puede editar');
  });

  it('muestra el mensaje de error cuando la propiedad error es true', () => {
    render(<TextBox {...mockErrorTextBoxProps} />);
    const errorText = screen.getByText('Este campo es requerido');
    const input = screen.getByLabelText('Campo con error');
    
    expect(errorText).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('ocupa todo el ancho disponible cuando fullWidth es true', () => {
    render(<TextBox {...mockFullWidthTextBoxProps} />);
    const container = screen.getByLabelText('Campo de ancho completo').closest('.textBoxContainer');
    expect(container).toHaveStyle('width: 100%');
  });

  it('muestra los adornos cuando se proporcionan', () => {
    render(<TextBox {...mockWithAdornmentsTextBoxProps} />);
    const startAdornment = screen.getByText('🔍');
    const endAdornment = screen.getByText('✓');
    
    expect(startAdornment).toBeInTheDocument();
    expect(endAdornment).toBeInTheDocument();
  });

  it('aplica las diferentes variantes correctamente', () => {
    const { rerender } = render(
      <TextBox 
        label="Outlined" 
        variant="outlined" 
        data-testid="textbox-variant" 
      />
    );
    
    let inputWrapper = screen.getByTestId('textbox-variant').parentElement;
    expect(inputWrapper).toHaveClass('variant-outlined');
    
    rerender(
      <TextBox 
        label="Filled" 
        variant="filled" 
        data-testid="textbox-variant" 
      />
    );
    
    inputWrapper = screen.getByTestId('textbox-variant').parentElement;
    expect(inputWrapper).toHaveClass('variant-filled');
    
    rerender(
      <TextBox 
        label="Standard" 
        variant="standard" 
        data-testid="textbox-variant" 
      />
    );
    
    inputWrapper = screen.getByTestId('textbox-variant').parentElement;
    expect(inputWrapper).toHaveClass('variant-standard');
  });

  it('aplica los diferentes tamaños correctamente', () => {
    const { rerender } = render(
      <TextBox 
        label="Small" 
        size={ComponentSize.SMALL} 
        data-testid="textbox-size" 
      />
    );
    
    let inputWrapper = screen.getByTestId('textbox-size').parentElement;
    expect(inputWrapper).toHaveClass('size-small');
    
    rerender(
      <TextBox 
        label="Large" 
        size={ComponentSize.LARGE} 
        data-testid="textbox-size" 
      />
    );
    
    inputWrapper = screen.getByTestId('textbox-size').parentElement;
    expect(inputWrapper).toHaveClass('size-large');
  });

  it('es accesible con un nombre accesible', () => {
    render(<TextBox label="Campo accesible" aria-label="Campo para búsqueda" />);
    const input = screen.getByRole('textbox', { name: /campo para búsqueda/i });
    expect(input).toBeInTheDocument();
  });
});
