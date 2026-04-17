import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { composeStory } from '@storybook/react-vite';
import type { Meta } from '@storybook/react-vite';
import Modal from '..';
import { mockModalProps } from './mocks';
import * as StoriesModule from '../stories/Modal.stories';

const meta = StoriesModule.default as Meta;
const Default = composeStory(StoriesModule.Default, meta);
const WithFooter = composeStory(StoriesModule.WithFooter, meta);
const WithoutTitle = composeStory(StoriesModule.WithoutTitle, meta);
const WithCustomSize = composeStory(StoriesModule.WithCustomSize, meta);
const WithCustomCloseText = composeStory(StoriesModule.WithCustomCloseText, meta);

describe('Modal Component', () => {
  describe('Stories', () => {
    afterEach(() => { document.body.innerHTML = ''; });

    test('Default: shows title and close button', async () => { await Default.run(); });
    test('WithFooter: shows footer content', async () => { await WithFooter.run(); });
    test('WithoutTitle: no heading is rendered', async () => { await WithoutTitle.run(); });
    test('WithCustomSize: large size class is applied', async () => { await WithCustomSize.run(); });
    test('WithCustomCloseText: custom close button text is shown', async () => { await WithCustomCloseText.run(); });
  });

  describe('Unit', () => {
    it('does not render when isOpen is false', () => {
      render(<Modal {...mockModalProps} isOpen={false} />);
      expect(screen.queryByText('Modal Title')).not.toBeInTheDocument();
    });

    it('calls onClose when the close button is clicked', () => {
      const handleClose = vi.fn();
      render(<Modal {...mockModalProps} onClose={handleClose} />);
      fireEvent.click(screen.getByRole('button', { name: mockModalProps.closeButtonText || 'Close' }));
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('calls onClose when the overlay is clicked', () => {
      const handleClose = vi.fn();
      render(<Modal isOpen={true} onClose={handleClose} closeOnOverlayClick={true} title="Test Modal">Test content</Modal>);
      fireEvent.click(screen.getByRole('button', { name: 'Close modal' }));
      expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it('does not call onClose when clicking inside the modal', () => {
      const handleClose = vi.fn();
      render(<Modal {...mockModalProps} onClose={handleClose} />);
      const modalContent = screen.getByText('Test modal content').closest('.modalContainer');
      if (modalContent) fireEvent.click(modalContent);
      expect(handleClose).not.toHaveBeenCalled();
    });

    it('closes with the Escape key', () => {
      const handleClose = vi.fn();
      render(<Modal {...mockModalProps} onClose={handleClose} />);
      fireEvent.keyDown(document, { key: 'Escape' });
      expect(handleClose).toHaveBeenCalledTimes(1);
    });
  });
});

