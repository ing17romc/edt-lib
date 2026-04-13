import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import Icon from '..';
import { MockSvgIcon } from './mocks';
import * as StoriesModule from '../stories/Icon.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const Sizes = composeStory(StoriesModule.Sizes, meta);
const Variants = composeStory(StoriesModule.Variants, meta);
const DisabledState = composeStory(StoriesModule.DisabledState, meta);

describe('Icon', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: renders medium outline icon', async () => { await Default.run(); });
    test('Sizes: each size renders the correct class', async () => { await Sizes.run(); });
    test('Variants: each variant renders the correct class', async () => { await Variants.run(); });
    test('DisabledState: disabled icon has disabled class', async () => { await DisabledState.run(); });
  });

  describe('Unit', () => {
    it('applies custom color correctly', () => {
      render(<Icon name="home" color="#ff0000" aria-label="Home" />);
      const icon = screen.getByRole('img');
      expect(icon).toHaveStyle('color: #ff0000');
    });

    it('applies custom styles correctly', () => {
      render(<Icon name="home" style={{ backgroundColor: '#f0f0f0' }} aria-label="Home" />);
      const icon = screen.getByRole('img');
      expect(icon).toHaveStyle('background-color: #f0f0f0');
    });

    it('passes additional attributes correctly', () => {
      render(<Icon name="home" aria-label="Home icon" />);
      const icon = screen.getByLabelText('Home icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveAttribute('aria-label', 'Home icon');
    });

    it('renders correctly with a custom SVG component', () => {
      render(<Icon name="home" component={MockSvgIcon} aria-label="Custom" />);
      const svg = screen.getByTestId('mock-svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
    });

    it('applies custom classes', () => {
      render(<Icon name="home" className="my-custom-class" aria-label="Custom icon" />);
      const icon = screen.getByLabelText('Custom icon');
      expect(icon).toHaveClass('my-custom-class');
      expect(icon).toHaveClass('icon');
    });

    it('passes HTML attributes correctly', () => {
      render(<Icon name="home" title="Home icon" aria-label="Home" />);
      const icon = screen.getByLabelText('Home');
      expect(icon).toHaveAttribute('title', 'Home icon');
    });
  });
});
