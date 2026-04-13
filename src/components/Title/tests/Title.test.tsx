import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import { Title } from '..';
import { mockTitleWithAllProps } from './mocks';
import * as StoriesModule from '../stories/Title.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const WithAllProps = composeStory(StoriesModule.WithAllProps, meta);
const Sizes = composeStory(StoriesModule.Sizes, meta);
const Variants = composeStory(StoriesModule.Variants, meta);
const TextStyles = composeStory(StoriesModule.TextStyles, meta);
const Alignments = composeStory(StoriesModule.Alignments, meta);
const Block = composeStory(StoriesModule.Block, meta);
const NoWrap = composeStory(StoriesModule.NoWrap, meta);

describe('Title Component', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: renders h1 with correct classes', async () => { await Default.run(); });
    test('WithAllProps: applies all CSS props correctly', async () => { await WithAllProps.run(); });
    test('Sizes: each size renders the correct tag and class', async () => { await Sizes.run(); });
    test('Variants: each variant applies the correct class', async () => { await Variants.run(); });
    test('TextStyles: bold/italic/underline/strikethrough classes', async () => { await TextStyles.run(); });
    test('Alignments: each alignment applies the correct class', async () => { await Alignments.run(); });
    test('Block: applies block class', async () => { await Block.run(); });
    test('NoWrap: applies noWrap class', async () => { await NoWrap.run(); });
  });

  describe('Unit', () => {
    it('applies custom class, id, and onClick correctly', () => {
      render(<Title {...mockTitleWithAllProps} />);
      const el = screen.getByText(mockTitleWithAllProps.children as string);

      expect(el).toHaveClass('custom-class');
      expect(el.id).toBe('title-id');

      fireEvent.click(el);
      expect(mockTitleWithAllProps.onClick).toHaveBeenCalledTimes(1);
    });

    it('correctly assigns the ref', () => {
      const ref = React.createRef<HTMLHeadingElement>();
      render(<Title ref={ref}>Ref test</Title>);

      expect(ref.current).toBeInTheDocument();
      expect(ref.current?.tagName.toLowerCase()).toBe('h1');
    });
  });
});
