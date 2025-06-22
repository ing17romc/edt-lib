import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageButton from './index';

describe('ImageButton Component', () => {
  test('renders with correct icon and text', () => {
    render(
      <ImageButton
        id="test-button"
        text="Test Button"
        icon="add"
        size="MD"
      />
    );

    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('id', 'test-button');
    expect(button).toHaveAttribute('name', 'test-button');

    const icon = screen.getByText('add');
    expect(icon).toBeInTheDocument();
  });

  test('calls onClick when clicked and not disabled', () => {
    const mockOnClick = jest.fn();
    render(
      <ImageButton
        id="clickable-button"
        text="Clickable Button"
        icon="edit"
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole('button', { name: /clickable button/i });
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const mockOnClick = jest.fn();
    render(
      <ImageButton
        id="disabled-button"
        text="Disabled Button"
        icon="delete"
        disabled
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole('button', { name: /disabled button/i });
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('has correct type based on onClick prop', () => {
    render(
      <>
        <ImageButton
          id="submit-button"
          text="Submit Button"
          icon="save"
          onClick={() => { /* noop: required for test */ expect(true).toBe(true); }}
        />
        <ImageButton
          id="regular-button"
          text="Regular Button"
          icon="cancel"
        />
      </>
    );

    const submitButton = screen.getByRole('button', { name: /submit button/i });
    const regularButton = screen.getByRole('button', { name: /regular button/i });

    expect(submitButton).toHaveAttribute('type', 'button');
    expect(regularButton).toHaveAttribute('type', 'submit');
  });

  test('has correct aria attributes', () => {
    render(
      <>
        <ImageButton
          id="enabled-button"
          text="Enabled Button"
          icon="search"
        />
        <ImageButton
          id="disabled-button"
          text="Disabled Button"
          icon="info"
          disabled
        />
      </>
    );

    const enabledButton = screen.getByRole('button', { name: /enabled button/i });
    const disabledButton = screen.getByRole('button', { name: /disabled button/i });

    expect(enabledButton).toHaveAttribute('aria-label', 'Enabled Button');
    expect(enabledButton).toHaveAttribute('aria-disabled', 'false');
    expect(disabledButton).toHaveAttribute('aria-label', 'Disabled Button');
    expect(disabledButton).toHaveAttribute('aria-disabled', 'true');
  });
});
