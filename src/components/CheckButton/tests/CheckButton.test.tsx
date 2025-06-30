import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckButton from '../index';

describe('CheckButton', () => {
  it('se renderiza correctamente', () => {
    render(<CheckButton label="Test Checkbox" />);
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('cambia de estado al hacer clic', () => {
    const handleChange = jest.fn();
    render(<CheckButton label="Click me" onChange={handleChange} />);
    
    const checkbox = screen.getByLabelText('Click me');
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('no responde al clic cuando está deshabilitado', () => {
    const handleChange = jest.fn();
    render(<CheckButton label="Disabled" disabled onChange={handleChange} />);
    
    const checkbox = screen.getByLabelText('Disabled');
    fireEvent.click(checkbox);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('muestra el estado inicial correcto', () => {
    render(<CheckButton label="Checked" checked={true} />);
    const checkbox = screen.getByLabelText('Checked') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('aplica la clase personalizada', () => {
    render(<CheckButton label="Custom Class" className="custom-class" />);
    const label = screen.getByText('Custom Class').closest('label');
    expect(label).toHaveClass('custom-class');
  });
});
