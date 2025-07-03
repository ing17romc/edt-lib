import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from '..';
import { defaultProps, pulseProps } from './mocks';
import { SpinnerSize, SpinnerVariant } from '../types';

describe('Spinner', () => {
  it('renders with default props', () => {
    render(<Spinner {...defaultProps} />);
    const spinner = screen.getByLabelText('Cargando...');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('spinner--medium');
    expect(spinner).toHaveClass('spinner--primary');
  });

  it('renders with a specific size', () => {
    render(<Spinner {...defaultProps} size={SpinnerSize.LARGE} />);
    const spinner = screen.getByLabelText('Cargando...');
    expect(spinner).toHaveClass('spinner--large');
  });

  it('renders with a specific variant', () => {
    render(<Spinner {...defaultProps} variant={SpinnerVariant.DANGER} />);
    const spinner = screen.getByLabelText('Cargando...');
    expect(spinner).toHaveClass('spinner--danger');
  });

  it('renders in pulse mode', () => {
    render(<Spinner {...pulseProps} />);
    const spinner = screen.getByLabelText('Cargando...');
    expect(spinner).toHaveClass('spinner--pulse');
  });

  it('applies custom className', () => {
    render(<Spinner {...defaultProps} className="custom-class" />);
    const spinner = screen.getByLabelText('Cargando...');
    expect(spinner).toHaveClass('custom-class');
  });
});
