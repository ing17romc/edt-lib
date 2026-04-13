import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import IconButton from '..';
import { ComponentSize, ComponentVariant } from '../../types';
import * as StoriesModule from '../stories/IconButton.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const Sizes = composeStory(StoriesModule.Sizes, meta);
const Variants = composeStory(StoriesModule.Variants, meta);
const States = composeStory(StoriesModule.States, meta);

describe('IconButton', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: medium primary button', async () => { await Default.run(); });
    test('Sizes: each size renders the correct class', async () => { await Sizes.run(); });
    test('Variants: each variant renders the correct class', async () => { await Variants.run(); });
    test('States: disabled and loading states', async () => { await States.run(); });
  });

  describe('Unit', () => {
    it('handles the onClick event correctly', () => {
      const handleClick = vi.fn();
      render(<IconButton icon="home" onClick={handleClick} aria-label="Click me" data-testid="icon-button" />);
      fireEvent.click(screen.getByTestId('icon-button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('is disabled correctly', () => {
      render(<IconButton icon="home" disabled aria-label="Disabled button" data-testid="icon-button" />);
      const button = screen.getByTestId('icon-button');
      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('shows loading state correctly', () => {
      render(<IconButton icon="home" loading aria-label="Loading" data-testid="icon-button" />);
      const button = screen.getByTestId('icon-button');
      expect(button).toHaveClass('iconButton--loading');
      expect(button).toHaveAttribute('aria-busy', 'true');
    });

    it('applies custom classes correctly', () => {
      render(<IconButton icon="home" className="custom-button" aria-label="Custom" />);
      expect(screen.getByRole('button')).toHaveClass('custom-button');
    });

    it('passes HTML attributes correctly', () => {
      render(<IconButton icon="home" title="Home button" aria-label="Home" data-testid="icon-button" />);
      expect(screen.getByTestId('icon-button')).toHaveAttribute('title', 'Home button');
    });
  });
});
