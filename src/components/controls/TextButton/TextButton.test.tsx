import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextButton from './index';

describe('TextButton Component', () => {
  const mockOnClick = jest.fn();
  const mockId = 'test-button';
  const mockText = 'Click me';

  const mockProps = {
    id: mockId,
    text: mockText,
    disabled: false,
    onClick: mockOnClick,
    type: 'PRIMARY'
  };

  test('renders with required props', () => {
    render(
      <TextButton
        id={mockId}
        text={mockText}
      />
    );

    const button = screen.getByRole('button', { name: mockText });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('id', mockId);
    expect(button).toHaveTextContent(mockText);
  });

  test('calls onClick when clicked', () => {
    render(
      <TextButton {...mockProps} />
    );

    const button = screen.getByRole('button', { name: mockText });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(
      <TextButton
        {...mockProps}
        disabled={true}
      />
    );

    const button = screen.getByRole('button', { name: mockText });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  test('has correct type based on onClick prop', () => {
    const { getByRole, unmount } = render(
      <TextButton
        id={mockId}
        text={mockText}
        onClick={mockOnClick}
      />
    );
    const button = getByRole('button', { name: mockText });
    expect(button).toHaveAttribute('type', 'button');
    unmount();

    const { getByRole: getByRole2 } = render(
      <TextButton
        id={mockId}
        text={mockText}
      />
    );
    const submitButton = getByRole2('button', { name: mockText });
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  test('has correct style classes', () => {
    const testCases = [
      { type: 'PRIMARY', expectedClass: 'textButton PRIMARY' },
      { type: 'SECONDARY', expectedClass: 'textButton SECONDARY' },
      { type: 'DANGER', expectedClass: 'textButton DANGER' },
      { type: 'SUCCESS', expectedClass: 'textButton SUCCESS' },
      { type: 'WARNING', expectedClass: 'textButton WARNING' },
      { type: 'INFO', expectedClass: 'textButton INFO' }
    ];

    testCases.forEach(({ type, expectedClass }) => {
      const { getByRole, unmount } = render(
        <TextButton
          {...mockProps}
          type={type}
        />
      );
      const button = getByRole('button', { name: mockText });
      expect(button).toHaveClass(expectedClass);
      unmount();
    });
  });

  test('has disabled class when disabled', () => {
    render(
      <TextButton
        {...mockProps}
        disabled={true}
      />
    );

    const button = screen.getByRole('button', { name: mockText });
    expect(button).toHaveClass('DISABLED');
  });
});
