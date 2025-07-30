import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconButton from '..';
import { ComponentSize, ComponentVariant } from '../../types';

describe('IconButton', () => {
  it('renderiza correctamente con las props por defecto', () => {
    render(
      <IconButton 
        icon="home" 
        aria-label="Inicio" 
        data-testid="icon-button" 
      />
    );
    
    const button = screen.getByTestId('icon-button');
    const icon = screen.getByRole('img', { hidden: true });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('iconButton--medium');
    expect(button).toHaveClass('iconButton--primary');
    expect(icon).toHaveAttribute('aria-label', 'home');
    expect(button).toHaveAttribute('aria-label', 'Inicio');
  });

  it('aplica el tamaño correcto', () => {
    const sizes = ['small', 'medium', 'large'] as const;
    
    sizes.forEach(size => {
      const { container } = render(
        <IconButton 
          icon="home" 
          size={size as ComponentSize} 
          aria-label={`Botón ${size}`} 
        />
      );
      
      const button = container.firstChild;
      expect(button).toHaveClass(`iconButton--${size}`);
    });
  });

  it('aplica la variante correcta', () => {
    const variants = ['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning'] as const;
    
    variants.forEach(variant => {
      const { container } = render(
        <IconButton 
          icon="home" 
          variant={variant as ComponentVariant} 
          aria-label={`Botón ${variant}`} 
        />
      );
      
      const button = container.firstChild;
      expect(button).toHaveClass(`iconButton--${variant}`);
    });
  });

  it('maneja correctamente el evento onClick', () => {
    const handleClick = jest.fn();
    
    render(
      <IconButton 
        icon="home" 
        onClick={handleClick} 
        aria-label="Haz clic" 
        data-testid="icon-button"
      />
    );
    
    const button = screen.getByTestId('icon-button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('se deshabilita correctamente', () => {
    render(
      <IconButton 
        icon="home" 
        disabled 
        aria-label="Botón deshabilitado" 
        data-testid="icon-button"
      />
    );
    
    const button = screen.getByTestId('icon-button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('muestra el estado de carga correctamente', () => {
    render(
      <IconButton 
        icon="home" 
        loading 
        aria-label="Cargando" 
        data-testid="icon-button"
      />
    );
    
    const button = screen.getByTestId('icon-button');
    expect(button).toHaveClass('iconButton--loading');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toHaveAttribute('aria-label', 'Cargando...');
  });

  it('aplica clases personalizadas correctamente', () => {
    render(
      <IconButton 
        icon="home" 
        className="custom-button" 
        iconClassName="custom-icon" 
        aria-label="Personalizado"
      />
    );
    
    const button = screen.getByRole('button');
    const iconContainer = screen.getByRole('img', { hidden: true }).parentElement;
    
    expect(button).toHaveClass('custom-button');
    expect(iconContainer).toHaveClass('custom-icon');
  });

  it('pasa correctamente los atributos HTML', () => {
    render(
      <IconButton 
        icon="home" 
        title="Botón de inicio" 
        aria-label="Inicio" 
        data-testid="icon-button"
      />
    );
    
    const button = screen.getByTestId('icon-button');
    expect(button).toHaveAttribute('title', 'Botón de inicio');
  });
});
