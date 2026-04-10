import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './index';

describe('Grid', () => {
  it('renders the main containers', () => {
    render(<Grid />);
    expect(screen.getByTestId('container-body')).toBeInTheDocument();
    expect(screen.getByTestId('grid-primary')).toBeInTheDocument();
    expect(screen.getByTestId('grid-secondary')).toBeInTheDocument();
  });

  it('renders multiple cells with the same number', () => {
    render(<Grid />);
    // Should have more than one cell with the number 1
    expect(screen.getAllByText('1').length).toBeGreaterThan(1);
    // Should have at least one cell with the number 12 and 17
    expect(screen.getAllByText('12').length).toBeGreaterThan(0);
    expect(screen.getAllByText('17').length).toBeGreaterThan(0);
  });
});
