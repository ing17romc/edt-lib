import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentSize } from '../../types';
import TextArea from '../';
import { 
  mockTextAreaProps, 
  mockDisabledTextAreaProps, 
  mockErrorTextAreaProps, 
  mockFullWidthTextAreaProps,
  mockAutoResizeTextAreaProps,
  mockWithMaxLengthTextAreaProps
} from './mocks';

describe('TextArea Component', () => {
  it('renders correctly with default properties', () => {
    render(<TextArea label="Test field" />);
    const textarea = screen.getByLabelText('Test field');
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe('TEXTAREA');
  });

  it('applies the custom class when provided', () => {
    render(<TextArea {...mockTextAreaProps} />);
    const container = screen.getByTestId('textarea').parentElement?.parentElement;
    expect(container).toHaveClass('test-class');
  });

  it('handles the onChange event correctly', () => {
    const handleChange = vi.fn();
    render(
      <TextArea 
        label="Test field" 
        onChange={handleChange} 
      />
    );
    const textarea = screen.getByLabelText('Test field');
    fireEvent.change(textarea, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('is disabled correctly when the disabled property is true', () => {
    render(<TextArea {...mockDisabledTextAreaProps} />);
    const textarea = screen.getByLabelText('Disabled field') as HTMLTextAreaElement;
    expect(textarea).toBeDisabled();
    expect(textarea.value).toBe('This is sample text in a disabled textarea.');
  });

  it('shows the error message when the error property is true', () => {
    render(<TextArea {...mockErrorTextAreaProps} />);
    const errorText = screen.getByText('This field is required');
    const textarea = screen.getByLabelText('Field with error');
    
    expect(errorText).toBeInTheDocument();
    expect(textarea).toHaveAttribute('aria-invalid', 'true');
  });

  it('takes up full width when fullWidth is true', () => {
    render(<TextArea {...mockFullWidthTextAreaProps} />);
    const container = screen.getByLabelText('Full width field').closest('.textAreaContainer');
    expect(container).toHaveClass('fullWidth');
  });

  it('applies the character limit when maxLength is defined', () => {
    render(<TextArea {...mockWithMaxLengthTextAreaProps} />);
    const textarea = screen.getByLabelText('Character limit field') as HTMLTextAreaElement;
    expect(textarea.maxLength).toBe(100);
  });

  it('applies different variants correctly', () => {
    const { rerender } = render(
      <TextArea 
        label="Outlined" 
        variant="outlined" 
        data-testid="textarea-variant" 
      />
    );
    
    let textareaWrapper = screen.getByTestId('textarea-variant').parentElement;
    expect(textareaWrapper).toHaveClass('variant-outlined');
    
    rerender(
      <TextArea 
        label="Filled" 
        variant="filled" 
        data-testid="textarea-variant" 
      />
    );
    
    textareaWrapper = screen.getByTestId('textarea-variant').parentElement;
    expect(textareaWrapper).toHaveClass('variant-filled');
    
    rerender(
      <TextArea 
        label="Standard" 
        variant="standard" 
        data-testid="textarea-variant" 
      />
    );
    
    textareaWrapper = screen.getByTestId('textarea-variant').parentElement;
    expect(textareaWrapper).toHaveClass('variant-standard');
  });

  it('applies different sizes correctly', () => {
    const { rerender } = render(
      <TextArea 
        label="Small" 
        size={ComponentSize.SMALL} 
        data-testid="textarea-size" 
      />
    );
    
    let textareaWrapper = screen.getByTestId('textarea-size').parentElement;
    expect(textareaWrapper).toHaveClass('size-small');
    
    rerender(
      <TextArea 
        label="Large" 
        size={ComponentSize.LARGE} 
        data-testid="textarea-size" 
      />
    );
    
    textareaWrapper = screen.getByTestId('textarea-size').parentElement;
    expect(textareaWrapper).toHaveClass('size-large');
  });

  it('is accessible with an accessible name', () => {
    render(<TextArea label="Accessible field" aria-label="Textarea for comments" />);
    const textarea = screen.getByRole('textbox', { name: /textarea for comments/i });
    expect(textarea).toBeInTheDocument();
  });

  it('applies the specified number of rows', () => {
    render(<TextArea label="Field with rows" rows={5} />);
    const textarea = screen.getByLabelText('Field with rows');
    expect(textarea).toHaveAttribute('rows', '5');
  });

  it('handles auto-resize correctly', () => {
    // Note: Auto-resize tests are hard to test with JSDOM
    // since it has no real layout. This is a basic test to verify the property is applied.
    const { container } = render(<TextArea {...mockAutoResizeTextAreaProps} />);
    const textarea = container.querySelector('textarea');
    expect(textarea).toHaveStyle('overflow: hidden');
  });
});
