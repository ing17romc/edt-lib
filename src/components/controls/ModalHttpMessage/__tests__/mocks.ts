import { HttpStatusCode } from '../types';

// Mock function for eventModal
export const mockEventModal = jest.fn();

// Test data
export const mockProps = {
  show: true,
  eventModal: mockEventModal,
  code: 200 as HttpStatusCode,
  title: 'Éxito',
  message: 'Operación completada con éxito',
  details: 'Detalles adicionales de la operación'
};

// HTTP status code test cases
export const httpStatusTestCases = [
  { code: 199 as HttpStatusCode, className: 'code-one-hundred' },
  { code: 200 as HttpStatusCode, className: 'code-two-hundred' },
  { code: 300 as HttpStatusCode, className: 'code-three-hundred' },
  { code: 400 as HttpStatusCode, className: 'code-four-hundred' },
  { code: 500 as HttpStatusCode, className: 'code-five-hundred' }
];

// Utility function to reset mocks between tests
export const resetMocks = () => {
  mockEventModal.mockClear();
};
