import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import Spinner from '..';
import { defaultProps } from './mocks';
import * as StoriesModule from '../stories/Spinner.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const Sizes = composeStory(StoriesModule.Sizes, meta);
const Variants = composeStory(StoriesModule.Variants, meta);
const Pulse = composeStory(StoriesModule.Pulse, meta);

describe('Spinner', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: renders with correct classes', async () => { await Default.run(); });
    test('Sizes: each size applies the correct class', async () => { await Sizes.run(); });
    test('Variants: each variant applies the correct class', async () => { await Variants.run(); });
    test('Pulse: applies pulse class', async () => { await Pulse.run(); });
  });

  describe('Unit', () => {
    test('applies custom className', () => {
      render(<Spinner {...defaultProps} className="custom-class" />);
      expect(screen.getByLabelText('Loading...')).toHaveClass('custom-class');
    });
  });
});
