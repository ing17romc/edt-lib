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
    jest.clearAllMocks();
  });

  describe('Renderizado básico', () => {
    test('se renderiza correctamente con las props por defecto', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });
      
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('button--primary');
      expect(button).toHaveClass('button--medium');
      expect(button).not.toBeDisabled();
      expect(button).toHaveAttribute('type', 'button');
    });

    test('aplica la clase button--fullWidth cuando fullWidth es true', () => {
      render(<Button {...fullWidthButtonProps} />);
      const button = screen.getByRole('button');
      
      expect(button).toHaveClass('button--fullWidth');
    });
  });

  describe('Comportamiento', () => {
    test('ejecuta la función onClick cuando se hace clic', () => {
      render(<Button {...defaultButtonProps} />);
      const button = screen.getByRole('button', { name: /click me/i });
      
      fireEvent.click(button);
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('no ejecuta onClick cuando está deshabilitado', () => {
      render(<Button {...disabledButtonProps} />);
      const button = screen.getByRole('button', { name: /disabled button/i });
      
      fireEvent.click(button);
      expect(mockOnClick).not.toHaveBeenCalled();
      expect(button).toBeDisabled();
    });
  });

  describe('Variantes', () => {
    allVariants.forEach(({ variant, children }) => {
      test(`renderiza correctamente la variante ${variant}`, () => {
        render(<Button variant={variant}>{children}</Button>);
        const button = screen.getByRole('button', { name: children });
        
        expect(button).toHaveClass(`button--${variant}`);
      });

      test('pasa correctamente los atributos HTML adicionales', () => {
        const ariaLabel = 'Botón de ejemplo';
        const className = 'clase-personalizada';
        
        render(
          <Button 
            aria-label={ariaLabel}
            className={className}
            data-testid="button-test"
          >
            Botón con atributos
          </Button>
        );
        
        const button = screen.getByTestId('button-test');
        expect(button).toHaveAttribute('aria-label', ariaLabel);
        expect(button).toHaveClass(className);
        expect(button).toHaveClass('button');
      });
    });
  });

  describe('Tamaños', () => {
    allSizes.forEach(({ size, children }) => {
      test(`renderiza correctamente el tamaño ${size}`, () => {
        render(<Button size={size}>{children}</Button>);
        const button = screen.getByRole('button', { name: children });
        
        expect(button).toHaveClass(`button--${size}`);
      });
    });
  });

  describe('Combinaciones', () => {
    allCombinations.forEach(({ variant, size, children }) => {
      test(`renderiza correctamente la combinación ${variant} con tamaño ${size}`, () => {
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

  describe('Atributos adicionales', () => {
    test('pasa correctamente las clases personalizadas', () => {
      const customClass = 'mi-clase-personalizada';
      render(<Button className={customClass}>Custom Button</Button>);
      
      const button = screen.getByRole('button', { name: /custom button/i });
      expect(button).toHaveClass(customClass);
    });

    test('pasa correctamente los atributos HTML personalizados', () => {
      render(
        <Button data-testid="test-button" aria-label="Botón de prueba">
          Test Button
        </Button>
      );
      
      const button = screen.getByTestId('test-button');
      expect(button).toHaveAttribute('aria-label', 'Botón de prueba');
    });

    test('usa correctamente la referencia (ref)', () => {
      const ref = React.createRef<HTMLButtonElement>();
      render(<Button ref={ref}>Button with Ref</Button>);
      
      expect(ref.current).toBeInTheDocument();
      expect(ref.current?.tagName).toBe('BUTTON');
    });
  });
});
