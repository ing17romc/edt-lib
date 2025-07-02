import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from '..';
import { mockIconProps, sizeVariants, variantOptions, stateOptions, MockSvgIcon } from './mocks';

describe('Icon', () => {
  it('renderiza correctamente con las props por defecto', () => {
    render(<Icon {...mockIconProps} />);
    const icon = screen.getByTestId('icon');
    
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon--medium');
    expect(icon).toHaveClass('icon--outline');
  });

  it('aplica correctamente todos los tamaños disponibles', () => {
    sizeVariants.forEach(({ size, className }) => {
      render(<Icon {...mockIconProps} size={size} data-testid={`icon-${size}`} />);
      const icon = screen.getByTestId(`icon-${size}`);
      expect(icon).toHaveClass(className);
    });
  });

  it('aplica correctamente todas las variantes disponibles', () => {
    variantOptions.forEach(({ variant, className }) => {
      render(<Icon {...mockIconProps} variant={variant} data-testid={`icon-${variant}`} />);
      const icon = screen.getByTestId(`icon-${variant}`);
      expect(icon).toHaveClass(className);
    });
  });

  it('aplica correctamente los estados', () => {
    stateOptions.forEach(({ disabled, inheritColor, className }) => {
      render(
        <div style={inheritColor ? { color: 'blue' } : {}}>
          <Icon 
            {...mockIconProps} 
            disabled={disabled} 
            inheritColor={!!inheritColor} 
            data-testid={`icon-${className}`} 
          />
        </div>
      );
      const icon = screen.getByTestId(`icon-${className}`);
      expect(icon).toHaveClass(className);
    });
  });

  it('aplica el color personalizado correctamente', () => {
    const customColor = '#ff0000';
    render(<Icon {...mockIconProps} color={customColor} />);
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle(`color: ${customColor}`);
  });

  it('aplica estilos personalizados correctamente', () => {
    const customStyle = { backgroundColor: '#f0f0f0' };
    render(<Icon {...mockIconProps} style={customStyle} />);
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle('background-color: #f0f0f0');
  });

  it('pasa correctamente los atributos adicionales', () => {
    render(<Icon {...mockIconProps} aria-label="Home icon" />);
    const icon = screen.getByLabelText('Home icon');
    expect(icon).toBeInTheDocument();
  });

  it('renderiza correctamente con un componente SVG personalizado', () => {
    render(<Icon {...mockIconProps} component={MockSvgIcon} />);
    const svg = screen.getByTestId('mock-svg');
    expect(svg).toBeInTheDocument();
  });

  it('aplica clases personalizadas', () => {
    const customClass = 'mi-clase-personalizada';
    render(<Icon name="home" className={customClass} data-testid="icon" />);
    
    expect(screen.getByTestId('icon')).toHaveClass(customClass);
  });

  it('pasa correctamente los atributos HTML', () => {
    const title = 'Icono de inicio';
    render(<Icon name="home" title={title} data-testid="icon" />);
    
    expect(screen.getByTestId('icon')).toHaveAttribute('title', title);
  });
});
