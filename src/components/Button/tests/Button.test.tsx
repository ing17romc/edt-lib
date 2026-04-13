import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import Button from '..';
import { mockOnClick, defaultButtonProps, disabledButtonProps } from './mocks';
import * as StoriesModule from '../stories/Button.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const Variants = composeStory(StoriesModule.Variants, meta);
const Sizes = composeStory(StoriesModule.Sizes, meta);
const States = composeStory(StoriesModule.States, meta);

describe('Button Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Stories', () => {
    afterEach(() => {
      document.body.innerHTML = '';
    });

    test('Default: renders with correct classes and attributes', async () => {
      await Default.run();
    });

    test('Variants: each variant applies the correct class', async () => {
      await Variants.run();
    });

    test('Sizes: each size applies the correct class', async () => {
      await Sizes.run();
    });

    test('States: disabled and fullWidth', async () => {
      await States.run();
    });
  });

  describe('Behavior', () => {
    test('executes the onClick function when clicked', () => {
      render(<Button {...defaultButtonProps} />);
      const button = screen.getByRole('button', { name: /click me/i });

      fireEvent.click(button);
      expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('does not execute onClick when disabled', () => {
      render(<Button {...disabledButtonProps} />);
      const button = screen.getByRole('button', { name: /disabled button/i });

      fireEvent.click(button);
      expect(mockOnClick).not.toHaveBeenCalled();
      expect(button).toBeDisabled();
    });
  });
});

