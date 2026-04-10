import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableWithIcon from '..';
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

describe('TableWithIcon', () => {
  // Global alert mock
  const originalAlert = window.alert;
  beforeAll(() => {
    window.alert = vi.fn();
  });

  afterAll(() => {
    window.alert = originalAlert;
  });

  it('renders without errors with empty data', () => {
    render(<TableWithIcon dataTable={[]} />);
    
    // Verify the title is rendered
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    
    // Verify the table header is shown
    expect(screen.getByText('Table with icon')).toBeInTheDocument();
    
    // Verify there is only one row (the header) when there is no data
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(1); // Header only
  });

  it('renders correctly with data', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Verify the data is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    
    // Verify action buttons with icons are shown
    // Verify there is an edit and delete button for each item in mockData
    mockData.forEach((_, index) => {
      expect(screen.getByTestId(`edit_${index}`)).toBeInTheDocument();
      expect(screen.getByTestId(`delete_${index}`)).toBeInTheDocument();
    });
    
    // Verify the correct status is shown
    const activeStatus = screen.getAllByText('Active');
    expect(activeStatus.length).toBeGreaterThan(0);
  });

  it('handles icon button clicks correctly', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Click the edit button in the first row
    const firstEditButton = screen.getByTestId('edit_0');
    fireEvent.click(firstEditButton);
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
    
    // Clear the alert mock
    (window.alert as ReturnType<typeof vi.fn>).mockClear();
    
    // Click the delete button in the first row
    const firstDeleteButton = screen.getByTestId('delete_0');
    fireEvent.click(firstDeleteButton);
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
  });

  it('has the correct table structure', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Verify the table structure
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    // Verify column headers
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('UserName')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    
    // Verify there is one row per data item plus the header
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(mockData.length + 1); // +1 for header
  });

  it('applies the correct CSS classes', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Verify the main container classes
    const container = screen.getByText('Example tables').closest('.container-body');
    expect(container).toHaveClass('container-body');
    
    // Verify the grid classes
    const grid = screen.getByText('Table with icon').closest('.grid-secondary');
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
    
    render(<TableWithIcon dataTable={edgeCaseData} />);
    
    // Verify empty names are handled correctly
    const emptyCells = screen.getAllByRole('cell', { name: '' });
    expect(emptyCells.length).toBeGreaterThan(0);
    
    // Verify long names are handled correctly
    const longNameText = 'A very long name that might break the layout A very long name that might break the layout';
    const longNameCell = screen.getByText(longNameText);
    expect(longNameCell).toBeInTheDocument();
    
    // Verify action buttons render correctly
    const editButtons = screen.getAllByLabelText('Edit');
    const deleteButtons = screen.getAllByLabelText('Delete');
    expect(editButtons).toHaveLength(edgeCaseData.length);
    expect(deleteButtons).toHaveLength(edgeCaseData.length);
  });

  it('assigns unique IDs to icon buttons', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Verify buttons have unique IDs
    mockData.forEach((_, index) => {
      const editButton = screen.getByTestId(`edit_${index}`);
      const deleteButton = screen.getByTestId(`delete_${index}`);
      
      expect(editButton).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
    });
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

// Mock for the IconButton component
vi.mock('components/IconButton', () => ({
  __esModule: true,
  default: ({ 
    id, 
    onClick,
    'aria-label': ariaLabel,
  }: { 
    icon: string; 
    id: string; 
    size: string;
    'aria-label'?: string;
    onClick: () => void 
  }) => (
    <button 
      onClick={onClick}
      data-testid={id}
      aria-label={ariaLabel ?? id}
    >
      {id}
    </button>
  ),
}));
