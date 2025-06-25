import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from '..';
import { mockIconProps, mockIconSmallProps, mockIconLargeProps, mockIconDefaultSize } from './mocks';

describe('Icon Component', () => {
  test('renders with default props', () => {
    render(<Icon {...mockIconProps} />);
    
    const iconContainer = screen.getByRole('img');
    const icon = screen.getByText(mockIconProps.name);
    
    expect(iconContainer).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(iconContainer).toHaveClass('container-icon', 'md');
    expect(iconContainer).toHaveAttribute('aria-label', mockIconProps.name);
  });

  test('renders with small size', () => {
    render(<Icon {...mockIconSmallProps} />);
    
    const iconContainer = screen.getByRole('img');
    expect(iconContainer).toHaveClass('container-icon', 'sm');
  });

  test('renders with large size', () => {
    render(<Icon {...mockIconLargeProps} />);
    
    const iconContainer = screen.getByRole('img');
    expect(iconContainer).toHaveClass('container-icon', 'lg');
  });

  test('uses default size when not provided', () => {
    render(<Icon {...mockIconDefaultSize} />);
    
    const iconContainer = screen.getByRole('img');
    expect(iconContainer).toHaveClass('container-icon', 'md');
  });

  test('returns null for invalid icon name', () => {
    // @ts-ignore - Testing invalid prop value
    const { container } = render(<Icon name="invalid-icon" />);
    expect(container.firstChild).toBeNull();
  });
});
