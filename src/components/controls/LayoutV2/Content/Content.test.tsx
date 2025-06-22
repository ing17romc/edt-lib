import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Content from './index';

describe('Content', () => {
  it('debe renderizar el título correctamente', () => {
    render(<Content />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Split Navigation Example');
  });

  it('debe mostrar el texto descriptivo', () => {
    render(<Content />);
    expect(
      screen.getByText(/The "Help" link in the navigation bar is separated from the rest/i)
    ).toBeInTheDocument();
  });
});
