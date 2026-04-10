import React from 'react';
import { render, screen } from '@testing-library/react';
import TableDefault from '..';
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

describe('TableDefault', () => {
  it('renders without errors with empty data', () => {
    render(<TableDefault dataTable={[]} />);
    
    // Verify the title is rendered
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    
    // Verify the table header is shown
    expect(screen.getByText('Table default')).toBeInTheDocument();
    
    // Verify there is only one row (the header) when there is no data
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(1); // Header only
  });

  it('renders correctly with data', () => {
    render(<TableDefault dataTable={mockData} />);
    
    // Verify the data is rendered
    const johnDoeCells = screen.getAllByText('John Doe');
    const janeDoeCells = screen.getAllByText('Jane Smith');
    const robertCells = screen.getAllByText('Robert Johnson');
    
    // Verify columns are repeated (4 times per data row)
    expect(johnDoeCells.length).toBe(4); // 4 repetitions per row
    expect(janeDoeCells.length).toBe(4);
    expect(robertCells.length).toBe(4);
    
    // Verify the correct status is shown
    const activeStatus = screen.getAllByText('Active');
    const inactiveStatus = screen.getAllByText('Inactive');
    expect(activeStatus.length).toBeGreaterThan(0);
    expect(inactiveStatus.length).toBeGreaterThan(0);
  });

  it('has the correct table structure with multiple columns', () => {
    render(<TableDefault dataTable={mockData} />);
    
    // Verify the table structure
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass('big-table');
    
    // Verify column headers (4 repetitions of Name, UserName, Status)
    const nameHeaders = screen.getAllByText('Name');
    const userHeaders = screen.getAllByText('UserName');
    const statusHeaders = screen.getAllByText('Status');
    
    expect(nameHeaders.length).toBe(4);
    expect(userHeaders.length).toBe(4);
    expect(statusHeaders.length).toBe(4);
    
    // Verify all data cells are present
    const allCells = screen.getAllByRole('cell');
    expect(allCells.length).toBe(mockData.length * 12); // 12 columns per row (4 repetitions of 3 columns)
  });

  it('applies the correct CSS classes', () => {
    render(<TableDefault dataTable={mockData} />);
    
    // Verify the main container classes
    const container = screen.getByText('Example tables').closest('.container-body');
    expect(container).toHaveClass('container-body');
    
    // Verify the grid classes
    const grid = screen.getByText('Table default').closest('.grid-secondary');
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
    
    render(<TableDefault dataTable={edgeCaseData} />);
    
    // Verify empty names are handled correctly
    const emptyNameCells = screen.getAllByRole('cell', { name: '' });
    expect(emptyNameCells.length).toBe(4); // 4 repetitions
    
    // Verify long names are handled correctly
    const longNameText = 'A very long name that might break the layout A very long name that might break the layout';
    const longNameCells = screen.getAllByText(longNameText);
    expect(longNameCells.length).toBe(4); // 4 repetitions
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
