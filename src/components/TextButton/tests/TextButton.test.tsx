import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextButton from '../';
import { 
  mockTextButtonProps, 
  mockDisabledTextButtonProps, 
  mockLoadingTextButtonProps,
  mockFullWidthTextButtonProps,
} from './mocks';
import { ComponentSize } from '../../types';

describe('TextButton Component', () => {
  it('renders correctly with default properties', () => {
    render(<TextButton>Test button</TextButton>);
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('textButton');
    expect(button).toHaveClass('size-medium');
    expect(button).toHaveClass('color-primary');
    expect(button).toHaveClass('underline-hover');
  });

  it('applies custom class when provided', () => {
    render(<TextButton {...mockTextButtonProps} />);
    const button = screen.getByRole('button', { name: /test button/i });
    expect(button).toHaveClass('test-class');
  });

  it('handles the onClick event correctly', () => {
    const handleClick = vi.fn();
    render(
      <TextButton onClick={handleClick}>
        Click me
      </TextButton>
    );
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables correctly when the disabled property is true', () => {
    render(<TextButton {...mockDisabledTextButtonProps} />);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled');
  });

  it('shows a loading indicator when loading is true', () => {
    render(<TextButton {...mockLoadingTextButtonProps} />);
    const button = screen.getByRole('button', { name: /loading/i });
    expect(button).toHaveClass('loading');
    // Verify that the color is transparent or the text is not visible
    const buttonStyle = window.getComputedStyle(button);
    const color = buttonStyle.getPropertyValue('color');
    const isTransparent = color === 'transparent' || color === 'rgba(0, 0, 0, 0)' || color === '';
    expect(isTransparent).toBe(true);
  });

  it('takes up all available width when fullWidth is true', () => {
    render(<TextButton {...mockFullWidthTextButtonProps} />);
    const button = screen.getByRole('button', { name: /full width/i });
    expect(button).toHaveClass('fullWidth');
    expect(button).toHaveStyle('width: 100%');
  });

  it('applies custom properties correctly', () => {
    render(
      <TextButton 
        color="secondary" 
        size={ComponentSize.LARGE}
        underline="always"
      >
        Custom
      </TextButton>
    );
    const button = screen.getByRole('button', { name: /custom/i });
    expect(button).toHaveClass('color-secondary');
    expect(button).toHaveClass('size-large');
    expect(button).toHaveClass('underline-always');
  });

  it('applies underline style correctly', () => {
    const { rerender } = render(
      <TextButton underline="none">No underline</TextButton>
    );
    let button = screen.getByRole('button', { name: /no underline/i });
    expect(button).toHaveClass('underline-none');

    rerender(<TextButton underline="always">Always underlined</TextButton>);
    button = screen.getByRole('button', { name: /always underlined/i });
    expect(button).toHaveClass('underline-always');
  });

  it('is accessible with an accessible name', () => {
    render(<TextButton>Accessible button</TextButton>);
    const button = screen.getByRole('button', { name: /accessible button/i });
    expect(button).toBeInTheDocument();
  });
});
