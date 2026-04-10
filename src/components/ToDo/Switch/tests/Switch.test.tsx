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

  describe('Basic rendering', () => {
    test('renders correctly with default props', () => {
      render(<Switch {...defaultSwitchProps} />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
      expect(screen.getByText('Enable option')).toBeInTheDocument();
    });

    test('renders without a label', () => {
      render(<Switch />);
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    test('reflects the checked state correctly', () => {
      render(<Switch {...checkedSwitchProps} />);
      expect(screen.getByRole('switch')).toBeChecked();
    });

    test('reflects the unchecked state correctly', () => {
      render(<Switch {...defaultSwitchProps} />);
      expect(screen.getByRole('switch')).not.toBeChecked();
    });
  });

  describe('Behavior', () => {
    test('calls onChange on click', () => {
      render(<Switch {...defaultSwitchProps} />);
      fireEvent.click(screen.getByRole('switch'));
      expect(mockOnChange).toHaveBeenCalledTimes(1);
      expect(mockOnChange).toHaveBeenCalledWith(true);
    });
  });

  describe('Sizes', () => {
    allSizes.forEach((size) => {
      test(`renders the ${size} size correctly`, () => {
        const { container } = render(<Switch size={size as ComponentSize} />);
        expect(container.firstChild).toHaveClass(`switch--${size}`);
      });
    });
  });

  describe('Disabled state', () => {
    test('applies the disabled class', () => {
      const { container } = render(<Switch {...disabledSwitchProps} />);
      expect(container.firstChild).toHaveClass('switch--disabled');
    });

    test('the input is disabled', () => {
      render(<Switch {...disabledSwitchProps} />);
      expect(screen.getByRole('switch')).toBeDisabled();
    });
  });
});
