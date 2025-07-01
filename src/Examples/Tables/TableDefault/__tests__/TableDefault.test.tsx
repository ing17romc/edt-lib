import React from 'react';
import { render, screen } from '@testing-library/react';
import TableDefault from '..';
import type { TableRowData } from '../types';

// Datos de prueba
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
    status: 1, // También probamos con valor numérico
  },
];

describe('TableDefault', () => {
  it('renderiza sin errores con datos vacíos', () => {
    render(<TableDefault dataTable={[]} />);
    
    // Verificar que se renderiza el título
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    
    // Verificar que se muestra el encabezado de la tabla
    expect(screen.getByText('Table default')).toBeInTheDocument();
    
    // Verificar que solo hay una fila (el encabezado) cuando no hay datos
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(1); // Solo el encabezado
  });

  it('renderiza correctamente con datos', () => {
    render(<TableDefault dataTable={mockData} />);
    
    // Verificar que se renderizan los datos
    const johnDoeCells = screen.getAllByText('John Doe');
    const janeDoeCells = screen.getAllByText('Jane Smith');
    const robertCells = screen.getAllByText('Robert Johnson');
    
    // Verificar que se repiten las columnas (4 veces por fila de datos)
    expect(johnDoeCells.length).toBe(4); // 4 repeticiones por fila
    expect(janeDoeCells.length).toBe(4);
    expect(robertCells.length).toBe(4);
    
    // Verificar que se muestra el estado correcto
    const activeStatus = screen.getAllByText('Active');
    const inactiveStatus = screen.getAllByText('Inactive');
    expect(activeStatus.length).toBeGreaterThan(0);
    expect(inactiveStatus.length).toBeGreaterThan(0);
  });

  it('tiene la estructura de tabla correcta con múltiples columnas', () => {
    render(<TableDefault dataTable={mockData} />);
    
    // Verificar la estructura de la tabla
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass('big-table');
    
    // Verificar los encabezados de columna (4 repeticiones de Name, UserName, Status)
    const nameHeaders = screen.getAllByText('Name');
    const userHeaders = screen.getAllByText('UserName');
    const statusHeaders = screen.getAllByText('Status');
    
    expect(nameHeaders.length).toBe(4);
    expect(userHeaders.length).toBe(4);
    expect(statusHeaders.length).toBe(4);
    
    // Verificar que todas las celdas de datos están presentes
    const allCells = screen.getAllByRole('cell');
    expect(allCells.length).toBe(mockData.length * 12); // 12 columnas por fila (4 repeticiones de 3 columnas)
  });

  it('aplica las clases CSS correctas', () => {
    render(<TableDefault dataTable={mockData} />);
    
    // Verificar las clases del contenedor principal
    const container = screen.getByText('Example tables').closest('.container-body');
    expect(container).toHaveClass('container-body');
    
    // Verificar las clases de la cuadrícula
    const grid = screen.getByText('Table default').closest('.grid-secondary');
    expect(grid).toHaveClass('grid-secondary');
    
    // Verificar las clases de la tabla
    const tableWrapper = screen.getByRole('table').closest('.bg-gray');
    expect(tableWrapper).toHaveClass('bg-gray', 'padding-h-30', 'padding-v-30');
  });

  it('maneja correctamente los datos con valores límite', () => {
    const edgeCaseData: TableRowData[] = [
      {
        name: '', // Nombre vacío
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
    
    // Verificar que se manejan correctamente los nombres vacíos
    const emptyNameCells = screen.getAllByRole('cell', { name: '' });
    expect(emptyNameCells.length).toBe(4); // 4 repeticiones
    
    // Verificar que se manejan correctamente los nombres largos
    const longNameText = 'A very long name that might break the layout A very long name that might break the layout';
    const longNameCells = screen.getAllByText(longNameText);
    expect(longNameCells.length).toBe(4); // 4 repeticiones
  });
});

// Mock para getStatus
jest.mock('../../utils', () => ({
  __esModule: true,
  default: (value: boolean | number) => (
    <span data-testid={`status-${value ? 'active' : 'inactive'}`}>
      {value ? 'Active' : 'Inactive'}
    </span>
  ),
}));
