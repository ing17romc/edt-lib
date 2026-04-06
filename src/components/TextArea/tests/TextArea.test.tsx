import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentSize } from '../../types';
import TextArea from '../';
import { 
  mockTextAreaProps, 
  mockDisabledTextAreaProps, 
  mockErrorTextAreaProps, 
  mockFullWidthTextAreaProps,
  mockAutoResizeTextAreaProps,
  mockWithMaxLengthTextAreaProps
} from './mocks';

describe('TextArea Component', () => {
  it('se renderiza correctamente con las propiedades predeterminadas', () => {
    render(<TextArea label="Campo de prueba" />);
    const textarea = screen.getByLabelText('Campo de prueba');
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('aplica la clase personalizada cuando se proporciona', () => {
    render(<TextArea {...mockTextAreaProps} />);
    const container = screen.getByTestId('textarea').parentElement?.parentElement;
    expect(container).toHaveClass('test-class');
  });

  it('maneja el evento onChange correctamente', () => {
    const handleChange = jest.fn();
    render(
      <TextArea 
        label="Campo de prueba" 
        onChange={handleChange} 
      />
    );
    const textarea = screen.getByLabelText('Campo de prueba');
    fireEvent.change(textarea, { target: { value: 'nuevo valor' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('se deshabilita correctamente cuando la propiedad disabled es true', () => {
    render(<TextArea {...mockDisabledTextAreaProps} />);
    const textarea = screen.getByLabelText('Campo deshabilitado') as HTMLTextAreaElement;
    expect(textarea).toBeDisabled();
    expect(textarea.value).toBe('Este es un texto de ejemplo en un área de texto deshabilitada.');
  });

  it('muestra el mensaje de error cuando la propiedad error es true', () => {
    render(<TextArea {...mockErrorTextAreaProps} />);
    const errorText = screen.getByText('Este campo es requerido');
    const textarea = screen.getByLabelText('Campo con error');
    
    expect(errorText).toBeInTheDocument();
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('ocupa todo el ancho disponible cuando fullWidth es true', () => {
    render(<TextArea {...mockFullWidthTextAreaProps} />);
    const container = screen.getByLabelText('Campo de ancho completo').closest('.textAreaContainer');
    expect(container).toHaveClass('fullWidth');
  });

  it('aplica el límite de caracteres cuando maxLength está definido', () => {
    render(<TextArea {...mockWithMaxLengthTextAreaProps} />);
    const textarea = screen.getByLabelText('Campo con límite de caracteres') as HTMLTextAreaElement;
    expect(textarea.maxLength).toBe(100);
  });

  it('aplica las diferentes variantes correctamente', () => {
    const { rerender } = render(
      <TextArea 
        label="Outlined" 
        variant="outlined" 
        data-testid="textarea-variant" 
      />
    );
    
    let textareaWrapper = screen.getByTestId('textarea-variant').parentElement;
    expect(textareaWrapper).toHaveClass('variant-outlined');
    
    rerender(
      <TextArea 
        label="Filled" 
        variant="filled" 
        data-testid="textarea-variant" 
      />
    );
    
    textareaWrapper = screen.getByTestId('textarea-variant').parentElement;
    expect(textareaWrapper).toHaveClass('variant-filled');
    
    rerender(
      <TextArea 
        label="Standard" 
        variant="standard" 
        data-testid="textarea-variant" 
      />
    );
    
    textareaWrapper = screen.getByTestId('textarea-variant').parentElement;
    expect(textareaWrapper).toHaveClass('variant-standard');
  });

  it('aplica los diferentes tamaños correctamente', () => {
    const { rerender } = render(
      <TextArea 
        label="Small" 
        size={ComponentSize.SMALL} 
        data-testid="textarea-size" 
      />
    );
    
    let textareaWrapper = screen.getByTestId('textarea-size').parentElement;
    expect(textareaWrapper).toHaveClass('size-small');
    
    rerender(
      <TextArea 
        label="Large" 
        size={ComponentSize.LARGE} 
        data-testid="textarea-size" 
      />
    );
    
    textareaWrapper = screen.getByTestId('textarea-size').parentElement;
    expect(textareaWrapper).toHaveClass('size-large');
  });

  it('es accesible con un nombre accesible', () => {
    render(<TextArea label="Campo accesible" aria-label="Área de texto para comentarios" />);
    const textarea = screen.getByRole('textbox', { name: /área de texto para comentarios/i });
    expect(textarea).toBeInTheDocument();
  });

  it('aplica el número de filas especificado', () => {
    render(<TextArea label="Campo con filas" rows={5} />);
    const textarea = screen.getByLabelText('Campo con filas');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('maneja correctamente el redimensionamiento automático', () => {
    // Nota: Las pruebas de redimensionamiento automático son difíciles de probar con JSDOM
    // ya que no tiene un diseño real. Esta es una prueba básica para verificar que la propiedad se aplica.
    const { container } = render(<TextArea {...mockAutoResizeTextAreaProps} />);
    const textarea = container.querySelector('textarea');
    expect(textarea).toHaveStyle('overflow: hidden');
  });
});
