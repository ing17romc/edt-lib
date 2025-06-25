import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb from '..';
import { mockOptions, mockGetCurrentPath, mockSeparator, mockCustomOptions } from './mocks';

describe('Breadcrumb Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders breadcrumb with correct items', () => {
    render(
      <Breadcrumb
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    // Verificar que todos los elementos del breadcrumb se rendericen
    mockOptions.forEach(option => {
      expect(screen.getByText(option.text)).toBeInTheDocument();
    });

    // Verificar que el elemento de navegación tenga el atributo aria-label correcto
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveAttribute('aria-label', 'breadcrumb');
  });

  test('calls getCurrentPath when clicking on breadcrumb item', () => {
    render(
      <Breadcrumb
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    // Hacer clic en el segundo elemento (Products)
    fireEvent.click(screen.getByText('Products'));

    expect(mockGetCurrentPath).toHaveBeenCalledTimes(1);
    expect(mockGetCurrentPath).toHaveBeenCalledWith(
      '/products',
      expect.any(Object)
    );
  });

  test('applies custom className to breadcrumb container', () => {
    const customClass = 'custom-breadcrumb';
    render(
      <Breadcrumb
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
        className={customClass}
      />
    );

    const nav = screen.getByRole('navigation');
    expect(nav.firstChild).toHaveClass('breadcrumb', customClass);
  });

  test('applies custom className to breadcrumb items', () => {
    render(
      <Breadcrumb
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toHaveClass('breadcrumb-button');
    expect(homeLink.parentElement).toHaveClass('home-link');
  });

  test('disables breadcrumb item when disabled prop is true', () => {
    render(
      <Breadcrumb
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    const disabledItem = screen.getByText('Product Details');
    fireEvent.click(disabledItem);
    expect(mockGetCurrentPath).toHaveBeenCalledTimes(0);
  });

  test('renders custom separator when provided', () => {
    render(
      <Breadcrumb
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
        separator={mockSeparator}
      />
    );

    const separators = document.querySelectorAll('.custom-separator');
    expect(separators.length).toBe(mockOptions.length - 1);
  });

  test('renders with custom options', () => {
    render(
      <Breadcrumb
        options={mockCustomOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    mockCustomOptions.forEach(option => {
      expect(screen.getByText(option.text)).toBeInTheDocument();
    });
  });
});
