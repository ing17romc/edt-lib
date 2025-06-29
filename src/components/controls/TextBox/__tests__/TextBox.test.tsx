import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextBox from '..';
import { 
  mockBaseProps, 
  mockFullProps, 
  mockDisabledProps, 
  mockReadOnlyProps, 
  mockPasswordProps 
} from './mocks';

describe('TextBox Component', () => {
  test('renders with required props', () => {
    render(<TextBox {...mockBaseProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', mockBaseProps.id);
    expect(input).toHaveValue(mockBaseProps.value);
  });

  test('renders with all props', () => {
    render(<TextBox {...mockFullProps} />);
    
    // Verificar títulos
    if (mockFullProps.titleTop) {
      expect(screen.getByText(mockFullProps.titleTop)).toBeInTheDocument();
    }
    if (mockFullProps.titleBottom) {
      expect(screen.getByText(mockFullProps.titleBottom)).toBeInTheDocument();
    }
    
    // Verificar placeholder
    const placeholder = mockFullProps.placeholder || '';
    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    
    // Verificar atributos
    expect(input).toHaveAttribute('required');
    if (mockFullProps.size) {
      expect(input).toHaveStyle(`width: ${mockFullProps.size}px`);
    }
  });

  test('handles events correctly', () => {
    // Crear mocks limpios para cada prueba
    const mockEventChange = jest.fn();
    const mockEventFocus = jest.fn();
    const mockEventBlur = jest.fn();
    const mockEventKeyDown = jest.fn();
    
    render(
      <TextBox 
        {...mockBaseProps} 
        eventChange={mockEventChange}
        eventFocus={mockEventFocus}
        eventBlur={mockEventBlur}
        eventKeyDown={mockEventKeyDown}
      />
    );
    
    const input = screen.getByRole('textbox');
    
    // Simular eventos
    fireEvent.change(input, { target: { value: 'new value' } });
    fireEvent.focus(input);
    fireEvent.blur(input);
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    // Verificar que los manejadores fueron llamados
    expect(mockEventChange).toHaveBeenCalledTimes(1);
    expect(mockEventFocus).toHaveBeenCalledTimes(1);
    expect(mockEventBlur).toHaveBeenCalledTimes(1);
    expect(mockEventKeyDown).toHaveBeenCalledTimes(1);
  });

  test('renders disabled state correctly', () => {
    render(<TextBox {...mockDisabledProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  test('renders read-only state correctly', () => {
    render(<TextBox {...mockReadOnlyProps} />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readonly');
  });

  test('renders password type correctly', () => {
    render(<TextBox {...mockPasswordProps} />);
    // Usar getByDisplayValue ya que el campo de contraseña no es un textbox
    const input = screen.getByDisplayValue(mockPasswordProps.value);
    expect(input).toHaveAttribute('type', 'password');
  });

  test('prevents copy when noCopy is true', () => {
    const { container } = render(
      <TextBox 
        {...mockBaseProps} 
        noCopy={true} 
        value="No se puede copiar" 
      />
    );
    const input = container.querySelector('input');
    if (!input) throw new Error('Input element not found');
    
    // Crear un evento de copia real
    const copyEvent = new Event('copy', { bubbles: true });
    Object.defineProperty(copyEvent, 'target', { value: input, writable: false });
    
    const preventDefaultSpy = jest.spyOn(copyEvent, 'preventDefault');
    
    // Disparar el evento directamente en el input
    input.dispatchEvent(copyEvent);
    
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  test('prevents paste when noPaste is true', () => {
    const { container } = render(
      <TextBox 
        {...mockBaseProps} 
        noPaste={true}
        value=""
      />
    );
    const input = container.querySelector('input');
    if (!input) throw new Error('Input element not found');
    
    // Crear un evento de pegado real
    const pasteEvent = new Event('paste', { bubbles: true });
    Object.defineProperty(pasteEvent, 'target', { value: input, writable: false });
    
    const preventDefaultSpy = jest.spyOn(pasteEvent, 'preventDefault');
    
    // Disparar el evento directamente en el input
    input.dispatchEvent(pasteEvent);
    
    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
