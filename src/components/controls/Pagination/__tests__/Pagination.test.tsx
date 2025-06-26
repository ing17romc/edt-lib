import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '..'; // This imports from index.tsx in the parent directory
import { onPageChangeMock, testProps, resetMocks } from './mocks';

describe('Pagination Component', () => {
  afterEach(() => {
    resetMocks();
  });

  test('renders pagination correctly', () => {
    render(<Pagination {...testProps} />);

    const paginationContainer = screen.getByRole('list');
    expect(paginationContainer).toBeInTheDocument();

    const pageItems = screen.getAllByRole('listitem');
    // 10 pages + 2 navigation arrows
    expect(pageItems).toHaveLength(12);
  });

  test('calls onPageChange with correct page number on click', () => {
    render(<Pagination {...testProps} currentPage={3} />);

    const page5 = screen.getByText('5');
    fireEvent.click(page5);
    expect(onPageChangeMock).toHaveBeenCalledWith(5);
  });

  test('disables previous button on first page', () => {
    render(<Pagination {...testProps} currentPage={1} />);

    const previousButton = screen.getAllByRole('button')[0];
    expect(previousButton).toBeDisabled();
    fireEvent.click(previousButton);
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });

  test('disables next button on last page', () => {
    render(<Pagination {...testProps} currentPage={10} />);

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[buttons.length - 1];
    expect(nextButton).toBeDisabled();
    fireEvent.click(nextButton);
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });

  test('calls onPageChange when clicking next', () => {
    render(<Pagination {...testProps} currentPage={5} />);

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons[buttons.length - 1];
    fireEvent.click(nextButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(6);
  });

  test('calls onPageChange when clicking previous', () => {
    render(<Pagination {...testProps} currentPage={5} />);

    const previousButton = screen.getAllByRole('button')[0];
    fireEvent.click(previousButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });

  test('does not render when totalCount is less than 2', () => {
    const { container } = render(<Pagination {...testProps} totalCount={1} />);
    expect(container.firstChild).toBeNull();
  });
});
