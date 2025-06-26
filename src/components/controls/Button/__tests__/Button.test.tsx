import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../index';
import { SIZE_CONTROL, STYLE_CONTROL } from '../../../utils/constant';

describe('Button Component', () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  test('renders button with correct text', () => {
    render(
      <Button
        title="Click me"
        buttonType="PRIMARY"
        size="MD"
      />
    );

    const button = screen.getByText('Click me');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', () => {
    render(
      <Button
        title="Click me"
        onClick={mockOnClick}
      />
    );

    const button = screen.getByText('Click me');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('disables button when disabled prop is true', () => {
    render(
      <Button
        title="Disabled"
        disabled
      />
    );

    const button = screen.getByText('Disabled');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  test('applies correct classes based on buttonType and size', () => {
    render(
      <Button
        title="Test"
        buttonType="PRIMARY"
        size="LG"
      />
    );

    const button = screen.getByText('Test');
    expect(button).toHaveClass(STYLE_CONTROL.PRIMARY.toLowerCase());
    expect(button).toHaveClass(SIZE_CONTROL.LG.toLowerCase());
  });

  test('renders with all size variants', () => {
    const sizes = Object.keys(SIZE_CONTROL) as Array<keyof typeof SIZE_CONTROL>;
    
    sizes.forEach((size: keyof typeof SIZE_CONTROL) => {
      render(
        <Button
          key={size}
          title={`${size} Button`}
          buttonType="PRIMARY"
          size={size}
        />
      );
      
      const button = screen.getByText(`${size} Button`);
      expect(button).toHaveClass(SIZE_CONTROL[size].toLowerCase());
    });
  });

  test('renders with all style variants', () => {
    const styles = Object.keys(STYLE_CONTROL) as Array<keyof typeof STYLE_CONTROL>;
    
    (styles as Array<keyof typeof STYLE_CONTROL>).forEach((style) => {
      const styleStr = String(style);
      render(
        <Button
          key={styleStr}
          title={`${styleStr} Button`}
          buttonType={style as 'PRIMARY' | 'SECONDARY'}
          size="MD"
        />
      );
      
      const button = screen.getByText(`${styleStr} Button`);
      expect(button).toHaveClass(STYLE_CONTROL[style as keyof typeof STYLE_CONTROL]);
    });
  });

  test('handles button type correctly', () => {
    render(
      <Button
        title="Click"
        buttonType="PRIMARY"
        size="MD"
      />
    );

    const button = screen.getByText('Click');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('handles button type correctly when onClick is provided', () => {
    render(
      <Button
        title="Click"
        onClick={mockOnClick}
      />
    );

    const button = screen.getByText('Click');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('applies custom className when provided', () => {
    render(
      <Button
        title="Custom Class"
        className="custom-button"
        buttonType="PRIMARY"
        size="MD"
      />
    );

    const button = screen.getByText('Custom Class');
    expect(button).toHaveClass('custom-button');
  });
});
