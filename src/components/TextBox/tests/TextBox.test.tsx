import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentSize } from '../../types';
import TextBox from '../';
import { 
  mockTextBoxProps, 
  mockDisabledTextBoxProps, 
  mockErrorTextBoxProps, 
  mockFullWidthTextBoxProps,
  mockWithAdornmentsTextBoxProps
} from './mocks';

describe('TextBox Component', () => {
  it('renders correctly with default properties', () => {
    render(<TextBox label="Test field" />);
    const input = screen.getByLabelText('Test field');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('applies custom class when provided', () => {
    render(<TextBox {...mockTextBoxProps} />);
    const container = screen.getByTestId('textbox').parentElement;
    expect(container).toHaveClass('test-class');
  });

  it('handles the onChange event correctly', () => {
    const handleChange = vi.fn();
    render(
      <TextBox 
        label="Test field" 
        onChange={handleChange} 
      />
    );
    const input = screen.getByLabelText('Test field');
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('disables correctly when the disabled property is true', () => {
    render(<TextBox {...mockDisabledTextBoxProps} />);
    const input = screen.getByLabelText('Disabled field') as HTMLInputElement;
    expect(input).toBeDisabled();
    expect(input.value).toBe('Cannot be edited');
  });

  it('shows error message when the error property is true', () => {
    render(<TextBox {...mockErrorTextBoxProps} />);
    const errorText = screen.getByText('This field is required');
    const input = screen.getByLabelText('Field with error');
    
    expect(errorText).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('takes up all available width when fullWidth is true', () => {
    render(<TextBox {...mockFullWidthTextBoxProps} />);
    const container = screen.getByLabelText('Full width field').closest('.textBoxContainer');
    expect(container).toHaveStyle('width: 100%');
  });

  it('shows adornments when provided', () => {
    render(<TextBox {...mockWithAdornmentsTextBoxProps} />);
    const startAdornment = screen.getByText('🔍');
    const endAdornment = screen.getByText('✓');
    
    expect(startAdornment).toBeInTheDocument();
    expect(endAdornment).toBeInTheDocument();
  });

  it('applies different variants correctly', () => {
    const { rerender } = render(
      <TextBox 
        label="Outlined" 
        variant="outlined" 
        data-testid="textbox-variant" 
      />
    );
    
    let inputWrapper = screen.getByTestId('textbox-variant').parentElement;
    expect(inputWrapper).toHaveClass('variant-outlined');
    
    rerender(
      <TextBox 
        label="Filled" 
        variant="filled" 
        data-testid="textbox-variant" 
      />
    );
    
    inputWrapper = screen.getByTestId('textbox-variant').parentElement;
    expect(inputWrapper).toHaveClass('variant-filled');
    
    rerender(
      <TextBox 
        label="Standard" 
        variant="standard" 
        data-testid="textbox-variant" 
      />
    );
    
    inputWrapper = screen.getByTestId('textbox-variant').parentElement;
    expect(inputWrapper).toHaveClass('variant-standard');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(
      <TextBox 
        label="Small" 
        size={ComponentSize.SMALL} 
        data-testid="textbox-size" 
      />
    );
    
    let inputWrapper = screen.getByTestId('textbox-size').parentElement;
    expect(inputWrapper).toHaveClass('size-small');
    
    rerender(
      <TextBox 
        label="Large" 
        size={ComponentSize.LARGE} 
        data-testid="textbox-size" 
      />
    );
    
    inputWrapper = screen.getByTestId('textbox-size').parentElement;
    expect(inputWrapper).toHaveClass('size-large');
  });

  it('is accessible with an accessible name', () => {
    render(<TextBox label="Accessible field" aria-label="Search field" />);
    const input = screen.getByRole('textbox', { name: /search field/i });
    expect(input).toBeInTheDocument();
  });
});
