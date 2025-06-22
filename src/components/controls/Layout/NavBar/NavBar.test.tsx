import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './index';

describe('NavBar (Layout)', () => {
  const leftOptions = [
    { path: '/inicio', name: 'Inicio' },
    { path: '/servicios', name: 'Servicios' }
  ];
  const rightOptions = [
    { path: '/contacto', name: 'Contacto' }
  ];
  const getCurrentPath = jest.fn();
  const currentPath = '/servicios';

  it('renderiza los botones de navegación izquierda y derecha', () => {
    render(<NavBar leftOptions={leftOptions} rightOptions={rightOptions} currentPath={currentPath} getCurrentPath={getCurrentPath} />);
    expect(screen.getByRole('button', { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /servicios/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contacto/i })).toBeInTheDocument();
  });

  it('resalta el botón de la ruta actual', () => {
    render(<NavBar leftOptions={leftOptions} rightOptions={rightOptions} currentPath={currentPath} getCurrentPath={getCurrentPath} />);
    const activeButton = screen.getByRole('button', { name: /servicios/i });
    expect(activeButton).toHaveClass('active');
    expect(activeButton).toHaveAttribute('aria-current', 'page');
  });

  it('llama a getCurrentPath al hacer click en un botón', () => {
    render(<NavBar leftOptions={leftOptions} rightOptions={rightOptions} currentPath={currentPath} getCurrentPath={getCurrentPath} />);
    fireEvent.click(screen.getByRole('button', { name: /contacto/i }));
    expect(getCurrentPath).toHaveBeenCalledWith('/contacto');
  });
});
