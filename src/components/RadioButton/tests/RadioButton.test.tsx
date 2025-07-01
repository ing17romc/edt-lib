import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from '..';
import { 
  defaultProps, 
  checkedProps, 
  disabledProps, 
  customClassProps, 
  withoutLabelProps 
} from './mocks';

describe('RadioButton', () => {
  it('se renderiza correctamente con las props por defecto', () => {
    render(<RadioButton {...defaultProps} />);
    
    const radioInput = screen.getByRole('radio');
    const label = screen.getByText(defaultProps.label as string);
    
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).not.toBeChecked();
    expect(radioInput).not.toBeDisabled();
    expect(label).toBeInTheDocument();
  });
  
  it('se muestra marcado cuando la propiedad checked es true', () => {
    render(<RadioButton {...checkedProps} />);
    
    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeChecked();
  });
  
  it('se deshabilita cuando la propiedad disabled es true', () => {
    render(<RadioButton {...disabledProps} />);
    
    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeDisabled();
  });
  
  it('aplica la clase personalizada cuando se proporciona', () => {
    const { container } = render(<RadioButton {...customClassProps} />);
    
    expect(container.firstChild).toHaveClass('custom-radio-class');
  });
  
  it('llama a la función onChange cuando se hace clic', () => {
    const handleChange = jest.fn();
    render(<RadioButton {...defaultProps} onChange={handleChange} />);
    
    const radioInput = screen.getByRole('radio');
    fireEvent.click(radioInput);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(defaultProps.value);
  });
  
  it('no llama a onChange cuando está deshabilitado', () => {
    const handleChange = jest.fn();
    render(<RadioButton {...disabledProps} onChange={handleChange} />);
    
    const radioInput = screen.getByRole('radio');
    fireEvent.click(radioInput);
    
    expect(handleChange).not.toHaveBeenCalled();
  });
  
  it('se renderiza sin etiqueta cuando no se proporciona', () => {
    render(<RadioButton {...withoutLabelProps} />);
    
    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeInTheDocument();
    
    // No debería haber ninguna etiqueta de texto
    const labels = screen.queryByText(defaultProps.label as string);
    expect(labels).not.toBeInTheDocument();
  });
});
