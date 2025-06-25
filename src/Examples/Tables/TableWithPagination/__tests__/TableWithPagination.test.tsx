import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TableWithPagination from "../index";
import type { TableRowData } from "../types";

const mockData: TableRowData[] = [
  { name: 'John', userName: 'john123', status: true },
  { name: 'Jane', userName: 'jane456', status: false },
  { name: 'Alice', userName: 'alice789', status: true },
  { name: 'Bob', userName: 'bob321', status: false }
];

describe('TableWithPagination', () => {
  it('renderiza la tabla y los encabezados', () => {
    render(<TableWithPagination dataTable={mockData} />);
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    expect(screen.getByText('Table with pagination')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('UserName')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('muestra el número correcto de filas por página y permite cambiarlo', () => {
    render(<TableWithPagination dataTable={mockData} />);
    // Por defecto, pages=3, así que deberían mostrarse 3 filas en la primera página
    expect(screen.getAllByRole('row')).toHaveLength(4); // 1 header + 3 datos
    // Cambiar a 2 filas por página
    const selector = screen.getByLabelText('Number item by page') as HTMLSelectElement;
    fireEvent.change(selector, { target: { value: '2' } });
    // Ahora deberían mostrarse 2 filas en la primera página
    expect(screen.getAllByRole('row')).toHaveLength(3); // 1 header + 2 datos
  });

  it('permite cambiar de página con la paginación', () => {
    render(<TableWithPagination dataTable={mockData} />);
    // Botón de siguiente página
    const nextBtn = screen.getByRole('button', { name: /2/i });
    fireEvent.click(nextBtn);
    // Ahora debería mostrar la segunda página
    expect(screen.getByText('bob321')).toBeInTheDocument();
  });
});
