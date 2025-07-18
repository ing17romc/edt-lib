import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { 
  DefaultCheckButton, 
  ControlledCheckButton, 
  DisabledCheckButton, 
  CheckedCheckButton, 
  CustomClassCheckButton,
  LargeCheckButton,
  MediumCheckButton,
  SmallCheckButton,
  LongLabelCheckButton
} from './mocks';

describe('CheckButton', () => {
  it('se renderiza correctamente con la etiqueta proporcionada', () => {
    render(<DefaultCheckButton label="Test Checkbox" />);
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('llama a onChange cuando se hace clic', () => {
    const handleChange = jest.fn();
    render(<DefaultCheckButton label="Click me" onChange={handleChange} />);
    
    const checkbox = screen.getByLabelText('Click me');
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('no responde al clic cuando está deshabilitado', () => {
    const handleChange = jest.fn();
    render(<DisabledCheckButton onChange={handleChange} />);
    
    const checkbox = screen.getByLabelText('Opción deshabilitada');
    fireEvent.click(checkbox);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('muestra el estado inicial como marcado cuando checked es true', () => {
    render(<CheckedCheckButton />);
    const checkbox = screen.getByLabelText('Opción seleccionada') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('aplica la clase personalizada cuando se proporciona', () => {
    render(<CustomClassCheckButton />);
    const label = screen.getByText('Con clase personalizada').closest('label');
    expect(label).toHaveClass('custom-checkbox-class');
  });

  it('aplica la clase de tamaño grande correctamente', () => {
    render(<LargeCheckButton />);
    const label = screen.getByText('Opción grande').closest('label');
    expect(label).toHaveClass('check-button--large');
  });

  it('aplica la clase de tamaño mediano correctamente', () => {
    render(<MediumCheckButton />);
    const label = screen.getByText('Opción mediana').closest('label');
    expect(label).toHaveClass('check-button');
    // Verifica que no tenga las clases de otros tamaños
    expect(label).not.toHaveClass('check-button--small');
    expect(label).not.toHaveClass('check-button--large');
  });

  it('aplica la clase de tamaño pequeño correctamente', () => {
    render(<SmallCheckButton />);
    const label = screen.getByText('Opción pequeña').closest('label');
    expect(label).toHaveClass('check-button--small');
  });

  it('aplica el tamaño mediano por defecto cuando no se especifica', () => {
    render(<DefaultCheckButton label="Tamaño predeterminado" />);
    const label = screen.getByText('Tamaño predeterminado').closest('label');
    expect(label).toHaveClass('check-button');
    expect(label).not.toHaveClass('check-button--small');
    expect(label).not.toHaveClass('check-button--large');
  });

  it('maneja correctamente etiquetas largas', () => {
    render(<LongLabelCheckButton />);
    expect(screen.getByText(/Esta es una etiqueta muy larga/)).toBeInTheDocument();
  });

  it('actualiza el estado cuando se usa como componente controlado', () => {
    const { rerender } = render(<ControlledCheckButton />);
    const checkbox = screen.getByLabelText('Opción de ejemplo') as HTMLInputElement;
    
    // Estado inicial
    expect(checkbox.checked).toBe(false);
    
    // Simular clic
    fireEvent.click(checkbox);
    
    // Volver a renderizar con el nuevo estado
    rerender(<ControlledCheckButton checked={true} />);
    
    // Verificar que el estado se actualizó
    expect(checkbox.checked).toBe(true);
  });
});
