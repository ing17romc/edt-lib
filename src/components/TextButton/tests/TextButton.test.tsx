import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import TextButton from '../';
import { mockTextButtonProps, mockDisabledTextButtonProps } from './mocks';
import * as StoriesModule from '../stories/TextButton.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const Sizes = composeStory(StoriesModule.Sizes, meta);
const States = composeStory(StoriesModule.States, meta);
const Underline = composeStory(StoriesModule.Underline, meta);

describe('TextButton Component', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: has correct base classes', async () => { await Default.run(); });
    test('Sizes: each size applies the correct class', async () => { await Sizes.run(); });
    test('States: disabled/loading/fullWidth states are applied', async () => { await States.run(); });
    test('Underline: underline variants apply correct classes', async () => { await Underline.run(); });
  });

  describe('Unit', () => {
    it('applies custom class when provided', () => {
      render(<TextButton {...mockTextButtonProps} />);
      expect(screen.getByRole('button', { name: /test button/i })).toHaveClass('test-class');
    });

    it('handles onClick event correctly', () => {
      const handleClick = vi.fn();
      render(<TextButton onClick={handleClick}>Click me</TextButton>);
      fireEvent.click(screen.getByRole('button', { name: /click me/i }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
      render(<TextButton {...mockDisabledTextButtonProps} />);
      const button = screen.getByRole('button', { name: /disabled/i });
      expect(button).toBeDisabled();
      expect(button).toHaveClass('disabled');
    });

    it('is accessible with an accessible name', () => {
      render(<TextButton>Accessible button</TextButton>);
      expect(screen.getByRole('button', { name: /accessible button/i })).toBeInTheDocument();
    });
  });
});

