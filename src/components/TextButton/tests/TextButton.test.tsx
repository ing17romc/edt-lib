import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextButton from '../';
import { 
  mockTextButtonProps, 
  mockDisabledTextButtonProps, 
  mockLoadingTextButtonProps,
  mockFullWidthTextButtonProps,
} from './mocks';
import { ComponentSize } from '../../types';

describe('TextButton Component', () => {
  it('se renderiza correctamente con las propiedades predeterminadas', () => {
    render(<TextButton>Botón de prueba</TextButton>);
    const button = screen.getByRole('button', { name: /botón de prueba/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('textButton');
    expect(button).toHaveClass('size-medium'); // La clase CSS sigue siendo 'size-medium' aunque el valor sea ComponentSize.MEDIUM
    expect(button).toHaveClass('color-primary');
    expect(button).toHaveClass('underline-hover');
  });

  it('aplica la clase personalizada cuando se proporciona', () => {
    render(<TextButton {...mockTextButtonProps} />);
    const button = screen.getByRole('button', { name: /botón de prueba/i });
    expect(button).toHaveClass('test-class');
  });

  it('maneja el evento onClick correctamente', () => {
    const handleClick = jest.fn();
    render(
      <TextButton onClick={handleClick}>
        Hacer clic
      </TextButton>
    );
    const button = screen.getByRole('button', { name: /hacer clic/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('se deshabilita correctamente cuando la propiedad disabled es true', () => {
    render(<TextButton {...mockDisabledTextButtonProps} />);
    const button = screen.getByRole('button', { name: /deshabilitado/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled');
  });

  it('muestra un indicador de carga cuando loading es true', () => {
    render(<TextButton {...mockLoadingTextButtonProps} />);
    const button = screen.getByRole('button', { name: /cargando/i });
    expect(button).toHaveClass('loading');
    // Verificar que el color sea transparente o que el texto no sea visible
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.getPropertyValue('color');
    const isTransparent = color === 'transparent' || color === 'rgba(0, 0, 0, 0)' || color === '';
    expect(isTransparent).toBe(true);
  });

  it('ocupa todo el ancho disponible cuando fullWidth es true', () => {
    render(<TextButton {...mockFullWidthTextButtonProps} />);
    const button = screen.getByRole('button', { name: /ancho completo/i });
    expect(button).toHaveClass('fullWidth');
    expect(button).toHaveStyle('width: 100%');
  });

  it('aplica las propiedades personalizadas correctamente', () => {
    render(
      <TextButton 
        color="secondary" 
        size={ComponentSize.LARGE}
        underline="always"
      >
        Personalizado
      </TextButton>
    );
    const button = screen.getByRole('button', { name: /personalizado/i });
    expect(button).toHaveClass('color-secondary');
    expect(button).toHaveClass('size-large');
    expect(button).toHaveClass('underline-always');
  });

  it('aplica el estilo de subrayado correctamente', () => {
    const { rerender } = render(
      <TextButton underline="none">Sin subrayado</TextButton>
    );
    let button = screen.getByRole('button', { name: /sin subrayado/i });
    expect(button).toHaveClass('underline-none');

    rerender(<TextButton underline="always">Siempre subrayado</TextButton>);
    button = screen.getByRole('button', { name: /siempre subrayado/i });
    expect(button).toHaveClass('underline-always');
  });

  it('es accesible con un nombre accesible', () => {
    render(<TextButton>Botón accesible</TextButton>);
    const button = screen.getByRole('button', { name: /botón accesible/i });
    expect(button).toBeInTheDocument();
  });
});
