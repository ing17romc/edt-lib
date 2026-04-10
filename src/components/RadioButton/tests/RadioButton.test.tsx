import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioButton from '..';
import { ComponentSize } from '../../types';
import { 
  defaultProps, 
  checkedProps, 
  disabledProps, 
  customClassProps, 
  withoutLabelProps,
  smallSizeProps,
  largeSizeProps
} from './mocks';

describe('RadioButton', () => {
  it('renders correctly with default props', () => {
    render(<RadioButton {...defaultProps} />);
    
    const radioInput = screen.getByRole('radio');
    const label = screen.getByText(defaultProps.label as string);
    
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).not.toBeChecked();
    expect(radioInput).not.toBeDisabled();
    expect(label).toBeInTheDocument();
  });
  
  it('is checked when the checked property is true', () => {
    render(<RadioButton {...checkedProps} />);
    
    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeChecked();
  });
  
  it('is disabled when the disabled property is true', () => {
    render(<RadioButton {...disabledProps} />);
    
    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeDisabled();
  });
  
  it('applies the custom class when provided', () => {
    const { container } = render(<RadioButton {...customClassProps} />);
    
    expect(container.firstChild).toHaveClass('custom-radio-class');
  });
  
  it('calls the onChange function when clicked', () => {
    const handleChange = vi.fn();
    render(<RadioButton {...defaultProps} onChange={handleChange} />);
    
    const radioInput = screen.getByRole('radio');
    fireEvent.click(radioInput);
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(defaultProps.value);
  });
  
  it('does not call onChange when disabled', () => {
    const handleChange = vi.fn();
    render(<RadioButton {...disabledProps} onChange={handleChange} />);
    
    const radioInput = screen.getByRole('radio');
    fireEvent.click(radioInput);
    
    expect(handleChange).not.toHaveBeenCalled();
  });
  
  it('renders without a label when not provided', () => {
    render(<RadioButton {...withoutLabelProps} />);
    
    const radioInput = screen.getByRole('radio');
    expect(radioInput).toBeInTheDocument();
    
    // There should be no text label
    const labels = screen.queryByText(defaultProps.label as string);
    expect(labels).not.toBeInTheDocument();
  });
  
  it('applies the small size class when size is SMALL', () => {
    const { container } = render(<RadioButton {...smallSizeProps} />);
    
    const radioButton = container.firstChild;
    expect(radioButton).toHaveClass('radioButton--small');
    
    // Verify it doesn't have other size classes
    expect(radioButton).not.toHaveClass('radioButton--medium');
    expect(radioButton).not.toHaveClass('radioButton--large');
  });
  
  it('applies the medium size class by default', () => {
    const { container } = render(<RadioButton {...defaultProps} />);
    
    const radioButton = container.firstChild;
    expect(radioButton).toHaveClass('radioButton--medium');
    
    // Verify it doesn't have other size classes
    expect(radioButton).not.toHaveClass('radioButton--small');
    expect(radioButton).not.toHaveClass('radioButton--large');
  });
  
  it('applies the large size class when size is LARGE', () => {
    const { container } = render(<RadioButton {...largeSizeProps} />);
    
    const radioButton = container.firstChild;
    expect(radioButton).toHaveClass('radioButton--large');
    
    // Verify it doesn't have other size classes
    expect(radioButton).not.toHaveClass('radioButton--small');
    expect(radioButton).not.toHaveClass('radioButton--medium');
  });
  
  it('keeps custom classes when combined with size', () => {
    const { container } = render(
      <RadioButton 
        {...customClassProps} 
        size={ComponentSize.SMALL} 
      />
    );
    
    const radioButton = container.firstChild;
    expect(radioButton).toHaveClass('custom-radio-class');
    expect(radioButton).toHaveClass('radioButton--small');
  });
});
