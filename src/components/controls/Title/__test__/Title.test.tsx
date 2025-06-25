import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from '..';
import { mockTitleProps, mockTitleWithCustomLevel, mockTitleWithAdditionalProps } from './mocks';

describe('Title Component', () => {
  it('renders with default props', () => {
    render(<Title>{mockTitleProps.children}</Title>);
    const titleElement = screen.getByText(mockTitleProps.children as string);
    
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
    expect(titleElement).toHaveClass('title');
    expect(titleElement).toHaveClass('title--level-1');
  });

  it('applies custom className and style', () => {
    render(<Title {...mockTitleProps} />);
    const titleElement = screen.getByText(mockTitleProps.children as string);
    
    expect(titleElement).toHaveClass(mockTitleProps.className as string);
    expect(window.getComputedStyle(titleElement).color).toBe('rgb(255, 0, 0)');
  });

  it('renders with custom level', () => {
    render(<Title {...mockTitleWithCustomLevel} />);
    const titleElement = screen.getByText(mockTitleWithCustomLevel.children as string);
    
    expect(titleElement.tagName).toBe('H2');
    expect(titleElement).toHaveClass('title--level-2');
  });

  it('passes additional HTML attributes', () => {
    render(<Title {...mockTitleWithAdditionalProps} />);
    const titleElement = screen.getByText(mockTitleWithAdditionalProps.children as string);
    
    expect(titleElement).toHaveAttribute('id', 'custom-id');
    expect(titleElement).toHaveAttribute('aria-label', 'Custom label');
  });

  it('renders children correctly', () => {
    const customText = 'Custom Child Text';
    render(<Title level={4}>{customText}</Title>);
    
    expect(screen.getByText(customText)).toBeInTheDocument();
  });
});
