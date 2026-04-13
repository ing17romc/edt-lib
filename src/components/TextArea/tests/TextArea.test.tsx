import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import TextArea from '../';
import {
  mockTextAreaProps,
  mockDisabledTextAreaProps,
  mockErrorTextAreaProps,
  mockFullWidthTextAreaProps,
  mockAutoResizeTextAreaProps,
  mockWithMaxLengthTextAreaProps
} from './mocks';
import * as StoriesModule from '../stories/TextArea.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const Variants = composeStory(StoriesModule.Variants, meta);
const Sizes = composeStory(StoriesModule.Sizes, meta);

describe('TextArea Component', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: textarea is rendered', async () => { await Default.run(); });
    test('Variants: each variant applies the correct class', async () => { await Variants.run(); });
    test('Sizes: each size applies the correct class', async () => { await Sizes.run(); });
  });

  describe('Unit', () => {
    it('applies custom class when provided', () => {
      render(<TextArea {...mockTextAreaProps} />);
      const container = screen.getByTestId('textarea').parentElement?.parentElement;
      expect(container).toHaveClass('test-class');
    });

    it('handles onChange event correctly', () => {
      const handleChange = vi.fn();
      render(<TextArea label="Test field" onChange={handleChange} />);
      fireEvent.change(screen.getByLabelText('Test field'), { target: { value: 'new value' } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('is disabled correctly when disabled is true', () => {
      render(<TextArea {...mockDisabledTextAreaProps} />);
      const textarea = screen.getByLabelText('Disabled field') as HTMLTextAreaElement;
      expect(textarea).toBeDisabled();
      expect(textarea.value).toBe('This is sample text in a disabled textarea.');
    });

    it('shows error message when error is true', () => {
      render(<TextArea {...mockErrorTextAreaProps} />);
      expect(screen.getByText('This field is required')).toBeInTheDocument();
      expect(screen.getByLabelText('Field with error')).toHaveAttribute('aria-invalid', 'true');
    });

    it('takes full width when fullWidth is true', () => {
      render(<TextArea {...mockFullWidthTextAreaProps} />);
      const container = screen.getByLabelText('Full width field').closest('.textAreaContainer');
      expect(container).toHaveClass('fullWidth');
    });

    it('applies character limit when maxLength is defined', () => {
      render(<TextArea {...mockWithMaxLengthTextAreaProps} />);
      const textarea = screen.getByLabelText('Character limit field') as HTMLTextAreaElement;
      expect(textarea.maxLength).toBe(100);
    });

    it('is accessible with an accessible name', () => {
      render(<TextArea label="Accessible field" aria-label="Textarea for comments" />);
      expect(screen.getByRole('textbox', { name: /textarea for comments/i })).toBeInTheDocument();
    });

    it('applies the specified number of rows', () => {
      render(<TextArea label="Field with rows" rows={5} />);
      expect(screen.getByLabelText('Field with rows')).toHaveAttribute('rows', '5');
    });

    it('handles auto-resize correctly', () => {
      const { container } = render(<TextArea {...mockAutoResizeTextAreaProps} />);
      const textarea = container.querySelector('textarea');
      expect(textarea).toHaveStyle('overflow: hidden');
    });
  });
});

