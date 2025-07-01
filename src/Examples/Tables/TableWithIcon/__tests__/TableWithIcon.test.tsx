import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableWithIcon from '..';
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

describe('TableWithIcon', () => {
  // Mock de alerta global
  const originalAlert = window.alert;
  beforeAll(() => {
    window.alert = jest.fn();
  });

  afterAll(() => {
    window.alert = originalAlert;
  });

  it('renderiza sin errores con datos vacíos', () => {
    render(<TableWithIcon dataTable={[]} />);
    
    // Verificar que se renderiza el título
    expect(screen.getByText('Example tables')).toBeInTheDocument();
    
    // Verificar que se muestra el encabezado de la tabla
    expect(screen.getByText('Table with icon')).toBeInTheDocument();
    
    // Verificar que solo hay una fila (el encabezado) cuando no hay datos
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(1); // Solo el encabezado
  });

  it('renderiza correctamente con datos', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Verificar que se renderizan los datos
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe')).toBeInTheDocument();
    
    // Verificar que se muestran los botones de acción con iconos
    // Verificar que hay un botón de editar y eliminar por cada elemento en mockData
    mockData.forEach((_, index) => {
      expect(screen.getByTestId(`edit_${index}`)).toBeInTheDocument();
      expect(screen.getByTestId(`delete_${index}`)).toBeInTheDocument();
    });
    
    // Verificar que se muestra el estado correcto
    const activeStatus = screen.getAllByText('Active');
    expect(activeStatus.length).toBeGreaterThan(0);
  });

  it('maneja correctamente los clics en los botones de iconos', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Hacer clic en el botón de editar de la primera fila
    const firstEditButton = screen.getByTestId('edit_0');
    fireEvent.click(firstEditButton);
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
    
    // Limpiar el mock de alerta
    (window.alert as jest.Mock).mockClear();
    
    // Hacer clic en el botón de eliminar de la primera fila
    const firstDeleteButton = screen.getByTestId('delete_0');
    fireEvent.click(firstDeleteButton);
    expect(window.alert).toHaveBeenCalledWith('clic!!!');
  });

  it('tiene la estructura de tabla correcta', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Verificar la estructura de la tabla
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    
    // Verificar los encabezados de columna
    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(5); // Name, UserName, Status, Edit, Delete
    expect(headers[0]).toHaveTextContent('Name');
    expect(headers[1]).toHaveTextContent('UserName');
    expect(headers[2]).toHaveTextContent('Status');
    expect(headers[3]).toHaveTextContent(''); // Botón Editar
    expect(headers[4]).toHaveTextContent(''); // Botón Eliminar
    
    // Verificar que hay una fila por cada dato más el encabezado
    const allRows = screen.getAllByRole('row');
    expect(allRows).toHaveLength(mockData.length + 1); // +1 para el encabezado
  });

  it('aplica las clases CSS correctas', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Verificar las clases del contenedor principal
    const container = screen.getByText('Example tables').closest('.container-body');
    expect(container).toHaveClass('container-body');
    
    // Verificar las clases de la cuadrícula
    const grid = screen.getByText('Table with icon').closest('.grid-secondary');
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
    
    render(<TableWithIcon dataTable={edgeCaseData} />);
    
    // Verificar que se manejan correctamente los nombres vacíos
    const emptyCells = screen.getAllByRole('cell', { name: '' });
    expect(emptyCells.length).toBeGreaterThan(0);
    
    // Verificar que se manejan correctamente los nombres largos
    const longNameText = 'A very long name that might break the layout A very long name that might break the layout';
    const longNameCell = screen.getByText(longNameText);
    expect(longNameCell).toBeInTheDocument();
    
    // Verificar que los botones de acción se renderizan correctamente
    const editButtons = screen.getAllByLabelText('edit');
    const deleteButtons = screen.getAllByLabelText('delete');
    expect(editButtons).toHaveLength(edgeCaseData.length);
    expect(deleteButtons).toHaveLength(edgeCaseData.length);
  });

  it('asigna IDs únicos a los botones de iconos', () => {
    render(<TableWithIcon dataTable={mockData} />);
    
    // Verificar que los botones tienen IDs únicos
    mockData.forEach((_, index) => {
      const editButton = screen.getByTestId(`edit_${index}`);
      const deleteButton = screen.getByTestId(`delete_${index}`);
      
      expect(editButton).toBeInTheDocument();
      expect(deleteButton).toBeInTheDocument();
    });
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

// Mock para el componente IconButton
jest.mock('components/IconButton', () => ({
  __esModule: true,
  default: ({ 
    text, 
    id, 
    onClick 
  }: { 
    text: string; 
    icon: string; 
    id: string; 
    size: string;
    onClick: () => void 
  }) => (
    <button 
      onClick={onClick}
      data-testid={id}
      aria-label={text.toLowerCase()}
    >
      {text}
    </button>
  ),
}));
