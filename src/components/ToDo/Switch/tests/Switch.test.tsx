import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Switch from '..';
import { mockOnChange, defaultSwitchProps, checkedSwitchProps, disabledSwitchProps, allSizes } from './mocks';
import { ComponentSize } from '../../../types';

describe('Switch Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Renderizado básico', () => {
    test('se renderiza correctamente con las props por defecto', () => {
      render(<Switch {...defaultSwitchProps} />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
      expect(screen.getByText('Activar opción')).toBeInTheDocument();
    });

    test('renderiza sin etiqueta', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    test('refleja el estado checked correctamente', () => {
      render(<Switch {...checkedSwitchProps} />);
      expect(screen.getByRole('switch')).toBeChecked();
    });

    test('refleja el estado unchecked correctamente', () => {
      render(<Switch {...defaultSwitchProps} />);
      expect(screen.getByRole('switch')).not.toBeChecked();
    });
  });

  describe('Comportamiento', () => {
    test('llama a onChange al hacer clic', () => {
      render(<Switch {...defaultSwitchProps} />);
      fireEvent.click(screen.getByRole('switch'));
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith(true);
    });
  });

  describe('Tamaños', () => {
    allSizes.forEach((size) => {
      test(`renderiza correctamente el tamaño ${size}`, () => {
        const { container } = render(<Switch size={size as ComponentSize} />);
        expect(container.firstChild).toHaveClass(`switch--${size}`);
      });
    });
  });

  describe('Estado deshabilitado', () => {
    test('aplica la clase disabled', () => {
      const { container } = render(<Switch {...disabledSwitchProps} />);
      expect(container.firstChild).toHaveClass('switch--disabled');
    });

    test('el input está deshabilitado', () => {
      render(<Switch {...disabledSwitchProps} />);
      expect(screen.getByRole('switch')).toBeDisabled();
    });
  });
});
