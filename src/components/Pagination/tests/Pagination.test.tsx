import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import { Pagination } from '..';
import { mockPaginationProps } from './mocks';
import * as StoriesModule from '../stories/Pagination.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const WithCustomLabels = composeStory(StoriesModule.WithCustomLabels, meta);
const WithManyPages = composeStory(StoriesModule.WithManyPages, meta);
const Disabled = composeStory(StoriesModule.Disabled, meta);
const SmallSize = composeStory(StoriesModule.SmallSize, meta);
const LargeSize = composeStory(StoriesModule.LargeSize, meta);

describe('Pagination Component', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: renders prev/next and current page', async () => { await Default.run(); });
    test('WithCustomLabels: shows custom navigation labels', async () => { await WithCustomLabels.run(); });
    test('WithManyPages: shows ellipsis', async () => { await WithManyPages.run(); });
    test('Disabled: all buttons are disabled', async () => { await Disabled.run(); });
    test('SmallSize: applies pagination--small class', async () => { await SmallSize.run(); });
    test('LargeSize: applies pagination--large class', async () => { await LargeSize.run(); });
  });

  describe('Unit', () => {
    it('calls onPageChange with the correct page number when clicked', () => {
      const handlePageChange = vi.fn();
      render(<Pagination {...mockPaginationProps} onPageChange={handlePageChange} />);
      fireEvent.click(screen.getByText('2'));
      expect(handlePageChange).toHaveBeenCalledWith(2);
    });

    it('does not render and shows a warning if totalPages is 0', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const { container } = render(<Pagination currentPage={1} totalPages={0} onPageChange={vi.fn()} />);
      expect(container.firstChild).toBeNull();
      expect(warnSpy).toHaveBeenCalledWith('Pagination: totalPages must be greater than 0');
      warnSpy.mockRestore();
    });

    it('does not render and shows a warning if currentPage is out of range', () => {
      const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
      const { container } = render(<Pagination currentPage={10} totalPages={5} onPageChange={vi.fn()} />);
      expect(container.firstChild).toBeNull();
      expect(warnSpy).toHaveBeenCalledWith('Pagination: currentPage (10) is out of range [1, 5]');
      warnSpy.mockRestore();
    });

    it('uses MEDIUM size by default if none is specified', () => {
      const { container } = render(<Pagination {...mockPaginationProps} size={undefined} />);
      expect(container.firstChild).not.toHaveClass('pagination--small');
      expect(container.firstChild).not.toHaveClass('pagination--large');
    });
  });
});

