import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './index';

describe('Modal Component', () => {
  const mockEventModal = jest.fn();
  beforeEach(() => {
    mockEventModal.mockClear();
  });
  const mockChildren = <div>Test Content</div>;

  test('renders modal when show is true', () => {
    render(
      <Modal
        show={true}
        eventModal={mockEventModal}
      >
        {mockChildren}
      </Modal>
    );

    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('tabindex', '-1');
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

    const modal = screen.queryByRole('dialog');
    expect(modal).not.toBeInTheDocument();
  });

  test('calls eventModal when close button is clicked', () => {
    render(
      <Modal
        show={true}
        eventModal={mockEventModal}
      >
        {mockChildren}
      </Modal>
    );

    // Selecciona el botón de cerrar por clase
    const closeButtons = screen.getAllByRole('button', { name: /cerrar modal/i });
    const closeButton = closeButtons.find(btn => btn.classList.contains('modal-close-button'));
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton!);
    expect(mockEventModal).toHaveBeenCalledTimes(1);
  });

  test('calls eventModal when clicking outside content', () => {
    render(
      <Modal
        show={true}
        eventModal={mockEventModal}
      >
        {mockChildren}
      </Modal>
    );

    // Selecciona el botón overlay
    const overlayButton = screen.getAllByRole('button', { name: /cerrar modal/i })
      .find(btn => btn.classList.contains('modal-overlay'));
    expect(overlayButton).toBeInTheDocument();
    fireEvent.click(overlayButton!);
    expect(mockEventModal).toHaveBeenCalledTimes(1);
  });

  test('has correct ARIA attributes', () => {
    render(
      <Modal
        show={true}
        eventModal={mockEventModal}
      >
        <h2>Test Title</h2>
      </Modal>
    );

    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('aria-labelledby', 'modal-title');

    const closeButtons = screen.getAllByRole('button');
    // Busca el botón de cerrar por aria-label
    const closeButton = closeButtons.find(btn => btn.getAttribute('aria-label') === 'Cerrar modal');
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveAttribute('aria-label', 'Cerrar modal');
  });

  test('renders with correct structure', () => {
    const { container } = render(
      <Modal
        show={true}
        eventModal={mockEventModal}
      >
        <div>Content</div>
      </Modal>
    );

    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('modal');

    const content = container.querySelector('.modal-content');
    expect(content).toBeInTheDocument();

    const modalContainer = container.querySelector('.modal-container');
    expect(modalContainer).toBeInTheDocument();

    const title = container.querySelector('.modal-title');
    expect(title).toBeInTheDocument();
  });
});
