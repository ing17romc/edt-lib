import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TableWithButton from '../index';
import type { TableRowData } from '../types';

const mockData: TableRowData[] = [
  { name: 'John', userName: 'john123', status: true },
  { name: 'Jane', userName: 'jane456', status: false }
];

describe('TableWithButton', () => {
  it('renderiza la tabla y los encabezados', () => {
    render(<TableWithButton dataTable={mockData} />);
    expect(screen.getByRole('heading', { name: 'Example tables' })).toBeInTheDocument();
    expect(screen.getByText('Table with button')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('UserName')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renderiza los botones de acción en cada fila', () => {
    render(<TableWithButton dataTable={mockData} />);
    expect(screen.getAllByText('Update').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Delete').length).toBeGreaterThan(0);
  });

  it('renderiza correctamente los datos de cada fila', () => {
    render(<TableWithButton dataTable={mockData} />);
    expect(screen.getByText('john123')).toBeInTheDocument();
    expect(screen.getByText('jane456')).toBeInTheDocument();
  });
});
