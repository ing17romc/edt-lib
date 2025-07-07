import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableWithButton from '..';
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

describe('TableWithButton', () => {
  // Mock de alerta global
  const originalAlert = window.alert;
  beforeAll(() => {
    window.alert = jest.fn();
  });

  afterAll(() => {
    window.alert = originalAlert;
  });

  it('renderiza sin errores con datos vacíos', () => {
    render(<TableWithButton dataTable={[]} />);
    
    // Verificar que se renderiza el título
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    
    // Verificar que se muestra el encabezado de la tabla
    expect(screen.getByText('Table with button')).toBeInTheDocument();
    
    // Verificar que solo hay una fila (el encabezado) cuando no hay datos
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(1); // Solo el encabezado
  });

  it('renderiza correctamente con datos', () => {
    render(<TableWithButton dataTable={mockData} />);
    
    // Verificar que se renderizan los datos
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    
    // Verificar que se muestran los botones de acción
    const updateButtons = screen.getAllByTitle('Update');
    const deleteButtons = screen.getAllByTitle('Delete');
    
    expect(updateButtons).toHaveLength(mockData.length);
    expect(deleteButtons).toHaveLength(mockData.length);
    
    // Verificar que se muestra el estado correcto
    const activeStatus = screen.getAllByText('Active');
    expect(activeStatus.length).toBeGreaterThan(0);
  });

  it('maneja correctamente los clics en los botones', () => {
    render(<TableWithButton dataTable={mockData} />);
    
    // Hacer clic en el botón de actualizar de la primera fila
    const firstUpdateButton = screen.getAllByTitle('Update')[0];
    fireEvent.click(firstUpdateButton);
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
    
    // Limpiar el mock de alerta
    (window.alert as jest.Mock).mockClear();
    
    // Hacer clic en el botón de eliminar de la primera fila
    const firstDeleteButton = screen.getAllByTitle('Delete')[0];
    fireEvent.click(firstDeleteButton);
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
  });

  it('tiene la estructura de tabla correcta', () => {
    render(<TableWithButton dataTable={mockData} />);
    
    // Verificar la estructura de la tabla
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    // Verificar los encabezados de columna
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(5); // Name, UserName, Status, Update, Delete
    expect(headers[0]).toHaveTextContent('Name');
    expect(headers[1]).toHaveTextContent('UserName');
    expect(headers[2]).toHaveTextContent('Status');
    expect(headers[3]).toHaveTextContent(''); // Botón Update
    expect(headers[4]).toHaveTextContent(''); // Botón Delete
    
    // Verificar que hay una fila por cada dato más el encabezado
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(mockData.length + 1); // +1 para el encabezado
  });

  it('aplica las clases CSS correctas', () => {
    render(<TableWithButton dataTable={mockData} />);
    
    // Verificar las clases del contenedor principal
    const container = screen.getByText('Example tables').closest('.container-body');
    expect(container).toHaveClass('container-body');
    
    // Verificar las clases de la cuadrícula
    const grid = screen.getByText('Table with button').closest('.grid-secondary');
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
    
    render(<TableWithButton dataTable={edgeCaseData} />);
    
    // Verificar que se manejan correctamente los nombres vacíos
    const emptyCells = screen.queryAllByRole('cell', { name: '' });
    expect(emptyCells.length).toBeGreaterThan(0);
    
    // Verificar que se manejan correctamente los nombres largos
    const longNameText = 'A very long name that might break the layout A very long name that might break the layout';
    const longNameCell = screen.getByText(longNameText);
    expect(longNameCell).toBeInTheDocument();
    
    // Verificar que los botones se renderizan correctamente incluso con datos límite
    const updateButtons = screen.getAllByTitle('Update');
    const deleteButtons = screen.getAllByTitle('Delete');
    expect(updateButtons).toHaveLength(edgeCaseData.length);
    expect(deleteButtons).toHaveLength(edgeCaseData.length);
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

// Mock para el componente Button
jest.mock('components/Button', () => ({
  __esModule: true,
  default: ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
    const buttonText = typeof children === 'string' ? children : '';
    return (
      <button 
        title={buttonText}
        onClick={onClick}
        data-testid={`${buttonText.toLowerCase()}-button`}
      >
        {children}
      </button>
    );
  },
}));
