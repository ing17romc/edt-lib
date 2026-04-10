import React from 'react';
import { ModalProps } from '../types';
import { ComponentSize } from '../../types';

export const mockModalProps: ModalProps = {
  isOpen: true,
  onClose: vi.fn(),
  title: 'Modal Title',
  children: <p>Test modal content</p>,
};

export const mockModalWithFooter: ModalProps = {
  isOpen: true,
  onClose: vi.fn(),
  title: 'Modal with Footer',
  children: <p>Modal content with footer</p>,
  footer: (
    <>
      <button type="button">Cancel</button>
      <button type="button">Accept</button>
    </>
  ),
};

export const mockModalWithoutTitle: ModalProps = {
  isOpen: true,
  onClose: vi.fn(),
  children: <p>Modal without title</p>,
};

export const mockModalWithCustomSize: ModalProps = {
  isOpen: true,
  onClose: vi.fn(),
  title: 'Large Modal',
  size: ComponentSize.LARGE,
  children: <p>This is a modal with custom size</p>,
};

export const mockModalWithDisabledClose: ModalProps = {
  isOpen: true,
  onClose: vi.fn(),
  title: 'No close button',
  showCloseButton: false,
  children: <p>This modal cannot be closed with the button</p>,
};

export const mockModalWithCustomCloseText: ModalProps = {
  isOpen: true,
  onClose: vi.fn(),
  title: 'Modal with custom text',
  closeButtonText: 'Close window',
  children: <p>This modal has custom close text</p>,
};
