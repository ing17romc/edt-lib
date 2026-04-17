import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import { Card } from '..';
import { mockCardWithoutImage } from './mocks';
import * as StoriesModule from '../stories/Card.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const Outlined = composeStory(StoriesModule.Outlined, meta);
const WithoutImage = composeStory(StoriesModule.WithoutImage, meta);

describe('Card Component', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: shows title and subtitle', async () => { await Default.run(); });
    test('Outlined: applies card--outlined class', async () => { await Outlined.run(); });
    test('WithoutImage: renders without img element', async () => { await WithoutImage.run(); });
  });

  describe('Unit', () => {
    afterEach(() => { vi.clearAllMocks(); });

    it('handles onClick event when provided', () => {
      const onClickMock = vi.fn();
      render(<Card {...mockCardWithoutImage} onClick={onClickMock}>{mockCardWithoutImage.children}</Card>);
      fireEvent.click(screen.getByRole('button'));
      expect(onClickMock).toHaveBeenCalledTimes(1);
    });

    it('is keyboard accessible when clickable', () => {
      const onKeyDownMock = vi.fn();
      render(<Card {...mockCardWithoutImage} onClick={onKeyDownMock}>{mockCardWithoutImage.children}</Card>);
      fireEvent.keyDown(screen.getByRole('button'), { key: 'Enter' });
      expect(onKeyDownMock).toHaveBeenCalledTimes(1);
    });

    it('applies custom CSS classes', () => {
      const { container } = render(
        <Card {...mockCardWithoutImage} className="my-custom-class">{mockCardWithoutImage.children}</Card>
      );
      expect(container.firstChild).toHaveClass('my-custom-class');
    });
  });
});

