import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TableWithIcon from './index';
import type { TableRowData } from './types';

const mockData: TableRowData[] = [
  { name: 'John', userName: 'john123', status: true },
  { name: 'Jane', userName: 'jane456', status: false }
];

describe('TableWithIcon', () => {
  it('renderiza la tabla y los encabezados', () => {
    render(<TableWithIcon dataTable={mockData} />);
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    expect(screen.getByText('Table with icon')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('UserName')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renderiza los botones de acción en cada fila', () => {
    render(<TableWithIcon dataTable={mockData} />);
    expect(screen.getAllByLabelText('Edit').length).toBeGreaterThan(0);
    expect(screen.getAllByLabelText('Delete').length).toBeGreaterThan(0);
  });

  it('renderiza correctamente los datos de cada fila', () => {
    render(<TableWithIcon dataTable={mockData} />);
    expect(screen.getByText('john123')).toBeInTheDocument();
    expect(screen.getByText('jane456')).toBeInTheDocument();
  });
});
