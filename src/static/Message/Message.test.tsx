import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from './index';

describe('Message', () => {
  it('renderiza todos los mensajes', () => {
    render(<Message />);
    expect(screen.getByText('Success!')).toBeInTheDocument();
    expect(screen.getByText('Indicates a successful or positive action.')).toBeInTheDocument();
    expect(screen.getByText('Info!')).toBeInTheDocument();
    expect(screen.getByText('Indicates a neutral informative change or action.')).toBeInTheDocument();
    expect(screen.getByText('Warning!')).toBeInTheDocument();
    expect(screen.getByText('Indicates a warning that might need attention.')).toBeInTheDocument();
    expect(screen.getByText('Danger!')).toBeInTheDocument();
    expect(screen.getByText('Indicates a dangerous or potentially negative action.')).toBeInTheDocument();
  });
});
