import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from '..';
import { 
  mockPaginationProps, 
  mockPaginationCustomLabels, 
  mockPaginationDisabled,
  mockPaginationManyPages 
} from './mocks';

describe('Pagination', () => {
  it('renderiza correctamente con los props por defecto', () => {
    render(<Pagination {...mockPaginationProps} />);
    
    // Verificar que se rendericen los botones de navegación
    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Siguiente')).toBeInTheDocument();
    
    // Verificar que se rendericen las páginas
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('permite personalizar las etiquetas de los botones', () => {
    render(<Pagination {...mockPaginationCustomLabels} />);
    
    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Siguiente')).toBeInTheDocument();
  });

  it('llama a onPageChange con el número de página correcto al hacer clic en un botón de página', () => {
    const handlePageChange = jest.fn();
    render(
      <Pagination 
        {...mockPaginationProps} 
        onPageChange={handlePageChange} 
      />
    );
    
    const pageButton = screen.getByText('2');
    fireEvent.click(pageButton);
    
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  it('deshabilita los botones cuando la propiedad disabled es true', () => {
    render(<Pagination {...mockPaginationDisabled} />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toBeDisabled();
    });
  });

  it('muestra puntos suspensivos cuando hay muchas páginas', () => {
    render(<Pagination {...mockPaginationManyPages} />);
    
    // Debería mostrar puntos suspensivos para indicar páginas ocultas
    const ellipsis = screen.getAllByText('...');
    expect(ellipsis.length).toBeGreaterThan(0);
  });

  it('no renderiza nada y muestra una advertencia si totalPages es 0', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(<Pagination currentPage={1} totalPages={0} onPageChange={jest.fn()} />);
    expect(container.firstChild).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith('Pagination: totalPages debe ser mayor a 0');
    warnSpy.mockRestore();
  });

  it('no renderiza nada y muestra una advertencia si currentPage está fuera de rango', () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const { container } = render(<Pagination currentPage={10} totalPages={5} onPageChange={jest.fn()} />);
    expect(container.firstChild).toBeNull();
    expect(warnSpy).toHaveBeenCalledWith('Pagination: currentPage (10) está fuera de rango [1, 5]');
    warnSpy.mockRestore();
  });
});
