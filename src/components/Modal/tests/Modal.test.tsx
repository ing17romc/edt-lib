import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '..';
import styles from '../styles/Modal.module.scss';
import { 
  mockModalProps, 
  mockModalWithFooter, 
  mockModalWithoutTitle, 
  mockModalWithCustomSize,
  mockModalWithDisabledClose,
  mockModalWithCustomCloseText
} from './mocks';
import { ComponentSize } from '../../types';

describe('Modal', () => {
  it('renders correctly with default props', () => {
    render(<Modal {...mockModalProps} />);
    
    // Verify that the modal renders with the title and content
    const modalTitle = screen.getByRole('heading', { name: /modal title/i, level: 2 });
    const modalContent = screen.getByText('Test modal content');
    
    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
    
    // Verify that the close button is present
    const closeButton = screen.getByRole('button', { name: mockModalProps.closeButtonText || 'Close' });
    expect(closeButton).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(<Modal {...mockModalProps} isOpen={false} />);
    
    // Verify that the modal is not in the document
    expect(screen.queryByText('Modal Title')).not.toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', () => {
    const handleClose = vi.fn();
    render(<Modal {...mockModalProps} onClose={handleClose} />);
    
    const closeButton = screen.getByRole('button', { name: mockModalProps.closeButtonText || 'Close' });
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when the overlay is clicked', () => {
    const handleClose = vi.fn();
    render(
      <Modal 
        isOpen={true}
        onClose={handleClose}
        closeOnOverlayClick={true}
        title="Test Modal"
      >
        Test content
      </Modal>
    );
    
    // Find the overlay button
    const overlayButton = screen.getByRole('button', { name: 'Close modal' });
    expect(overlayButton).toBeInTheDocument();
    
    // Simulate click on the overlay button
    fireEvent.click(overlayButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose when clicking inside the modal', () => {
    const handleClose = vi.fn();
    render(<Modal {...mockModalProps} onClose={handleClose} />);
    
    const modalContent = screen.getByText('Test modal content').closest(`.${styles.modalContainer}`);
    if (modalContent) {
      fireEvent.click(modalContent);
    }
    
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renders the footer when provided', () => {
    render(<Modal {...mockModalWithFooter} />);
    
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('does not show the close button when showCloseButton is false', () => {
    const { container } = render(<Modal {...mockModalWithDisabledClose} />);
    
    // Verify that the close button (×) is not present
    const closeButton = container.querySelector(`.${styles.closeButton}`);
    expect(closeButton).not.toBeInTheDocument();
  });

  it('uses custom text for the close button', () => {
    render(<Modal {...mockModalWithCustomCloseText} />);
    
    const closeButton = screen.getByRole('button', { name: /close window/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('applies the custom size class', () => {
    const { container } = render(<Modal {...mockModalWithCustomSize} />);
    
    // Verify that the modal has the custom size class
    const modalElement = container.querySelector(`.${styles.modalContainer}.${styles[mockModalWithCustomSize.size || ComponentSize.MEDIUM]}`);
    expect(modalElement).toBeInTheDocument();
    
    // Verify that the modal has the correct size class
    expect(modalElement).toHaveClass(styles[mockModalWithCustomSize.size || ComponentSize.MEDIUM]);
  });

  it('does not show the title when not provided', () => {
    render(<Modal {...mockModalWithoutTitle} />);
    
    const title = screen.queryByRole('heading');
    expect(title).not.toBeInTheDocument();
  });

  it('closes with the Escape key', () => {
    const handleClose = vi.fn();
    render(<Modal {...mockModalProps} onClose={handleClose} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
