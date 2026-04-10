import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableWithButton from '..';
import type { TableRowData } from '../types';

// Test data
const mockData: TableRowData[] = [
  {
    name: 'John Doe',
    userName: 'johndoe',
    status: true,
  },
  {
    name: 'Jane Smith',
    userName: 'janesmith',
    status: false,
  },
  {
    name: 'Robert Johnson',
    userName: 'rjohnson',
    status: 1, // Also testing with numeric value
  },
];

describe('TableWithButton', () => {
  // Global alert mock
  const originalAlert = window.alert;
  beforeAll(() => {
    window.alert = vi.fn();
  });

  afterAll(() => {
    window.alert = originalAlert;
  });

  it('renders without errors with empty data', () => {
    render(<TableWithButton dataTable={[]} />);
    
    // Verify the title is rendered
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    
    // Verify the table header is shown
    expect(screen.getByText('Table with button')).toBeInTheDocument();
    
    // Verify there is only one row (the header) when there is no data
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(1); // Header only
  });

  it('renders correctly with data', () => {
    render(<TableWithButton dataTable={mockData} />);
    
    // Verify the data is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    
    // Verify action buttons are shown
    const updateButtons = screen.getAllByTitle('Update');
    const deleteButtons = screen.getAllByTitle('Delete');
    
    expect(updateButtons).toHaveLength(mockData.length);
    expect(deleteButtons).toHaveLength(mockData.length);
    
    // Verify the correct status is shown
    const activeStatus = screen.getAllByText('Active');
    expect(activeStatus.length).toBeGreaterThan(0);
  });

  it('handles button clicks correctly', () => {
    render(<TableWithButton dataTable={mockData} />);
    
    // Click the update button in the first row
    const firstUpdateButton = screen.getAllByTitle('Update')[0];
    fireEvent.click(firstUpdateButton);
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
    
    // Clear the alert mock
    (window.alert as ReturnType<typeof vi.fn>).mockClear();
    
    // Click the delete button in the first row
    const firstDeleteButton = screen.getAllByTitle('Delete')[0];
    fireEvent.click(firstDeleteButton);
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
  });

  it('has the correct table structure', () => {
    render(<TableWithButton dataTable={mockData} />);
    
    // Verify the table structure
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    // Verify column headers
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(5); // Name, UserName, Status, Update, Delete
    expect(headers[0]).toHaveTextContent('Name');
    expect(headers[1]).toHaveTextContent('UserName');
    expect(headers[2]).toHaveTextContent('Status');
    expect(headers[3]).toHaveTextContent(''); // Update button
    expect(headers[4]).toHaveTextContent(''); // Delete button
    
    // Verify there is one row per data item plus the header
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(mockData.length + 1); // +1 for header
  });

  it('applies the correct CSS classes', () => {
    render(<TableWithButton dataTable={mockData} />);
    
    // Verify the main container classes
    const container = screen.getByText('Example tables').closest('.container-body');
    expect(container).toHaveClass('container-body');
    
    // Verify the grid classes
    const grid = screen.getByText('Table with button').closest('.grid-secondary');
    expect(grid).toHaveClass('grid-secondary');
    
    // Verify the table classes
    const tableWrapper = screen.getByRole('table').closest('.bg-gray');
    expect(tableWrapper).toHaveClass('bg-gray', 'padding-h-30', 'padding-v-30');
  });

  it('handles edge case data correctly', () => {
    const edgeCaseData: TableRowData[] = [
      {
        name: '', // Empty name
        userName: 'user',
        status: true,
      },
      {
        name: 'A very long name that might break the layout A very long name that might break the layout',
        userName: 'user',
        status: false,
      },
    ];
    
    render(<TableWithButton dataTable={edgeCaseData} />);
    
    // Verify empty names are handled correctly
    const emptyCells = screen.queryAllByRole('cell', { name: '' });
    expect(emptyCells.length).toBeGreaterThan(0);
    
    // Verify long names are handled correctly
    const longNameText = 'A very long name that might break the layout A very long name that might break the layout';
    const longNameCell = screen.getByText(longNameText);
    expect(longNameCell).toBeInTheDocument();
    
    // Verify buttons render correctly even with edge case data
    const updateButtons = screen.getAllByTitle('Update');
    const deleteButtons = screen.getAllByTitle('Delete');
    expect(updateButtons).toHaveLength(edgeCaseData.length);
    expect(deleteButtons).toHaveLength(edgeCaseData.length);
  });
});

// Mock for getStatus
vi.mock('../../utils', () => ({
  __esModule: true,
  default: (value: boolean | number) => (
    <span data-testid={`status-${value ? 'active' : 'inactive'}`}>
      {value ? 'Active' : 'Inactive'}
    </span>
  ),
}));

// Mock for the Button component
vi.mock('components/Button', () => ({
  __esModule: true,
  default: ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
    const buttonText = typeof children === 'string' ? children : '';
    return (
      <button 
        title={buttonText}
        onClick={onClick}
        data-testid={`${buttonText.toLowerCase()}-button`}
      >
        {children}
      </button>
    );
  },
}));
