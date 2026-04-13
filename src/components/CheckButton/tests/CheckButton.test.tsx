import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import { ControlledCheckButton, DisabledCheckButton, CheckedCheckButton, LongLabelCheckButton } from './mocks';
import * as StoriesModule from '../stories/CheckButton.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const SizeVariations = composeStory(StoriesModule.SizeVariations, meta);
const Disabled = composeStory(StoriesModule.Disabled, meta);

describe('CheckButton', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: renders with check-button class', async () => { await Default.run(); });
    test('SizeVariations: each size renders the correct class', async () => { await SizeVariations.run(); });
    test('Disabled: checkbox is disabled', async () => { await Disabled.run(); });
  });

  describe('Unit', () => {
    it('calls onChange when clicked', () => {
      const handleChange = vi.fn();
      render(<ControlledCheckButton label="Click me" onChange={handleChange} />);
      fireEvent.click(screen.getByLabelText('Click me'));
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('does not call onChange when disabled', () => {
      const handleChange = vi.fn();
      render(<DisabledCheckButton onChange={handleChange} />);
      fireEvent.click(screen.getByLabelText('Disabled option'));
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('shows initial state as checked when checked is true', () => {
      render(<CheckedCheckButton />);
      const checkbox = screen.getByLabelText('Selected option') as HTMLInputElement;
      expect(checkbox.checked).toBe(true);
    });

    it('handles long labels correctly', () => {
      render(<LongLabelCheckButton />);
      expect(screen.getByText(/This is a very long label/)).toBeInTheDocument();
    });

    it('updates state when used as a controlled component', () => {
      const { rerender } = render(<ControlledCheckButton />);
      const checkbox = screen.getByLabelText('Example option') as HTMLInputElement;
      expect(checkbox.checked).toBe(false);
      fireEvent.click(checkbox);
      rerender(<ControlledCheckButton checked={true} />);
      expect(checkbox.checked).toBe(true);
    });
  });
});
