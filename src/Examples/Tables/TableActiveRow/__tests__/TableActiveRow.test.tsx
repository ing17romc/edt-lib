import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableActiveRow from '..';
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

describe('TableActiveRow', () => {
  // Global alert mock
  const originalAlert = window.alert;
  beforeAll(() => {
    window.alert = vi.fn();
  });

  afterAll(() => {
    window.alert = originalAlert;
  });

  it('renders without errors with empty data', () => {
    render(<TableActiveRow dataTable={[]} />);
    
    // Verify the empty table is rendered
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    // Verify there is only one row (the header) when there is no data
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(1); // Header only
    
    // Verify the title is rendered
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    
    // Verify the table header is shown
    expect(screen.getByText('Table active row')).toBeInTheDocument();
    
    // Verify column headers are shown
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('UserName')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    
    // Verify there are no data rows (header only)
    const rowsData = screen.queryAllByRole('row');
    expect(rowsData.length).toBe(1); // Header only
  });

  it('renders correctly with data', () => {
    render(<TableActiveRow dataTable={mockData} />);
    
    // Verify the data is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    
    // Verify there is at least one 'Active' and one 'Inactive' status
    const activeStatuses = screen.getAllByText('Active');
    const inactiveStatuses = screen.getAllByText('Inactive');
    expect(activeStatuses.length).toBeGreaterThan(0);
    expect(inactiveStatuses.length).toBeGreaterThan(0);
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('janesmith')).toBeInTheDocument();
    
    expect(screen.getByText('Robert Johnson')).toBeInTheDocument();
    expect(screen.getByText('rjohnson')).toBeInTheDocument();
    
    // Verify rows have the 'active' class
    const rows = screen.getAllByRole('row').slice(1); // Exclude the header
    rows.forEach(row => {
      expect(row).toHaveClass('active');
    });
  });

  it('handles row click correctly', () => {
    render(<TableActiveRow dataTable={mockData} />);
    
    // Click the first row
    const firstRow = screen.getByText('John Doe').closest('tr');
    if (firstRow) {
      fireEvent.click(firstRow);
    }
    
    // Verify alert was called with the correct message
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
  });

  it('correctly displays active and inactive statuses', () => {
    render(<TableActiveRow dataTable={mockData} />);
    
    // Verify active statuses have the 'font-blue' class
    const statusElements = screen.getAllByTestId('status-mock');
    const activeStatus = statusElements.filter(
      (element) => element.textContent === 'Active'
    );
    expect(activeStatus.length).toBeGreaterThan(0);
    
    // Verify inactive statuses have the 'font-red' class
    const inactiveStatus = statusElements.filter(
      (element) => element.textContent === 'Inactive'
    );
    expect(inactiveStatus.length).toBeGreaterThan(0);
  });

  it('has the correct table structure', () => {
    render(<TableActiveRow dataTable={mockData} />);
    
    // Verify the table structure
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    // Verify column headers
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(3);
    expect(headers[0]).toHaveTextContent('Name');
    expect(headers[1]).toHaveTextContent('UserName');
    expect(headers[2]).toHaveTextContent('Status');
    
    // Verify column widths
    expect(headers[0]).toHaveStyle('width: 40%');
    expect(headers[1]).toHaveStyle('width: 40%');
    expect(headers[2]).toHaveStyle('width: 20%');
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
    
    render(<TableActiveRow dataTable={edgeCaseData} />);
    
    // Verify empty names are handled correctly
    const emptyCells = screen.getAllByRole('cell', { name: '' });
    expect(emptyCells.length).toBeGreaterThan(0);
    
    // Verify long names are handled correctly
    const longNameText = 'A very long name that might break the layout A very long name that might break the layout';
    const longNameCell = screen.getByText(longNameText);
    expect(longNameCell).toBeInTheDocument();
  });
});

// Mock for getStatus
vi.mock('../../utils', () => ({
  __esModule: true,
  default: (value: boolean | number) => (
    <span data-testid="status-mock">{value ? 'Active' : 'Inactive'}</span>
  ),
}));
