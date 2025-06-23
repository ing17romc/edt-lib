import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TableActiveRow from './index';
import type { TableRowData } from './types';

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

  it('permite hacer click en una fila (simulación)', () => {
    render(<TableActiveRow dataTable={mockData} />);
    const row = screen.getByText('john123').closest('tr');
    if (row) {
      fireEvent.click(row);
      // Aquí podrías agregar un mock de alert o similar si se implementa interacción real
    }
    expect(row).toBeInTheDocument();
  });
});
