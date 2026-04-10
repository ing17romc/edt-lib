import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '..';
import { 
  mockPaginationProps, 
  mockPaginationCustomLabels, 
  mockPaginationDisabled,
  mockPaginationManyPages,
  mockPaginationSmallSize,
  mockPaginationLargeSize 
} from './mocks';

describe('Pagination', () => {
  it('renders correctly with default props', () => {
    render(<Pagination {...mockPaginationProps} />);
    
    // Verify that the navigation buttons are rendered
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    
    // Verify that the pages are rendered
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('allows customizing button labels', () => {
    render(<Pagination {...mockPaginationCustomLabels} />);
    
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
  });

  it('calls onPageChange with the correct page number when a page button is clicked', () => {
    const handlePageChange = vi.fn();
    render(
      <Pagination 
        {...mockPaginationProps} 
        onPageChange={handlePageChange} 
      />
    );
    
    const pageButton = screen.getByText('2');
    fireEvent.click(pageButton);
    
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  it('disables buttons when the disabled property is true', () => {
    render(<Pagination {...mockPaginationDisabled} />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toBeDisabled();
    });
  });

  it('shows ellipsis when there are many pages', () => {
    render(<Pagination {...mockPaginationManyPages} />);
    
    // Should show ellipsis to indicate hidden pages
    const ellipsis = screen.getAllByText('...');
    expect(ellipsis.length).toBeGreaterThan(0);
  });

  it('does not render and shows a warning if totalPages is 0', () => {
     
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(<Pagination currentPage={1} totalPages={0} onPageChange={vi.fn()} />);
    expect(container.firstChild).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith('Pagination: totalPages must be greater than 0');
    warnSpy.mockRestore();
  });

  it('does not render and shows a warning if currentPage is out of range', () => {
     
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(<Pagination currentPage={10} totalPages={5} onPageChange={vi.fn()} />);
    expect(container.firstChild).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith('Pagination: currentPage (10) is out of range [1, 5]');
    warnSpy.mockRestore();
  });

  it('applies the correct CSS class for small size (SMALL)', () => {
    const { container } = render(<Pagination {...mockPaginationSmallSize} />);
    const pagination = container.firstChild;
    expect(pagination).toHaveClass('pagination--small');
  });

  it('applies the correct CSS class for large size (LARGE)', () => {
    const { container } = render(<Pagination {...mockPaginationLargeSize} />);
    const pagination = container.firstChild;
    expect(pagination).toHaveClass('pagination--large');
  });

  it('uses MEDIUM size by default if none is specified', () => {
    const { container } = render(<Pagination {...mockPaginationProps} size={undefined} />);
    const pagination = container.firstChild;
    // Should not have the small or large size class
    expect(pagination).not.toHaveClass('pagination--small');
    expect(pagination).not.toHaveClass('pagination--large');
  });
});
