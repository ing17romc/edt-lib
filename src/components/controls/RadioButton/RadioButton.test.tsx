import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './index';

describe('RadioButton Component', () => {
  const mockId = 'test-radio';
  const mockName = 'test-group';
  const mockLabel = 'Opción de prueba';
  const mockValue = 'test-value';

  const mockProps = {
    id: mockId,
    name: mockName,
    label: mockLabel,
    value: mockValue
  };

  test('renders with required props', () => {
    render(
      <RadioButton {...mockProps} />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('id', mockId);
    expect(radio).toHaveAttribute('name', mockName);
    expect(radio).toHaveAttribute('value', mockValue);
    expect(screen.getByLabelText(mockLabel)).toBeInTheDocument();
  });

  test('calls eventChange when clicked', () => {
    const mockEventChange = jest.fn();

    render(
      <RadioButton
        {...mockProps}
        eventChange={mockEventChange}
      />
    );

    const radio = screen.getByRole('radio');
    fireEvent.click(radio);
    expect(mockEventChange).toHaveBeenCalledTimes(1);
  });

  test('handles disabled state', () => {
    render(
      <RadioButton
        {...mockProps}
        disabled={true}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeDisabled();
    expect(radio).toHaveAttribute('aria-disabled', 'true');
    expect(radio.parentElement).toHaveClass('DISABLED');
  });

  test('handles read-only state', () => {
    render(
      <RadioButton
        {...mockProps}
        readOnly={true}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-readonly', 'true');
    expect(radio.parentElement).toHaveClass('READ_ONLY');
  });

  test('handles required state', () => {
    render(
      <RadioButton
        {...mockProps}
        required={true}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeRequired();
    expect(radio).toHaveAttribute('aria-required', 'true');
  });

  test('handles checked state', () => {
    render(
      <RadioButton
        {...mockProps}
        value={mockId}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeChecked();
  });

  test('has correct aria-label', () => {
    render(
      <RadioButton {...mockProps} />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toHaveAttribute('aria-label', mockLabel);
  });

  test('has correct label association', () => {
    render(
      <RadioButton {...mockProps} />
    );

    const radio = screen.getByRole('radio');
    // Buscar el label explícitamente en el DOM
    const { container } = render(<RadioButton {...mockProps} />);
    const label = container.querySelector(`label[for="${mockId}"]`);
    expect(label).toBeInTheDocument();
    expect(label).toHaveTextContent(mockLabel);
  });
});
