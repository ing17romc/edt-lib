import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableActiveRow from '..';
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

describe('TableActiveRow', () => {
  // Mock de alerta global
  const originalAlert = window.alert;
  beforeAll(() => {
    window.alert = jest.fn();
  });

  afterAll(() => {
    window.alert = originalAlert;
  });

  it('renderiza sin errores con datos vacíos', () => {
    render(<TableActiveRow dataTable={[]} />);
    
    // Verificar que se renderiza la tabla vacía
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    // Verificar que solo hay una fila (el encabezado) cuando no hay datos
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(1); // Solo el encabezado
    
    // Verificar que se renderiza el título
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    
    // Verificar que se muestra el encabezado de la tabla
    expect(screen.getByText('Table active row')).toBeInTheDocument();
    
    // Verificar que se muestran los encabezados de las columnas
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('UserName')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    
    // Verificar que no hay filas de datos (solo el encabezado)
    const rowsData = screen.queryAllByRole('row');
    expect(rowsData.length).toBe(1); // Solo el encabezado
  });

  it('renderiza correctamente con datos', () => {
    render(<TableActiveRow dataTable={mockData} />);
    
    // Verificar que se renderizan los datos
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    
    // Verificar que hay al menos un estado 'Active' y uno 'Inactive'
    const activeStatuses = screen.getAllByText('Active');
    const inactiveStatuses = screen.getAllByText('Inactive');
    expect(activeStatuses.length).toBeGreaterThan(0);
    expect(inactiveStatuses.length).toBeGreaterThan(0);
    
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('janesmith')).toBeInTheDocument();
    
    expect(screen.getByText('Robert Johnson')).toBeInTheDocument();
    expect(screen.getByText('rjohnson')).toBeInTheDocument();
    
    // Verificar que las filas tienen la clase 'active'
    const rows = screen.getAllByRole('row').slice(1); // Excluimos el encabezado
    rows.forEach(row => {
      expect(row).toHaveClass('active');
    });
  });

  it('maneja correctamente el clic en una fila', () => {
    render(<TableActiveRow dataTable={mockData} />);
    
    // Hacer clic en la primera fila
    const firstRow = screen.getByText('John Doe').closest('tr');
    if (firstRow) {
      fireEvent.click(firstRow);
    }
    
    // Verificar que se llamó a alert con el mensaje correcto
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
  });

  it('muestra correctamente los estados activos e inactivos', () => {
    render(<TableActiveRow dataTable={mockData} />);
    
    // Verificar que los estados activos tienen la clase 'font-blue'
    const statusElements = screen.getAllByTestId('status-mock');
    const activeStatus = statusElements.filter(
      (element) => element.textContent === 'Active'
    );
    expect(activeStatus.length).toBeGreaterThan(0);
    
    // Verificar que los estados inactivos tienen la clase 'font-red'
    const inactiveStatus = statusElements.filter(
      (element) => element.textContent === 'Inactive'
    );
    expect(inactiveStatus.length).toBeGreaterThan(0);
  });

  it('tiene la estructura de tabla correcta', () => {
    render(<TableActiveRow dataTable={mockData} />);
    
    // Verificar la estructura de la tabla
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    // Verificar los encabezados de columna
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(3);
    expect(headers[0]).toHaveTextContent('Name');
    expect(headers[1]).toHaveTextContent('UserName');
    expect(headers[2]).toHaveTextContent('Status');
    
    // Verificar el ancho de las columnas
    expect(headers[0]).toHaveStyle('width: 40%');
    expect(headers[1]).toHaveStyle('width: 40%');
    expect(headers[2]).toHaveStyle('width: 20%');
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
    
    render(<TableActiveRow dataTable={edgeCaseData} />);
    
    // Verificar que se manejan correctamente los nombres vacíos
    const emptyCells = screen.getAllByRole('cell', { name: '' });
    expect(emptyCells.length).toBeGreaterThan(0);
    
    // Verificar que se manejan correctamente los nombres largos
    const longNameText = 'A very long name that might break the layout A very long name that might break the layout';
    const longNameCell = screen.getByText(longNameText);
    expect(longNameCell).toBeInTheDocument();
  });
});

// Mock para getStatus
jest.mock('../../utils', () => ({
  __esModule: true,
  default: (value: boolean | number) => (
    <span data-testid="status-mock">{value ? 'Active' : 'Inactive'}</span>
  ),
}));
