import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Menu } from './index';

describe('Menu Component', () => {
  const mockOptions = [
    {
      path: '/home',
      icon: 'home',
      name: 'Inicio'
    },
    {
      path: '/profile',
      icon: 'person',
      name: 'Perfil'
    }
  ];

  const mockGetCurrentPath = jest.fn();

  test('renders menu with all options', () => {
    render(
      <Menu
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    const menuElement = screen.getByRole('navigation', { name: /menú principal/i });
    expect(menuElement).toBeInTheDocument();

    mockOptions.forEach((option) => {
      const optionElement = screen.getByRole('menuitem', { name: option.name });
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute('tabindex', '0');
      expect(screen.getByText(option.name)).toBeInTheDocument();
    });
  });

  test('calls getCurrentPath when option is clicked', () => {
    render(
      <Menu
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    const optionElement = screen.getByRole('menuitem', { name: /inicio/i });
    fireEvent.click(optionElement);

    expect(mockGetCurrentPath).toHaveBeenCalledWith('/home');
  });

  test('has correct ARIA attributes', () => {
    render(
      <Menu
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    const menuElement = screen.getByRole('navigation');
    const optionElement = screen.getByRole('menuitem', { name: /perfil/i });

    expect(menuElement).toHaveAttribute('aria-label', 'Menú principal');
    expect(optionElement).toHaveAttribute('aria-label', 'Perfil');
  });

  test('renders empty menu when no options provided', () => {
    const { container } = render(
      <Menu
        options={[]}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    const menuElement = screen.getByRole('navigation');
    expect(menuElement).toBeInTheDocument();
    // Verifica que no hay elementos de opción
    expect(container.querySelectorAll('.size-3.padding-v-30').length).toBe(0);
  });

  test('renders with correct grid structure', () => {
    const { container } = render(
      <Menu
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    const gridElement = container.querySelector('.grid-primary');
    expect(gridElement).toBeInTheDocument();

    mockOptions.forEach((_, index) => {
      const optionContainer = container.querySelector('.size-3.padding-v-30');
      expect(optionContainer).toBeInTheDocument();
    });
  });
});
