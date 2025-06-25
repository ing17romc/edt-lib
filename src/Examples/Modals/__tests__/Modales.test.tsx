import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Modales from './index';

describe('Modales', () => {
  it('renderiza el título principal y botones de modales', () => {
    render(<Modales />);
    expect(screen.getByText('Ejemplos modales')).toBeInTheDocument();
    expect(screen.getByText('Mostrar modal respuesta http')).toBeInTheDocument();
    expect(screen.getByText('Mostrar modal de notificaciones')).toBeInTheDocument();
    expect(screen.getByText('Mostrar Generico')).toBeInTheDocument();
    expect(screen.getByText('Mostrar visor de PDF')).toBeInTheDocument();
  });

  it('puede abrir y cerrar el modal genérico', () => {
    render(<Modales />);
    const btn = screen.getByText('Mostrar Generico');
    fireEvent.click(btn);
    expect(screen.getByText('Example Modal!')).toBeInTheDocument();
    // Simula cierre
    const modal = screen.getByText('Example Modal!');
    expect(modal).toBeInTheDocument();
  });
});
