import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from '..';
import { mockIconProps, mockIconSmallProps, mockIconLargeProps, mockIconDefaultSize } from './mocks';
import { ControlSize } from '../../../utils/enums';

describe('Icon Component', () => {
  test('renders with default props', () => {
    render(<Icon {...mockIconProps} />);
    
    const iconContainer = screen.getByRole('img');
    const icon = screen.getByText(mockIconProps.name);
    
    expect(iconContainer).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(iconContainer).toHaveClass('container-icon', ControlSize.MD);
    expect(iconContainer).toHaveAttribute('aria-label', mockIconProps.name);
  });

  test('renders with small size', () => {
    render(<Icon {...mockIconSmallProps} />);
    
    const iconContainer = screen.getByRole('img');
    expect(iconContainer).toHaveClass('container-icon', ControlSize.SM);
  });

  test('renders with large size', () => {
    render(<Icon {...mockIconLargeProps} />);
    
    const iconContainer = screen.getByRole('img');
    expect(iconContainer).toHaveClass('container-icon', ControlSize.LG);
  });

  test('uses default size when not provided', () => {
    render(<Icon {...mockIconDefaultSize} />);
    
    const iconContainer = screen.getByRole('img');
    expect(iconContainer).toHaveClass('container-icon', ControlSize.MD);
  });

  test('returns null for invalid icon name', () => {
    const { container } = render(<Icon name={null} />);
    expect(container.firstChild).toBeNull();
  });

});
