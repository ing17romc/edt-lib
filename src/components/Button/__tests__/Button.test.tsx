import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '..';
import { 
  mockOnClick, 
  defaultButtonProps, 
  loadingButtonProps, 
  fullWidthButtonProps,
  allVariants,
  allSizes
} from './mocks';

describe('Button Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('se renderiza correctamente con las props por defecto', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button--primary');
    expect(button).toHaveClass('button--medium');
    expect(button).not.toBeDisabled();
    expect(button).toHaveAttribute('type', 'button');
  });

  test('ejecuta la función onClick cuando se hace clic', () => {
    render(<Button {...defaultButtonProps} />);
    const button = screen.getByRole('button', { name: /click me/i });
    
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('no ejecuta onClick cuando está deshabilitado', () => {
    render(<Button {...defaultButtonProps} disabled />);
    const button = screen.getByRole('button', { name: /click me/i });
    
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('no ejecuta onClick cuando está en estado de carga', () => {
    render(<Button {...defaultButtonProps} loading />);
    const button = screen.getByRole('button', { name: /click me/i });
    
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('muestra el indicador de carga cuando loading es true', () => {
    render(<Button {...loadingButtonProps} />);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('button--loading');
    expect(button).toHaveAttribute('aria-busy', 'true');
  });

  test('aplica la clase fullWidth cuando fullWidth es true', () => {
    render(<Button {...fullWidthButtonProps} />);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('button--fullWidth');
  });

  test('renderiza correctamente todas las variantes', () => {
    const { container } = render(
      <>
        {allVariants.map((props, index) => (
          <Button key={index} {...props} />
        ))}
      </>
    );
    
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(allVariants.length);
    
    allVariants.forEach((props, index) => {
      expect(buttons[index]).toHaveClass(`button--${props.variant}`);
    });
  });

  test('renderiza correctamente todos los tamaños', () => {
    const { container } = render(
      <>
        {allSizes.map((props, index) => (
          <Button key={index} {...props} />
        ))}
      </>
    );
    
    const buttons = container.querySelectorAll('button');
    expect(buttons).toHaveLength(allSizes.length);
    
    allSizes.forEach((props, index) => {
      expect(buttons[index]).toHaveClass(`button--${props.size}`);
    });
  });

  test('aplica correctamente las clases personalizadas', () => {
    const customClass = 'mi-clase-personalizada';
    render(<Button className={customClass}>Custom Button</Button>);
    
    const button = screen.getByRole('button', { name: /custom button/i });
    expect(button).toHaveClass(customClass);
  });

  test('pasa correctamente los atributos HTML adicionales', () => {
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
