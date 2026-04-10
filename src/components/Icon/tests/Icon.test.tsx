import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from '..';
import { mockIconProps, sizeVariants, variantOptions, stateOptions, MockSvgIcon } from './mocks';

describe('Icon', () => {
  // Clean up the DOM after each test
  afterEach(cleanup);

  it('renders correctly with default props', () => {
    render(<Icon {...mockIconProps} />);
    const icon = screen.getByRole('img');
    
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('icon');
    
    // Verify that the Material Icons icon is present
    const materialIcon = icon.querySelector('.material-icons-outlined');
    expect(materialIcon).toBeInTheDocument();
    expect(materialIcon).toHaveTextContent('home');
  });

  it('applies all available sizes correctly', () => {
    sizeVariants.forEach(({ size, className }) => {
      // Clean up the DOM before each iteration
      cleanup();
      
      render(<Icon {...mockIconProps} size={size} data-testid={`icon-${size}`} />);
      const icons = screen.getAllByRole('img');
      const icon = icons[0]; // Take the first icon
      
      expect(icon).toHaveClass('icon');
      
      // Verify that the size is applied correctly
      const materialIcon = icon.querySelector('.material-icons-outlined');
      expect(materialIcon).toBeInTheDocument();
      expect(icon).toHaveClass(className);
    });
  });

  it('applies all available variants correctly', () => {
    variantOptions.forEach(({ variant, className }) => {
      // Clean up the DOM before each iteration
      cleanup();
      
      render(<Icon {...mockIconProps} variant={variant} data-testid={`icon-${variant}`} />);
      const icons = screen.getAllByRole('img');
      const icon = icons[0]; // Take the first icon
      
      const materialIcon = icon.querySelector(`.${className}`);
      expect(materialIcon).toBeInTheDocument();
    });
  });

  it('applies states correctly', () => {
    stateOptions.forEach(({ disabled, inheritColor, className }) => {
      // Clean up the DOM before each iteration
      cleanup();
      
      render(
        <div style={inheritColor ? { color: 'blue' } : {}}>
          <Icon 
            {...mockIconProps} 
            disabled={disabled} 
            inheritColor={!!inheritColor} 
            data-testid={`icon-${className}`} 
          />
        </div>
      );
      
      // Use getAllByRole and take the first element
      const icons = screen.getAllByRole('img');
      const icon = icons[0];
      
      expect(icon).toHaveClass(className);
      
      // Verify that the Material Icons icon is present
      const materialIcon = icon.querySelector('.material-icons-outlined, .material-icons');
      expect(materialIcon).toBeInTheDocument();
    });
  });

  it('applies custom color correctly', () => {
    const customColor = '#ff0000';
    render(<Icon {...mockIconProps} color={customColor} />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveStyle(`color: ${customColor}`);
  });

  it('applies custom styles correctly', () => {
    const customStyle = { backgroundColor: '#f0f0f0' };
    render(<Icon {...mockIconProps} style={customStyle} />);
    const icon = screen.getByRole('img');
    expect(icon).toHaveStyle('background-color: #f0f0f0');
  });

  it('passes additional attributes correctly', () => {
    render(<Icon {...mockIconProps} aria-label="Home icon" />);
    const icon = screen.getByLabelText('Home icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('aria-label', 'Home icon');
  });

  it('renders correctly with a custom SVG component', () => {
    render(<Icon {...mockIconProps} component={MockSvgIcon} />);
    const svg = screen.getByTestId('mock-svg');
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
  });

  it('applies custom classes', () => {
    const customClass = 'my-custom-class';
    render(<Icon name="home" className={customClass} aria-label="Custom icon" />);
    
    const icon = screen.getByLabelText('Custom icon');
    expect(icon).toHaveClass(customClass);
    expect(icon).toHaveClass('icon');
  });

  it('passes HTML attributes correctly', () => {
    const title = 'Home icon';
    render(<Icon name="home" title={title} aria-label="Home" />);
    
    const icon = screen.getByLabelText('Home');
    expect(icon).toHaveAttribute('title', title);
  });
});
