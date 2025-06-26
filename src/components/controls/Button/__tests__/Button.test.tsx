import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../index';

describe('Button Component', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders button with correct text', () => {
    render(
      <Button
        title="Click me"
        buttonType="primary"
        size="md"
      />
    );

    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', () => {
    render(
      <Button
        title="Click me"
        buttonType="primary"
        size="md"
        onClick={mockOnClick}
      />
    );

    const button = screen.getByText('Click me');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct classes based on props', () => {
    render(
      <Button
        title="Test"
        buttonType="primary"
        size="lg"
      />
    );

    const button = screen.getByText('Test');
    expect(button).toHaveClass('primary');
    expect(button).toHaveClass('lg');
  });

  test('renders with all size variants', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'] as const;
    
    sizes.forEach(size => {
      render(
        <Button
          key={size}
          title={`${size} Button`}
          buttonType="primary"
          size={size}
        />
      );
      const button = screen.getByText(`${size} Button`);
      expect(button).toHaveClass(size);
    });
  });

  test('applies custom className when provided', () => {
    render(
      <Button
        title="Custom Class"
        className="custom-button"
        buttonType="primary"
        size="md"
      />
    );

    const button = screen.getByText('Custom Class');
    expect(button).toHaveClass('custom-button');
  });

  test('applies disabled attribute when disabled', () => {
    render(
      <Button
        title="Disabled Button"
        buttonType="primary"
        size="md"
        disabled
      />
    );

    const button = screen.getByText('Disabled Button');
    expect(button).toBeDisabled();
  });

  test('does not call onClick when disabled', () => {
    render(
      <Button
        title="Disabled Button"
        buttonType="primary"
        size="md"
        disabled
        onClick={mockOnClick}
      />
    );

    const button = screen.getByText('Disabled Button');
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
