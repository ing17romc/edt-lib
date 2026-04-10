import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { 
  DefaultCheckButton, 
  ControlledCheckButton, 
  DisabledCheckButton, 
  CheckedCheckButton, 
  CustomClassCheckButton,
  LargeCheckButton,
  MediumCheckButton,
  SmallCheckButton,
  LongLabelCheckButton
} from './mocks';

describe('CheckButton', () => {
  it('renders correctly with the provided label', () => {
    render(<DefaultCheckButton label="Test Checkbox" />);
    expect(screen.getByText('Test Checkbox')).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(<DefaultCheckButton label="Click me" onChange={handleChange} />);
    
    const checkbox = screen.getByLabelText('Click me');
    fireEvent.click(checkbox);
    
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('does not respond to click when disabled', () => {
    const handleChange = vi.fn();
    render(<DisabledCheckButton onChange={handleChange} />);
    
    const checkbox = screen.getByLabelText('Disabled option');
    fireEvent.click(checkbox);
    
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('shows initial state as checked when checked is true', () => {
    render(<CheckedCheckButton />);
    const checkbox = screen.getByLabelText('Selected option') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it('applies the custom class when provided', () => {
    render(<CustomClassCheckButton />);
    const label = screen.getByText('With custom class').closest('label');
    expect(label).toHaveClass('custom-checkbox-class');
  });

  it('applies the large size class correctly', () => {
    render(<LargeCheckButton />);
    const label = screen.getByText('Large option').closest('label');
    expect(label).toHaveClass('check-button--large');
  });

  it('applies the medium size class correctly', () => {
    render(<MediumCheckButton />);
    const label = screen.getByText('Medium option').closest('label');
    expect(label).toHaveClass('check-button');
    // Verify it does not have other size classes
    expect(label).not.toHaveClass('check-button--small');
    expect(label).not.toHaveClass('check-button--large');
  });

  it('applies the small size class correctly', () => {
    render(<SmallCheckButton />);
    const label = screen.getByText('Small option').closest('label');
    expect(label).toHaveClass('check-button--small');
  });

  it('applies the medium size by default when not specified', () => {
    render(<DefaultCheckButton label="Default size" />);
    const label = screen.getByText('Default size').closest('label');
    expect(label).toHaveClass('check-button');
    expect(label).not.toHaveClass('check-button--small');
    expect(label).not.toHaveClass('check-button--large');
  });

  it('handles long labels correctly', () => {
    render(<LongLabelCheckButton />);
    expect(screen.getByText(/This is a very long label/)).toBeInTheDocument();
  });

  it('updates state when used as a controlled component', () => {
    const { rerender } = render(<ControlledCheckButton />);
    const checkbox = screen.getByLabelText('Example option') as HTMLInputElement;
    
    // Initial state
    expect(checkbox.checked).toBe(false);
    
    // Simulate click
    fireEvent.click(checkbox);
    
    // Re-render with the new state
    rerender(<ControlledCheckButton checked={true} />);
    
    // Verify that the state was updated
    expect(checkbox.checked).toBe(true);
  });
});
