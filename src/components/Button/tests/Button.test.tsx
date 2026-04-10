import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '..';
import { 
  mockOnClick, 
  defaultButtonProps, 
  disabledButtonProps,
  fullWidthButtonProps,
  allVariants,
  allSizes,
  allCombinations
} from './mocks';

describe('Button Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic rendering', () => {
    test('renders correctly with default props', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });
      
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('button--primary');
      expect(button).toHaveClass('button--medium');
      expect(button).not.toBeDisabled();
      expect(button).toHaveAttribute('type', 'button');
    });

    test('applies the button--fullWidth class when fullWidth is true', () => {
      render(<Button {...fullWidthButtonProps} />);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('button--fullWidth');
    });
  });

  describe('Behavior', () => {
    test('executes the onClick function when clicked', () => {
      render(<Button {...defaultButtonProps} />);
      const button = screen.getByRole('button', { name: /click me/i });
      
      fireEvent.click(button);
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('does not execute onClick when disabled', () => {
      render(<Button {...disabledButtonProps} />);
      const button = screen.getByRole('button', { name: /disabled button/i });
      
      fireEvent.click(button);
      expect(mockOnClick).not.toHaveBeenCalled();
      expect(button).toBeDisabled();
    });
  });

  describe('Variants', () => {
    allVariants.forEach(({ variant, children }) => {
      test(`renders the ${variant} variant correctly`, () => {
        render(<Button variant={variant}>{children}</Button>);
        const button = screen.getByRole('button', { name: children });
        
        expect(button).toHaveClass(`button--${variant}`);
      });

      test('passes additional HTML attributes correctly', () => {
        const ariaLabel = 'Example button';
        const className = 'custom-class';
        
        render(
          <Button 
            aria-label={ariaLabel}
            className={className}
            data-testid="button-test"
          >
            Button with attributes
          </Button>
        );
        
        const button = screen.getByTestId('button-test');
        expect(button).toHaveAttribute('aria-label', ariaLabel);
        expect(button).toHaveClass(className);
        expect(button).toHaveClass('button');
      });
    });
  });

  describe('Sizes', () => {
    allSizes.forEach(({ size, children }) => {
      test(`renders the ${size} size correctly`, () => {
        render(<Button size={size}>{children}</Button>);
        const button = screen.getByRole('button', { name: children });
        
        expect(button).toHaveClass(`button--${size}`);
      });
    });
  });

  describe('Combinations', () => {
    allCombinations.forEach(({ variant, size, children }) => {
      test(`renders the ${variant} combination with ${size} size correctly`, () => {
        render(
          <Button variant={variant} size={size}>
            {children}
          </Button>
        );
        
        const button = screen.getByRole('button', { name: children });
        expect(button).toHaveClass(`button--${variant}`);
        expect(button).toHaveClass(`button--${size}`);
      });
    });
  });

  describe('Additional attributes', () => {
    test('passes custom classes correctly', () => {
      const customClass = 'my-custom-class';
      render(<Button className={customClass}>Custom Button</Button>);
      
      const button = screen.getByRole('button', { name: /custom button/i });
      expect(button).toHaveClass(customClass);
    });

    test('passes custom HTML attributes correctly', () => {
      render(
        <Button data-testid="test-button" aria-label="Test button">
          Test Button
        </Button>
      );
      
      const button = screen.getByTestId('test-button');
      expect(button).toHaveAttribute('aria-label', 'Test button');
    });

    test('uses the ref correctly', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button with Ref</Button>);
      
      expect(ref.current).toBeInTheDocument();
      expect(ref.current?.tagName).toBe('BUTTON');
    });
  });
});
