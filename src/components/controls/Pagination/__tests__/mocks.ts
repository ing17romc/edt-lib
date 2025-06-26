// Mock function for onPageChange
export const onPageChangeMock = jest.fn();

// Test data
export const testProps = {
  totalCount: 10,
  currentPage: 1,
  onPageChange: onPageChangeMock,
};

// Utility function to reset mocks between tests
export const resetMocks = () => {
  onPageChangeMock.mockClear();
};
