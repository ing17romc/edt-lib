import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextArea from './index';

describe('TextArea Component', () => {
  const mockId = 'test-textarea';
  const mockPlaceholder = 'Ingrese texto';
  const mockTitleTop = 'Título superior';
  const mockTitleBottom = 'Título inferior';
  const mockValue = 'Test value';
  const mockRows = 6;
  const mockSize = 300;

  const mockProps = {
    id: mockId,
    placeholder: mockPlaceholder,
    titleTop: mockTitleTop,
    titleBottom: mockTitleBottom,
    value: mockValue,
    rows: mockRows,
    size: mockSize
  };

  test('renders with required props', () => {
    render(
      <TextArea
        id={mockId}
        value={mockValue}
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('id', mockId);
    expect(textarea).toHaveValue(mockValue);
  });

  test('renders with titles', () => {
    render(
      <TextArea {...mockProps} />
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
      <TextArea
        {...mockProps}
        eventChange={mockEventChange}
        eventFocus={mockEventFocus}
        eventBlur={mockEventBlur}
        eventKeyDown={mockEventKeyDown}
      />
    );

    const textarea = screen.getByRole('textbox');

    fireEvent.change(textarea, { target: { value: 'new value' } });
    expect(mockEventChange).toHaveBeenCalledTimes(1);

    fireEvent.focus(textarea);
    expect(mockEventFocus).toHaveBeenCalledTimes(1);

    fireEvent.blur(textarea);
    expect(mockEventBlur).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(textarea, { key: 'Enter' });
    expect(mockEventKeyDown).not.toHaveBeenCalled();
  });

  test('handles disabled state', () => {
    render(
      <TextArea
        {...mockProps}
        disabled={true}
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveAttribute('aria-disabled', 'true');
    expect(textarea).toHaveClass('disabled');
  });

  test('handles read-only state', () => {
    render(
      <TextArea
        {...mockProps}
        readOnly={true}
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('readonly');
    expect(textarea).toHaveAttribute('aria-readonly', 'true');
    expect(textarea).toHaveClass('read-only');
  });

  test('handles required state', () => {
    render(
      <TextArea
        {...mockProps}
        required={true}
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeRequired();
    expect(textarea).toHaveAttribute('aria-required', 'true');
  });

  test('handles rows prop', () => {
    render(
      <TextArea
        {...mockProps}
        rows={mockRows}
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('rows', String(mockRows));
  });

  test('handles size prop', () => {
    render(
      <TextArea
        {...mockProps}
        size={mockSize}
      />
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('maxLength', String(mockSize));
  });

  test('prevents paste when noPaste is true', () => {
    const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');
    render(
      <TextArea
        {...mockProps}
        noPaste={true}
      />
    );

    const textarea = screen.getByRole('textbox');
    fireEvent.paste(textarea);
    expect(preventDefaultSpy).toHaveBeenCalled();
    preventDefaultSpy.mockRestore();
  });

  test('prevents copy when noCopy is true', () => {
    const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');
    render(
      <TextArea
        {...mockProps}
        noCopy={true}
      />
    );

    const textarea = screen.getByRole('textbox');
    fireEvent.copy(textarea);
    expect(preventDefaultSpy).toHaveBeenCalled();
    preventDefaultSpy.mockRestore();
  });
});
