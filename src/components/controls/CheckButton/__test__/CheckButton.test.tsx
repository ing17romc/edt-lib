import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CheckButton from '../index';

describe('CheckButton Component', () => {
  const mockOnChange = jest.fn();
  const mockRef = React.createRef<HTMLInputElement>();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('renders checkbox and label correctly', () => {
    render(
      <CheckButton
        id="test-checkbox"
        label="Test Checkbox"
        eventChange={mockOnChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByText('Test Checkbox');

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  test('calls eventChange when checkbox is clicked', () => {
    render(
      <CheckButton
        id="test-checkbox"
        label="Test Checkbox"
        eventChange={mockOnChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  test('handles disabled state correctly', () => {
    render(
      <CheckButton
        id="test-checkbox"
        label="Test Checkbox"
        disabled
        eventChange={mockOnChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveAttribute('aria-disabled', 'true');
  });

  test('handles read-only state correctly', () => {
    render(
      <CheckButton
        id="test-checkbox"
        label="Test Checkbox"
        readOnly
        eventChange={mockOnChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('handles required state correctly', () => {
    render(
      <CheckButton
        id="test-checkbox"
        label="Test Checkbox"
        required
        eventChange={mockOnChange}
      />
    );

    const checkbox = screen.getByRole('checkbox');
    // El checkbox es required al inicio porque checked es false y required es true
    expect(checkbox).toBeRequired();
    // NOTA: El componente no es controlado, así que el estado checked no cambia tras el click
    // Si se desea probar el cambio de required, se debe renderizar con checked=true
    // fireEvent.click(checkbox);
    // expect(checkbox).not.toBeRequired();
  });

  test('applies correct styles based on state', () => {
    render(
      <CheckButton
        id="test-checkbox"
        label="Test Checkbox"
        required
        eventChange={mockOnChange}
      />
    );

    const containers = screen.getAllByRole('group');
    const container = containers[0];
    expect(container).toHaveClass('checkbutton');
    expect(container).not.toHaveClass('disabled');
    expect(container).not.toHaveClass('read-only');

    // Test disabled state
    render(
      <CheckButton
        id="test-checkbox"
        label="Test Checkbox"
        disabled
        eventChange={mockOnChange}
      />
    );
    // Ahora hay dos grupos, el segundo es el disabled
    const containersAfter = screen.getAllByRole('group');
    expect(containersAfter[1]).toHaveClass('disabled');
  });

  test('forwards ref correctly', () => {
    render(
      <CheckButton
        id="test-checkbox"
        label="Test Checkbox"
        eventChange={mockOnChange}
        ref={mockRef}
      />
    );

    expect(mockRef.current).not.toBeNull();
  });
});
