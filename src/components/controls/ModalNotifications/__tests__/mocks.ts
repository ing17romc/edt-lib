import { ModalNotificationsProps } from '../types';

// Mock functions
const mockEventModal = jest.fn();
const mockEventContinue = jest.fn();

// Reset all mocks before each test
export const resetMocks = () => {
  mockEventModal.mockClear();
  mockEventContinue.mockClear();
};

// Default props for testing
export const defaultProps: ModalNotificationsProps = {
  title: 'Test Notification',
  message: 'This is a test notification',
  details: 'Additional details for testing',
  type: 'INFO',
  eventContinue: mockEventContinue,
  show: true,
  eventModal: mockEventModal
};

// Notification type test cases
export const notificationTypeTestCases = [
  { type: 'ERROR' as const, className: 'circle error', icon: '❌' },
  { type: 'WARNING' as const, className: 'circle warning', icon: '⚠️' },
  { type: 'INFO' as const, className: 'circle info', icon: 'ℹ️' },
  { type: 'SUCCESSFULL' as const, className: 'circle successfull', icon: '✅' }
];

// Export mock functions
export { mockEventModal, mockEventContinue };
