import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './index';

describe('NavBar', () => {
  const leftOptions = [
    { path: '/home', name: 'Home' },
    { path: '/about', name: 'About' }
  ];
  const rightOptions = [
    { path: '/help', name: 'Help', icon: 'help-icon' }
  ];
  const getCurrentPath = jest.fn();

  it('renderiza los botones de navegación izquierda y derecha', () => {
    render(<NavBar leftOptions={leftOptions} rightOptions={rightOptions} getCurrentPath={getCurrentPath} />);
    const homeButtons = screen.getAllByRole('button', { name: /home/i });
    expect(homeButtons.length).toBeGreaterThan(0);
    const aboutButtons = screen.getAllByRole('button', { name: /about/i });
    expect(aboutButtons.length).toBeGreaterThan(0);
    const helpButtons = screen.getAllByRole('button', { name: /help/i });
    expect(helpButtons.length).toBeGreaterThan(0);
  });

  it('llama a getCurrentPath al hacer click en un botón', () => {
    render(<NavBar leftOptions={leftOptions} rightOptions={rightOptions} getCurrentPath={getCurrentPath} />);
    fireEvent.click(screen.getByRole('button', { name: /about/i }));
    expect(getCurrentPath).toHaveBeenCalledWith('/about');
  });
});
