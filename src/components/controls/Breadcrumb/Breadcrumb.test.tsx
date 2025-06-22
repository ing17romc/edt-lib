import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Breadcrumb from './index';

const mockGetCurrentPath = jest.fn();

const mockOptions = [
  { url: '/home', text: 'Home' },
  { url: '/products', text: 'Products' },
  { url: '/details', text: 'Product Details' },
];

describe('Breadcrumb Component', () => {
  beforeEach(() => {
    mockGetCurrentPath.mockClear();
  });

  test('renders breadcrumb with correct items', () => {
    render(
      <Breadcrumb
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    // Check if all breadcrumb items are rendered
    mockOptions.forEach(option => {
      expect(screen.getByText(option.text)).toBeInTheDocument();
    });

    // Check if nav element has correct aria-label
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

    // Click on second item (Products)
    fireEvent.click(screen.getByText('Products'));

    expect(mockGetCurrentPath).toHaveBeenCalledTimes(1);
    expect(mockGetCurrentPath).toHaveBeenCalledWith('/products');
  });

  test('has correct accessibility attributes', () => {
    render(
      <Breadcrumb
        options={mockOptions}
        getCurrentPath={mockGetCurrentPath}
      />
    );

    // Check if buttons have correct role and tabindex
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveAttribute('tabindex', '0');
    });

    // Check if aria-label is correct for second item
    const secondButton = screen.getByText('Products');
    expect(secondButton).toHaveAttribute('aria-label', 'Navegar a Products');
  });
});
