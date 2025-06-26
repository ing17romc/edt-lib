import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from '..';
import {
  defaultProps,
  disabledProps,
  requiredProps,
  readOnlyProps,
  mockEventChange,
} from './mocks';

describe('RadioButton Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders with required props', () => {
    render(<RadioButton {...defaultProps} />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('id', defaultProps.id);
    expect(radio).toHaveAttribute('name', defaultProps.name);
    expect(radio).toHaveAttribute('value', defaultProps.value);
    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
  });

  test('calls eventChange when clicked', () => {
    render(
      <RadioButton
        {...defaultProps}
        eventChange={mockEventChange}
      />
    );

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(mockEventChange).toHaveBeenCalledTimes(1);
  });

  test('handles disabled state', () => {
    render(<RadioButton {...disabledProps} />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
    expect(radio).toHaveAttribute('aria-disabled', 'true');
    expect(radio.parentElement).toHaveClass('disabled');
  });

  test('handles read-only state', () => {
    render(<RadioButton {...readOnlyProps} />);

    const radio = screen.getByRole('radio');
    expect(radio.parentElement).toHaveClass('read-only');
  });

  test('handles required state', () => {
    render(<RadioButton {...requiredProps} />);

    const radio = screen.getByRole('radio');
    expect(radio).toBeRequired();
  });

  test('handles checked state', () => {
    render(
      <RadioButton
        {...defaultProps}
        value={defaultProps.id}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  test('has correct aria-label', () => {
    render(<RadioButton {...defaultProps} />);
    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
  });
});
