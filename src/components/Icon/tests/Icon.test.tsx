import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from '..';
import { mockIconProps, sizeVariants, variantOptions, stateOptions, MockSvgIcon } from './mocks';

describe('Icon', () => {
  // Limpiar el DOM después de cada prueba
  afterEach(cleanup);

  it('renderiza correctamente con las props por defecto', () => {
    render(<Icon {...mockIconProps} />);
    const icon = screen.getByRole('img');
    
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon');
    
    // Verificar que el icono de Material Icons está presente
    const materialIcon = icon.querySelector('.material-icons-outlined');
    expect(materialIcon).toBeInTheDocument();
    expect(materialIcon).toHaveTextContent('home');
  });

  it('aplica correctamente todos los tamaños disponibles', () => {
    sizeVariants.forEach(({ size, className }) => {
      // Limpiar el DOM antes de cada iteración
      cleanup();
      
      render(<Icon {...mockIconProps} size={size} data-testid={`icon-${size}`} />);
      const icons = screen.getAllByRole('img');
      const icon = icons[0]; // Tomar el primer icono
      
      expect(icon).toHaveClass('icon');
      
      // Verificar que el tamaño se aplica correctamente
      const materialIcon = icon.querySelector('.material-icons-outlined');
      expect(materialIcon).toBeInTheDocument();
      expect(icon).toHaveClass(className);
    });
  });

  it('aplica correctamente todas las variantes disponibles', () => {
    variantOptions.forEach(({ variant, className }) => {
      // Limpiar el DOM antes de cada iteración
      cleanup();
      
      render(<Icon {...mockIconProps} variant={variant} data-testid={`icon-${variant}`} />);
      const icons = screen.getAllByRole('img');
      const icon = icons[0]; // Tomar el primer icono
      
      const materialIcon = icon.querySelector(`.${className}`);
      expect(materialIcon).toBeInTheDocument();
    });
  });

  it('aplica correctamente los estados', () => {
    stateOptions.forEach(({ disabled, inheritColor, className }) => {
      // Limpiar el DOM antes de cada iteración
      cleanup();
      
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
      
      // Usar getAllByRole y tomar el primer elemento
      const icons = screen.getAllByRole('img');
      const icon = icons[0];
      
      expect(icon).toHaveClass(className);
      
      // Verificar que el icono de Material Icons esté presente
      const materialIcon = icon.querySelector('.material-icons-outlined, .material-icons');
      expect(materialIcon).toBeInTheDocument();
    });
  });

  it('aplica el color personalizado correctamente', () => {
    const customColor = '#ff0000';
    render(<Icon {...mockIconProps} color={customColor} />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveStyle(`color: ${customColor}`);
  });

  it('aplica estilos personalizados correctamente', () => {
    const customStyle = { backgroundColor: '#f0f0f0' };
    render(<Icon {...mockIconProps} style={customStyle} />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveStyle('background-color: #f0f0f0');
  });

  it('pasa correctamente los atributos adicionales', () => {
    render(<Icon {...mockIconProps} aria-label="Home icon" />);
    const icon = screen.getByLabelText('Home icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('aria-label', 'Home icon');
  });

  it('renderiza correctamente con un componente SVG personalizado', () => {
    render(<Icon {...mockIconProps} component={MockSvgIcon} />);
    const svg = screen.getByTestId('mock-svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('aplica clases personalizadas', () => {
    const customClass = 'mi-clase-personalizada';
    render(<Icon name="home" className={customClass} aria-label="Custom icon" />);
    
    const icon = screen.getByLabelText('Custom icon');
    expect(icon).toHaveClass(customClass);
    expect(icon).toHaveClass('icon');
  });

  it('pasa correctamente los atributos HTML', () => {
    const title = 'Icono de inicio';
    render(<Icon name="home" title={title} aria-label="Home" />);
    
    const icon = screen.getByLabelText('Home');
    expect(icon).toHaveAttribute('title', title);
  });
});
