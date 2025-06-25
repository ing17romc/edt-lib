import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Spinner from '..';
import { mockSpinnerProps, mockSpinnerHiddenProps } from './mocks';

describe('Spinner Component', () => {
  test('renders spinner when show is true', () => {
    render(<Spinner {...mockSpinnerProps} />);

    const container = screen.getByRole('status');
    expect(container).toBeInTheDocument();
    expect(container).toHaveAttribute('aria-label', 'Cargando...');
  });

  test('does not render spinner when show is false', () => {
    render(<Spinner {...mockSpinnerHiddenProps} />);

    const container = screen.queryByRole('status');
    expect(container).not.toBeInTheDocument();
  });

  test('has correct container class when hidden', () => {
    render(<Spinner {...mockSpinnerHiddenProps} />);

    const container = screen.getByTestId('spinner-container');
    expect(container).toHaveClass('container-load');
    expect(container).toHaveClass('hidden');
  });

  test('has correct container class when visible', () => {
    render(<Spinner {...mockSpinnerProps} />);

    const container = screen.getByTestId('spinner-container');
    expect(container).toHaveClass('container-load');
    expect(container).not.toHaveClass('hidden');
  });
});
