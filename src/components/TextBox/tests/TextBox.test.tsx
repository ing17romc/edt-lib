import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import TextBox from '../';
import {
  mockTextBoxProps,
  mockDisabledTextBoxProps,
  mockErrorTextBoxProps,
  mockFullWidthTextBoxProps,
  mockWithAdornmentsTextBoxProps
} from './mocks';
import * as StoriesModule from '../stories/TextBox.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const Variants = composeStory(StoriesModule.Variants, meta);
const Sizes = composeStory(StoriesModule.Sizes, meta);

describe('TextBox Component', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: input is rendered', async () => { await Default.run(); });
    test('Variants: each variant applies the correct class', async () => { await Variants.run(); });
    test('Sizes: each size applies the correct class', async () => { await Sizes.run(); });
  });

  describe('Unit', () => {
    it('applies custom class when provided', () => {
      render(<TextBox {...mockTextBoxProps} />);
      const container = screen.getByTestId('textbox').parentElement;
      expect(container).toHaveClass('test-class');
    });

    it('handles onChange event correctly', () => {
      const handleChange = vi.fn();
      render(<TextBox label="Test field" onChange={handleChange} />);
      fireEvent.change(screen.getByLabelText('Test field'), { target: { value: 'new value' } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('disables correctly when disabled is true', () => {
      render(<TextBox {...mockDisabledTextBoxProps} />);
      const input = screen.getByLabelText('Disabled field') as HTMLInputElement;
      expect(input).toBeDisabled();
      expect(input.value).toBe('Cannot be edited');
    });

    it('shows error message when error is true', () => {
      render(<TextBox {...mockErrorTextBoxProps} />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
      expect(screen.getByLabelText('Field with error')).toHaveAttribute('aria-invalid', 'true');
    });

    it('takes full width when fullWidth is true', () => {
      render(<TextBox {...mockFullWidthTextBoxProps} />);
      const container = screen.getByLabelText('Full width field').closest('.textBoxContainer');
      expect(container).toHaveStyle('width: 100%');
    });

    it('shows adornments when provided', () => {
      render(<TextBox {...mockWithAdornmentsTextBoxProps} />);
      expect(screen.getByText('🔍')).toBeInTheDocument();
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    it('is accessible with an accessible name', () => {
      render(<TextBox label="Accessible field" aria-label="Search field" />);
      expect(screen.getByRole('textbox', { name: /search field/i })).toBeInTheDocument();
    });
  });
});

