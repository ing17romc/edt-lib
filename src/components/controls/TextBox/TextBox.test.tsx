import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextBox from './index';

describe('TextBox Component', () => {
  const mockId = 'test-input';
  const mockPlaceholder = 'Ingrese texto';
  const mockTitleTop = 'Título superior';
  const mockTitleBottom = 'Título inferior';
  const mockValue = 'Test value';

  const mockProps = {
    id: mockId,
    placeholder: mockPlaceholder,
    titleTop: mockTitleTop,
    titleBottom: mockTitleBottom,
    value: mockValue
  };

  test('renders with required props', () => {
    render(
      <TextBox
        id={mockId}
        value={mockValue}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', mockId);
    expect(input).toHaveValue(mockValue);
  });

  test('renders with titles', () => {
    render(
      <TextBox {...mockProps} />
    );

    const titleTop = screen.getByText(mockTitleTop);
    expect(titleTop).toBeInTheDocument();

    const titleBottom = screen.getByText(mockTitleBottom);
    expect(titleBottom).toBeInTheDocument();
  });

  test('calls event handlers', () => {
    const mockEventChange = jest.fn();
    const mockEventFocus = jest.fn();
    const mockEventBlur = jest.fn();
    const mockEventKeyDown = jest.fn();

    render(
      <TextBox
        {...mockProps}
        eventChange={mockEventChange}
        eventFocus={mockEventFocus}
        eventBlur={mockEventBlur}
        eventKeyDown={mockEventKeyDown}
      />
    );

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new value' } });
    expect(mockEventChange).toHaveBeenCalledTimes(1);

    fireEvent.focus(input);
    expect(mockEventFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(input);
    expect(mockEventBlur).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(input, { key: 'Enter' });
    expect(mockEventKeyDown).not.toHaveBeenCalled();
  });

  test('handles disabled state', () => {
    render(
      <TextBox
        {...mockProps}
        disabled={true}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-disabled', 'true');
    expect(input).toHaveClass('DISABLED');
  });

  test('handles read-only state', () => {
    render(
      <TextBox
        {...mockProps}
        readOnly={true}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('readonly');
    expect(input).toHaveAttribute('aria-readonly', 'true');
    expect(input).toHaveClass('READ_ONLY');
  });

  test('handles password type', () => {
    render(
      <TextBox
        {...mockProps}
        isPassword={true}
      />
    );

    const input = document.querySelector('input[type="password"]');
    expect(input).toBeInTheDocument();
  });

  test('handles required state', () => {
    render(
      <TextBox
        {...mockProps}
        required={true}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toBeRequired();
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  test('handles size prop', () => {
    const customSize = 300;
    render(
      <TextBox
        {...mockProps}
        size={customSize}
      />
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveStyle(`width: ${customSize}px`);
  });

  test('prevents paste when noPaste is true', () => {
    const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');
    render(
      <TextBox
        {...mockProps}
        noPaste={true}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.paste(input);
    expect(preventDefaultSpy).toHaveBeenCalled();
    preventDefaultSpy.mockRestore();
  });

  test('prevents copy when noCopy is true', () => {
    const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');
    render(
      <TextBox
        {...mockProps}
        noCopy={true}
      />
    );
    const input = screen.getByRole('textbox');
    fireEvent.copy(input);
    expect(preventDefaultSpy).toHaveBeenCalled();
    preventDefaultSpy.mockRestore();
  });
});
