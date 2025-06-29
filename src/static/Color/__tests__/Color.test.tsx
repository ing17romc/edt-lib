import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Color from '../index';
import { mockColorClasses } from './mocks';

describe('Color', () => {
  it('renderiza los títulos principales', () => {
    render(<Color />);
    expect(screen.getByText('Font color')).toBeInTheDocument();
    expect(screen.getByText('Background color')).toBeInTheDocument();
    expect(screen.getByText('SCSS color variables')).toBeInTheDocument();
  });

  it('renderiza algunos ejemplos de color', () => {
    render(<Color />);
    
    // Check font colors
    mockColorClasses.fontColors.forEach(color => {
      expect(screen.getByText(color)).toBeInTheDocument();
    });

    // Check for SCSS variable example
    expect(screen.getByText(/\$black-color/)).toBeInTheDocument();
  });
});
