import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from '..';
import { mockGridProps } from './mocks';

describe('Grid', () => {
  it('renders main containers correctly', () => {
    render(<Grid {...mockGridProps} />);
    
    // Check if main containers are rendered
    expect(screen.getByTestId('container-body')).toBeInTheDocument();
    expect(screen.getByTestId('grid-primary')).toBeInTheDocument();
    expect(screen.getByTestId('grid-secondary')).toBeInTheDocument();
  });

  it('renders multiple cells with the same number', () => {
    render(<Grid {...mockGridProps} />);
    
    // Should render multiple cells with the same numbers
    expect(screen.getAllByText('1').length).toBeGreaterThan(1);
    expect(screen.getAllByText('12').length).toBeGreaterThan(0);
    expect(screen.getAllByText('17').length).toBeGreaterThan(0);
  });

  it('renders grid elements with correct styles', () => {
    render(<Grid {...mockGridProps} />);
    
    // Check if grid elements have the correct styles
    const gridElements = screen.getAllByText(/^\d+$/);
    expect(gridElements.length).toBeGreaterThan(0);
    
    // Log the first element's styles for debugging
    console.log('First element styles:', window.getComputedStyle(gridElements[0].parentElement as Element));
    
    // Check for the expected styles
    gridElements.forEach(element => {
      // Check border style and color separately for better error messages
      expect(element.parentElement).toHaveStyle('border-width: 1px');
      expect(element.parentElement).toHaveStyle('border-style: solid');
      
      // Check background color
      expect(element.parentElement).toHaveStyle('background-color: rgba(0, 0, 0, 0)');
    });
  });
});
