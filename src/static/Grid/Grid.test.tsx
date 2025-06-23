import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './index';

describe('Grid', () => {
  it('renderiza los contenedores principales', () => {
    render(<Grid />);
    expect(screen.getByTestId('container-body')).toBeInTheDocument();
    expect(screen.getByTestId('grid-primary')).toBeInTheDocument();
    expect(screen.getByTestId('grid-secondary')).toBeInTheDocument();
  });

  it('renderiza múltiples celdas con el mismo número', () => {
    render(<Grid />);
    // Debe haber más de una celda con el número 1
    expect(screen.getAllByText('1').length).toBeGreaterThan(1);
    // Debe haber al menos una celda con el número 12 y 17
    expect(screen.getAllByText('12').length).toBeGreaterThan(0);
    expect(screen.getAllByText('17').length).toBeGreaterThan(0);
  });
});
