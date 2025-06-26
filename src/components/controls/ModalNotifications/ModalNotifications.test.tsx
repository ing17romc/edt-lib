import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ModalNotifications from '../index';

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

  test('renders modal with notification', () => {
    const { container, getAllByText, getByRole } = render(
      <ModalNotifications {...mockProps} />
    );

    const modal = getByRole('dialog');
    expect(modal).toBeInTheDocument();

    // Buscar el título por texto (ahora Title usa children)
    const titleElement = container.querySelector('h1');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(mockProps.title);

    // Puede haber más de un elemento con el mismo texto, así que usamos getAllByText
    expect(getAllByText(mockProps.message).length).toBeGreaterThan(0);
    expect(getAllByText(mockProps.details).length).toBeGreaterThan(0);

    const iconElement = container.querySelector('.circle.info.center h1');
    expect(iconElement).toHaveAttribute('aria-label', 'Icono de info');
  });

  test('renders different notification types', () => {
    notificationTypeTestCases.forEach(({ type, className, icon }) => {
      const { container } = render(
        <ModalNotifications
          {...mockProps}
          type={type}
        />
      );

      const circleElement = container.querySelector(`.${className.replace(/ /g, '.')}`);
      expect(circleElement).toBeInTheDocument();

      const iconElement = screen.getByText(icon);
      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveAttribute('aria-label', `Icono de ${type.toLowerCase()}`);
    });
  });

  test('renders without details when not provided', () => {
    render(
      <ModalNotifications
        {...mockProps}
        details={undefined}
      />
    );

    const detailsElement = screen.queryByText(mockProps.details);
    expect(detailsElement).not.toBeInTheDocument();
  });

  test('calls eventContinue when continue button is clicked', () => {
    render(
      <ModalNotifications {...mockProps} />
    );

    const continueButton = screen.getByRole('button', { name: /continuar/i });
    fireEvent.click(continueButton);
    expect(mockEventContinue).toHaveBeenCalledTimes(1);
  });

  test('calls eventModal when close button is clicked', () => {
    render(
      <ModalNotifications {...mockProps} />
    );

    const closeButtons = screen.getAllByRole('button', { name: /cerrar modal/i });
    const closeButton = closeButtons.find(btn => btn.classList.contains('modal-close-button'));
    expect(closeButton).toBeInTheDocument();
    if (!closeButton) throw new Error('closeButton not found');
    fireEvent.click(closeButton);
    expect(mockEventModal).toHaveBeenCalledTimes(1);
  });

  test('has correct grid structure', () => {
    render(
      <ModalNotifications {...mockProps} />
    );

    const { container } = render(
      <ModalNotifications {...mockProps} />
    );

    const gridPrimary = container.querySelector('.grid-primary');
    expect(gridPrimary).toBeInTheDocument();

    const titleContainer = container.querySelector('.start-1.size-12');
    expect(titleContainer).toBeInTheDocument();

    const contentContainer = container.querySelector('.center.start-1.size-12.padding-v-40');
    expect(contentContainer).toBeInTheDocument();
  });
});
