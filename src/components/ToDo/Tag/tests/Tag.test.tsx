import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tag from '..';
import { mockOnClose, defaultTagProps, closableTagProps, disabledTagProps, allVariants, allSizes } from './mocks';
import { ComponentVariant, ComponentSize } from '../../../types';

describe('Tag Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Renderizado básico', () => {
    test('se renderiza correctamente con las props por defecto', () => {
      render(<Tag {...defaultTagProps} />);
      expect(screen.getByText('Etiqueta')).toBeInTheDocument();
    });

    test('aplica la variante primary por defecto', () => {
      const { container } = render(<Tag>Test</Tag>);
      expect(container.firstChild).toHaveClass('tag--primary');
    });

    test('aplica el tamaño medium por defecto', () => {
      const { container } = render(<Tag>Test</Tag>);
      expect(container.firstChild).toHaveClass('tag--medium');
    });
  });

  describe('Variantes', () => {
    allVariants.forEach(({ variant, children }) => {
      test(`renderiza correctamente la variante ${variant}`, () => {
        const { container } = render(<Tag variant={variant as ComponentVariant}>{children}</Tag>);
        expect(container.firstChild).toHaveClass(`tag--${variant}`);
      });
    });
  });

  describe('Tamaños', () => {
    allSizes.forEach(({ size, children }) => {
      test(`renderiza correctamente el tamaño ${size}`, () => {
        const { container } = render(<Tag size={size as ComponentSize}>{children}</Tag>);
        expect(container.firstChild).toHaveClass(`tag--${size}`);
      });
    });
  });

  describe('Closable', () => {
    test('no muestra botón de cierre por defecto', () => {
      render(<Tag {...defaultTagProps} />);
      expect(screen.queryByRole('button', { name: /cerrar/i })).not.toBeInTheDocument();
    });

    test('muestra botón de cierre cuando closable es true', () => {
      render(<Tag {...closableTagProps} />);
      expect(screen.getByRole('button', { name: /cerrar/i })).toBeInTheDocument();
    });

    test('ejecuta onClose al hacer clic en el botón de cierre', () => {
      render(<Tag {...closableTagProps} />);
      fireEvent.click(screen.getByRole('button', { name: /cerrar/i }));
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Estado deshabilitado', () => {
    test('aplica la clase disabled', () => {
      const { container } = render(<Tag {...disabledTagProps} />);
      expect(container.firstChild).toHaveClass('tag--disabled');
    });

    test('no ejecuta onClose cuando está deshabilitado', () => {
      render(<Tag {...disabledTagProps} closable onClose={mockOnClose} />);
      const closeBtn = screen.getByRole('button', { name: /cerrar/i });
      expect(closeBtn).toBeDisabled();
    });
  });
});
