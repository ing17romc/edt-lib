import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextArea from '..';
import {
  mockBaseProps,
  mockFullProps,
  mockDisabledProps,
  mockReadOnlyProps,
  mockRequiredProps,
  mockNoPasteProps,
  mockNoCopyProps
} from './mocks';

describe('TextArea Component', () => {
  test('renders with required props', () => {
    render(<TextArea {...mockBaseProps} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute('id', mockBaseProps.id);
    expect(textarea).toHaveValue(mockBaseProps.value);
  });

  test('renders with all props', () => {
    render(<TextArea {...mockFullProps} />);
    
    // Check titles
    if (mockFullProps.titleTop) {
      expect(screen.getByText(mockFullProps.titleTop)).toBeInTheDocument();
    }
    if (mockFullProps.titleBottom) {
      expect(screen.getByText(mockFullProps.titleBottom)).toBeInTheDocument();
    }
    
    // Check placeholder
    const placeholder = mockFullProps.placeholder || '';
    const textarea = screen.getByPlaceholderText(placeholder);
    expect(textarea).toBeInTheDocument();
    
    // Check attributes
    expect(textarea).toHaveAttribute('required');
    if (mockFullProps.rows) {
      expect(textarea).toHaveAttribute('rows', mockFullProps.rows.toString());
    }
    if (mockFullProps.size) {
      expect(textarea).toHaveAttribute('maxLength', mockFullProps.size.toString());
    }
  });

  test('handles events correctly', () => {
    const mockEventChange = jest.fn();
    const mockEventFocus = jest.fn();
    const mockEventBlur = jest.fn();
    const mockEventKeyDown = jest.fn();
    
    render(
      <TextArea 
        {...mockBaseProps} 
        eventChange={mockEventChange}
        eventFocus={mockEventFocus}
        eventBlur={mockEventBlur}
        eventKeyDown={mockEventKeyDown}
      />
    );
    
    const textarea = screen.getByRole('textbox');
    
    // Simulate events
    fireEvent.change(textarea, { target: { value: 'new value' } });
    fireEvent.focus(textarea);
    fireEvent.blur(textarea);
    
    // Test Enter key (should not call eventKeyDown)
    fireEvent.keyDown(textarea, { key: 'Enter' });
    expect(mockEventKeyDown).not.toHaveBeenCalled();
    
    // Test non-Enter key (should call eventKeyDown)
    fireEvent.keyDown(textarea, { key: 'a' });
    
    // Verify handlers were called
    expect(mockEventChange).toHaveBeenCalledTimes(1);
    expect(mockEventFocus).toHaveBeenCalledTimes(1);
    expect(mockEventBlur).toHaveBeenCalledTimes(1);
    expect(mockEventKeyDown).toHaveBeenCalledTimes(1);
  });

  test('renders disabled state correctly', () => {
    render(<TextArea {...mockDisabledProps} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
    expect(textarea).toHaveAttribute('aria-disabled', 'true');
    expect(textarea).toHaveClass('disabled');
  });

  test('renders read-only state correctly', () => {
    render(<TextArea {...mockReadOnlyProps} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toHaveAttribute('readonly');
    expect(textarea).toHaveAttribute('aria-readonly', 'true');
    expect(textarea).toHaveClass('read-only');
  });

  test('renders required state correctly', () => {
    render(<TextArea {...mockRequiredProps} />);
    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeRequired();
    expect(textarea).toHaveAttribute('aria-required', 'true');
  });

  test('prevents paste when noPaste is true', () => {
    const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');
    render(<TextArea {...mockNoPasteProps} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.paste(textarea);
    
    expect(preventDefaultSpy).toHaveBeenCalled();
    preventDefaultSpy.mockRestore();
  });

  test('prevents copy when noCopy is true', () => {
    const preventDefaultSpy = jest.spyOn(Event.prototype, 'preventDefault');
    render(<TextArea {...mockNoCopyProps} />);
    
    const textarea = screen.getByRole('textbox');
    fireEvent.copy(textarea);
    
    expect(preventDefaultSpy).toHaveBeenCalled();
    preventDefaultSpy.mockRestore();
  });
});
