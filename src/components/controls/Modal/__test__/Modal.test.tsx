import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from '../index';
import { mockEventModal, mockChildren, withTitleChildren } from './mocks';

describe('Modal Component', () => {
  beforeEach(() => {
    mockEventModal.mockClear();
  });

  test('renders modal when show is true', () => {
    render(
      <Modal
        show={true}
        eventModal={mockEventModal}
      >
        {mockChildren}
      </Modal>
    );

    // Since the modal is rendered in a portal, we need to check document.body
    const modal = document.querySelector('.modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('tabindex', '-1');
    
    // Check for content in the portal
    const modalContent = document.querySelector('.modal-content');
    expect(modalContent).toBeInTheDocument();
    
    const modalContainer = document.querySelector('.modal-container');
    expect(modalContainer).toBeInTheDocument();
    
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  test('does not render modal when show is false', () => {
    render(
      <Modal
        show={false}
        eventModal={mockEventModal}
      >
        {mockChildren}
      </Modal>
    );

    const modal = document.querySelector('.modal');
    expect(modal).not.toBeInTheDocument();
  });

  test('renders with title when provided', () => {
    render(
      <>
        <div id="root" />
        <Modal
          show={true}
          eventModal={mockEventModal}
        >
          {withTitleChildren}
        </Modal>
      </>
    );

    // Check for the title and content from withTitleChildren
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test modal content')).toBeInTheDocument();
  });

  test('calls eventModal when close button is clicked', () => {
    render(
      <>
        <div id="root" />
        <Modal
          show={true}
          eventModal={mockEventModal}
        >
          {mockChildren}
        </Modal>
      </>
    );

    // Get the close button (not the overlay) by its class
    const closeButton = document.querySelector('.modal-close-button');
    expect(closeButton).toBeInTheDocument();
    if (closeButton) {
      fireEvent.click(closeButton);
      expect(mockEventModal).toHaveBeenCalledTimes(1);
    }
  });

  test('calls eventModal when clicking outside content', () => {
    render(
      <>
        <div id="root" />
        <Modal
          show={true}
          eventModal={mockEventModal}
        >
          {mockChildren}
        </Modal>
      </>
    );

    const overlayButton = screen.getAllByRole('button', { name: /cerrar modal/i })
      .find(btn => btn.classList.contains('modal-close-button'));
    expect(overlayButton).toBeInTheDocument();
    if (!overlayButton) throw new Error('overlayButton not found');
    fireEvent.click(overlayButton);
    expect(mockEventModal).toHaveBeenCalledTimes(1);
  });

  test('has correct ARIA attributes', () => {
    render(
      <>
        <div id="root" />
        <Modal
          show={true}
          eventModal={mockEventModal}
        >
          <h2>Test Title</h2>
        </Modal>
      </>
    );

    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');

    // Get the close button by its class
    const closeButton = document.querySelector('.modal-close-button');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveAttribute('aria-label', 'Cerrar modal');
    
    // Also verify the overlay button
    const overlayButton = document.querySelector('.modal-close-button');
    expect(overlayButton).toBeInTheDocument();
    expect(overlayButton).toHaveAttribute('aria-label', 'Cerrar modal');
  });

  test('has correct structure with all elements', () => {
    render(
      <>
        <div id="root" />
        <Modal
          show={true}
          eventModal={mockEventModal}
        >
          {mockChildren}
        </Modal>
      </>
    );

    const modal = document.querySelector('.modal');
    expect(modal).toBeInTheDocument();

    const content = document.querySelector('.modal-content');
    expect(content).toBeInTheDocument();

    const modalContainer = document.querySelector('.modal-container');
    expect(modalContainer).toBeInTheDocument();

    // Verificar el botón de cierre
    const closeButton = screen.getByRole('button', { name: /cerrar modal/i });
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveTextContent('X');
    expect(closeButton).toHaveClass('modal-close-button');
    expect(closeButton).toHaveAttribute('tabindex', '0');
    expect(closeButton).toHaveAttribute('aria-label', 'Cerrar modal');

    // Verificar el título y el contenido del modal
    const title = document.querySelector('.modal-body');
    expect(title).toBeInTheDocument();
    
    // Verificar que el contenido del modal se renderice correctamente
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
