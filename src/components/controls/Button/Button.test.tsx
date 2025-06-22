import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './index';

describe('Button Component', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders button with correct text', () => {
    render(
      <Button
        title="Click me"
        type="PRIMARY"
        size="MD"
      />
    );

    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', () => {
    render(
      <Button
        title="Click me"
        onClick={mockOnClick}
      />
    );

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('disables button when disabled prop is true', () => {
    render(
      <Button
        title="Disabled"
        disabled
      />
    );

    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  test('applies correct classes based on type and size', () => {
    render(
      <Button
        title="Test"
        type="SUCCESS"
        size="LG"
      />
    );

    const button = screen.getByText('Test');
    expect(button).toHaveClass('success');
    expect(button).toHaveClass('lg');
  });

  test('handles submit type correctly when no onClick is provided', () => {
    render(
      <Button
        title="Submit"
      />
    );

    const button = screen.getByText('Submit');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('handles button type correctly when onClick is provided', () => {
    render(
      <Button
        title="Click"
        onClick={mockOnClick}
      />
    );

    const button = screen.getByText('Click');
    expect(button).toHaveAttribute('type', 'button');
  });
});
