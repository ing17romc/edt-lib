import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TableActiveRow from "../index";
import type { TableRowData } from "../types";

// Mock the global alert function
const mockAlert = jest.fn();
global.alert = mockAlert;

const mockData: TableRowData[] = [
  { name: 'John', userName: 'john123', status: true },
  { name: 'Jane', userName: 'jane456', status: false }
];

describe('TableActiveRow', () => {
  it('renderiza la tabla y los encabezados', () => {
    render(<TableActiveRow dataTable={mockData} />);
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    expect(screen.getByText('Table active row')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('UserName')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renderiza correctamente los datos de cada fila', () => {
    render(<TableActiveRow dataTable={mockData} />);
    expect(screen.getByText('john123')).toBeInTheDocument();
    expect(screen.getByText('jane456')).toBeInTheDocument();
  });

  it('calls alert when a row is clicked', () => {
    render(<TableActiveRow dataTable={mockData} />);
    const row = screen.getByText('john123').closest('tr');
    
    expect(row).toBeInTheDocument();
    
    if (row) {
      fireEvent.click(row);
      expect(mockAlert).toHaveBeenCalledWith('clic!!!');
      expect(mockAlert).toHaveBeenCalledTimes(1);
    }
  });

  it('renders the correct status for each row', () => {
    render(<TableActiveRow dataTable={mockData} />);
    
    // Check active status
    const activeRow = screen.getByText('john123').closest('tr');
    expect(activeRow).toHaveTextContent('Active');
    
    // Check inactive status
    const inactiveRow = screen.getByText('jane456').closest('tr');
    expect(inactiveRow).toHaveTextContent('Inactive');
  });
});
