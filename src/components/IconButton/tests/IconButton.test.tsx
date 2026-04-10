import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconButton from '..';
import { ComponentSize, ComponentVariant } from '../../types';

describe('IconButton', () => {
  it('renders correctly with default props', () => {
    render(
      <IconButton 
        icon="home" 
        aria-label="Home" 
        data-testid="icon-button" 
      />
    );
    
    const button = screen.getByTestId('icon-button');
    const icon = screen.getByRole('img', { hidden: true });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('iconButton--medium');
    expect(button).toHaveClass('iconButton--primary');
    expect(icon).toHaveAttribute('aria-label', 'home');
    expect(button).toHaveAttribute('aria-label', 'Home');
  });

  it('applies the correct size', () => {
    const sizes = Object.values(ComponentSize);
    
    sizes.forEach(size => {
      const { container } = render(
        <IconButton 
          icon="home" 
          size={size as ComponentSize} 
          aria-label={`Button ${size}`} 
        />
      );
      
      const button = container.firstChild;
      expect(button).toHaveClass(`iconButton--${size}`);
    });
  });

  it('applies the correct variant', () => {
    const variants = ['primary', 'secondary', 'tertiary', 'danger', 'success', 'warning'] as const;
    
    variants.forEach(variant => {
      const { container } = render(
        <IconButton 
          icon="home" 
          variant={variant as ComponentVariant} 
          aria-label={`Button ${variant}`} 
        />
      );
      
      const button = container.firstChild;
      expect(button).toHaveClass(`iconButton--${variant}`);
    });
  });

  it('handles the onClick event correctly', () => {
    const handleClick = vi.fn();
    
    render(
      <IconButton 
        icon="home" 
        onClick={handleClick} 
        aria-label="Click me" 
        data-testid="icon-button"
      />
    );
    
    const button = screen.getByTestId('icon-button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled correctly', () => {
    render(
      <IconButton 
        icon="home" 
        disabled 
        aria-label="Disabled button" 
        data-testid="icon-button"
      />
    );
    
    const button = screen.getByTestId('icon-button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('shows loading state correctly', () => {
    render(
      <IconButton 
        icon="home" 
        loading 
        aria-label="Loading" 
        data-testid="icon-button"
      />
    );
    
    const button = screen.getByTestId('icon-button');
    expect(button).toHaveClass('iconButton--loading');
    expect(button).toHaveAttribute('aria-busy', 'true');
    expect(button).toHaveAttribute('aria-label', 'Loading...');
  });

  it('applies custom classes correctly', () => {
    render(
      <IconButton 
        icon="home" 
        className="custom-button" 
        iconClassName="custom-icon" 
        aria-label="Custom"
      />
    );
    
    const button = screen.getByRole('button');
    const iconContainer = screen.getByRole('img', { hidden: true }).parentElement;
    
    expect(button).toHaveClass('custom-button');
    expect(iconContainer).toHaveClass('custom-icon');
  });

  it('pasa correctamente los atributos HTML', () => {
    render(
      <IconButton 
        icon="home" 
        title="Home button" 
        aria-label="Home" 
        data-testid="icon-button"
      />
    );
    
    const button = screen.getByTestId('icon-button');
    expect(button).toHaveAttribute('title', 'Home button');
  });
});
