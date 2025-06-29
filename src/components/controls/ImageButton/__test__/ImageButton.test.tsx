import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageButton from '../index';
import { defaultProps, disabledProps, clickableProps } from './mocks';
import { ALL_ICONS } from '../../../utils/IconTypes';

describe('ImageButton Component', () => {
  test('renders with correct icon and text', () => {
    render(<ImageButton {...defaultProps} />);

    const button = screen.getByRole('button', { name: defaultProps.text });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('id', defaultProps.id);
    expect(button).toHaveAttribute('name', defaultProps.id);

    const icon = screen.getByText(defaultProps.icon);
    expect(icon).toBeInTheDocument();
  });

  test('calls onClick when clicked and not disabled', () => {
    render(<ImageButton {...clickableProps} />);

    const button = screen.getByRole('button', { name: clickableProps.text });
    fireEvent.click(button);
    expect(clickableProps.onClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick when disabled', () => {
    const mockOnClick = jest.fn();
    render(
      <ImageButton
        {...disabledProps}
        onClick={mockOnClick}
      />
    );

    const button = screen.getByRole('button', { name: disabledProps.text });
    fireEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  test('has correct type based on onClick prop', () => {
    render(
      <>
        <ImageButton
          id="submit-button"
          text="Submit Button"
          icon={ALL_ICONS.SAVE}
          onClick={() => { /* noop: required for test */ expect(true).toBe(true); }}
        />
        <ImageButton
          id="regular-button"
          text="Regular Button"
          icon={ALL_ICONS.CANCEL}
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
          icon={ALL_ICONS.SEARCH}
        />
        <ImageButton
          id="disabled-button"
          text="Disabled Button"
          icon={ALL_ICONS.INFO}
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
