import React from 'react';
import { render, screen, fireEvent, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalNotifications from '.';

// Define the notification type for testing
type NotificationType = 'ERROR' | 'WARNING' | 'INFO' | 'SUCCESSFULL';

// Mock data for testing
const mockEventModal = jest.fn();
const mockEventContinue = jest.fn();

const defaultProps = {
  title: 'Test Notification',
  message: 'This is a test notification',
  details: 'Additional details for testing',
  type: 'INFO' as const,
  eventContinue: mockEventContinue,
  show: true,
  eventModal: mockEventModal
};

const notificationTypeTestCases = [
  { type: 'ERROR' as const, className: 'circle error', icon: '❌' },
  { type: 'WARNING' as const, className: 'circle warning', icon: '⚠️' },
  { type: 'INFO' as const, className: 'circle info', icon: 'ℹ️' },
  { type: 'SUCCESSFULL' as const, className: 'circle successfull', icon: '✅' }
];

// Reset all mocks before each test
const resetMocks = () => {
  mockEventModal.mockClear();
  mockEventContinue.mockClear();
};

describe('ModalNotifications Component', () => {
  beforeEach(() => {
    resetMocks();
  });

  const mockProps = {
    ...defaultProps,
    title: 'Notificación',
    message: 'Esta es una notificación',
    details: 'Detalles adicionales',
  };

  test('renders modal with notification', async () => {
    await act(async () => {
      render(<ModalNotifications {...mockProps} />);
    });

    // Since the modal is rendered in a portal, we need to query document.body
    const modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();

    // Check for title
    const titleElement = document.querySelector('.modal-body h1');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(mockProps.title);

    // Check for message and details
    const messageElements = screen.getAllByText(mockProps.message);
    expect(messageElements.length).toBeGreaterThan(0);
    
    const detailsElements = screen.getAllByText(mockProps.details);
    expect(detailsElements.length).toBeGreaterThan(0);

    // Check for icon
    const iconElement = document.querySelector('.circle.info.center h1');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('aria-label', 'Icono de info');
  });

  test('renders different notification types', async () => {
    for (const { type, className, icon } of notificationTypeTestCases) {
      await act(async () => {
        render(
          <ModalNotifications
            {...mockProps}
            type={type}
          />
        );
      });

      const circleElement = document.querySelector(`.${className.replace(/ /g, '.')}`);
      expect(circleElement).toBeInTheDocument();

      const iconElement = screen.getByText(icon);
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveAttribute('aria-label', `Icono de ${type.toLowerCase()}`);
      
      // Clean up after each test case
      cleanup();
    }
  });

  test('renders without details when not provided', async () => {
    await act(async () => {
      render(
        <ModalNotifications
          {...mockProps}
          details={undefined}
        />
      );
    });

    const detailsElement = screen.queryByText(mockProps.details);
    expect(detailsElement).not.toBeInTheDocument();
  });

  test('calls eventContinue when continue button is clicked', async () => {
    await act(async () => {
      render(<ModalNotifications {...mockProps} />);
    });

    const continueButton = screen.getByRole('button', { name: /continuar/i });
    await act(async () => {
      fireEvent.click(continueButton);
    });
    expect(mockEventContinue).toHaveBeenCalledTimes(1);
  });

  test('calls eventModal when close button is clicked', async () => {
    await act(async () => {
      render(<ModalNotifications {...mockProps} />);
    });

    // Find the close button in the portal
    const closeButton = document.querySelector('.modal-close-button');
    expect(closeButton).toBeInTheDocument();
    
    if (!closeButton) throw new Error('closeButton not found');
    
    await act(async () => {
      fireEvent.click(closeButton);
    });
    
    expect(mockEventModal).toHaveBeenCalledTimes(1);
  });

  test('has correct grid structure', async () => {
    await act(async () => {
      render(<ModalNotifications {...mockProps} />);
    });

    // Check for grid structure in the portal
    const gridPrimary = document.querySelector('.grid-primary');
    expect(gridPrimary).toBeInTheDocument();

    const titleContainer = document.querySelector('.start-1.size-12');
    expect(titleContainer).toBeInTheDocument();

    const contentContainer = document.querySelector('.center.start-1.size-12.padding-v-40');
    expect(contentContainer).toBeInTheDocument();
  });
});
