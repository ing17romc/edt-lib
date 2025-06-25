import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TableDefault from "../index";
import type { TableRowData } from "../types";

const mockData: TableRowData[] = [
  { name: 'John', userName: 'john123', status: true },
  { name: 'Jane', userName: 'jane456', status: false }
];

describe('TableDefault', () => {
  it('renderiza la tabla y los encabezados', () => {
    render(<TableDefault dataTable={mockData} />);
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    expect(screen.getByText('Table default')).toBeInTheDocument();
    expect(screen.getAllByText('Name').length).toBeGreaterThan(0);
    expect(screen.getAllByText('UserName').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Status').length).toBeGreaterThan(0);
  });

  it('renderiza correctamente los datos de cada fila', () => {
    render(<TableDefault dataTable={mockData} />);
    expect(screen.getAllByText('john123').length).toBeGreaterThan(0);
    expect(screen.getAllByText('jane456').length).toBeGreaterThan(0);
  });
});
