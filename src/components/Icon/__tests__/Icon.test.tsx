import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from '..';
import { IconSize, IconVariant } from '../types';

describe('Icon', () => {
  it('renderiza correctamente con las props por defecto', () => {
    render(<Icon name="home" data-testid="icon" />);
    const icon = screen.getByTestId('icon');
    
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon--medium');
    expect(icon).toHaveClass('icon--outline');
  });

  it('aplica el tamaño correcto', () => {
    const { rerender } = render(<Icon name="home" size={IconSize.SMALL} data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--small');
    
    rerender(<Icon name="home" size={IconSize.LARGE} data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--large');
  });

  it('aplica la variante correcta', () => {
    const { rerender } = render(<Icon name="home" variant={IconVariant.SOLID} data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--solid');
    
    rerender(<Icon name="home" variant={IconVariant.DUAL} data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('icon--dual');
  });

  it('aplica el color correctamente', () => {
    const color = '#ff0000';
    render(<Icon name="home" color={color} data-testid="icon" />);
    
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveStyle(`color: ${color}`);
  });

  it('hereda el color cuando inheritColor es true', () => {
    render(
      <div style={{ color: 'blue' }}>
        <Icon name="home" inheritColor data-testid="icon" />
      </div>
    );
    
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('icon--inherit-color');
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
