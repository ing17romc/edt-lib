import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tag from '..';
import { mockOnClose, defaultTagProps, closableTagProps, disabledTagProps, allVariants, allSizes } from './mocks';
import { ComponentVariant, ComponentSize } from '../../../types';

describe('Tag Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic rendering', () => {
    test('renders correctly with default props', () => {
      render(<Tag {...defaultTagProps} />);
      expect(screen.getByText('Label')).toBeInTheDocument();
    });

    test('applies the primary variant by default', () => {
      const { container } = render(<Tag>Test</Tag>);
      expect(container.firstChild).toHaveClass('tag--primary');
    });

    test('applies the medium size by default', () => {
      const { container } = render(<Tag>Test</Tag>);
      expect(container.firstChild).toHaveClass('tag--medium');
    });
  });

  describe('Variants', () => {
    allVariants.forEach(({ variant, children }) => {
      test(`renders the ${variant} variant correctly`, () => {
        const { container } = render(<Tag variant={variant as ComponentVariant}>{children}</Tag>);
        expect(container.firstChild).toHaveClass(`tag--${variant}`);
      });
    });
  });

  describe('Sizes', () => {
    allSizes.forEach(({ size, children }) => {
      test(`renders the ${size} size correctly`, () => {
        const { container } = render(<Tag size={size as ComponentSize}>{children}</Tag>);
        expect(container.firstChild).toHaveClass(`tag--${size}`);
      });
    });
  });

  describe('Closable', () => {
    test('does not show close button by default', () => {
      render(<Tag {...defaultTagProps} />);
      expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    });

    test('shows close button when closable is true', () => {
      render(<Tag {...closableTagProps} />);
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    });

    test('executes onClose when clicking the close button', () => {
      render(<Tag {...closableTagProps} />);
      fireEvent.click(screen.getByRole('button', { name: /close/i }));
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Disabled state', () => {
    test('applies the disabled class', () => {
      const { container } = render(<Tag {...disabledTagProps} />);
      expect(container.firstChild).toHaveClass('tag--disabled');
    });

    test('does not execute onClose when disabled', () => {
      render(<Tag {...disabledTagProps} closable onClose={mockOnClose} />);
      const closeBtn = screen.getByRole('button', { name: /close/i });
      expect(closeBtn).toBeDisabled();
    });
  });
});
