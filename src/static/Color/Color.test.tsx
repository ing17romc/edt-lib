import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Color from './index';

describe('Color', () => {
  it('renderiza los títulos principales', () => {
    render(<Color />);
    expect(screen.getByText('Font color')).toBeInTheDocument();
    expect(screen.getByText('Background color')).toBeInTheDocument();
    expect(screen.getByText('SCSS color variables')).toBeInTheDocument();
  });

  it('renderiza algunos ejemplos de color', () => {
    render(<Color />);
    expect(screen.getByText('font-blue')).toBeInTheDocument();
    expect(screen.getByText('font-red')).toBeInTheDocument();
    expect(screen.getByText('font-gray')).toBeInTheDocument();
    expect(screen.getByText((content) => /\$black-color/.test(content))).toBeInTheDocument();
  });
});
