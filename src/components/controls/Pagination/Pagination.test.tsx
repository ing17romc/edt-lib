import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from './index';

describe('Pagination Component', () => {
  const onPageChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('debe renderizar la paginación correctamente', () => {
    render(<Pagination totalCount={10} currentPage={1} onPageChange={onPageChangeMock} />);

    const paginationContainer = screen.getByRole('list');
    expect(paginationContainer).toBeInTheDocument();

    const pageItems = screen.getAllByRole('listitem');
    // 10 páginas + 2 flechas de navegación
    expect(pageItems).toHaveLength(12);
  });

  test('debe llamar a onPageChange con el número de página correcto al hacer clic', () => {
    render(<Pagination totalCount={10} currentPage={3} onPageChange={onPageChangeMock} />);

    const page5 = screen.getByText('5');
    fireEvent.click(page5);
    expect(onPageChangeMock).toHaveBeenCalledWith(5);
  });

  test('debe deshabilitar el botón "anterior" en la primera página', () => {
    render(<Pagination totalCount={10} currentPage={1} onPageChange={onPageChangeMock} />);

    const previousButton = screen.getAllByRole('listitem')[0];
    expect(previousButton).toHaveClass('disabled');
    expect(previousButton).toHaveAttribute('aria-disabled', 'true');

    fireEvent.click(previousButton);
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });

  test('debe deshabilitar el botón "siguiente" en la última página', () => {
    render(<Pagination totalCount={10} currentPage={10} onPageChange={onPageChangeMock} />);

    const nextButton = screen.getAllByRole('listitem').pop();
    expect(nextButton).toHaveClass('disabled');
    expect(nextButton).toHaveAttribute('aria-disabled', 'true');

    fireEvent.click(nextButton as Element);
    expect(onPageChangeMock).not.toHaveBeenCalled();
  });

  test('debe llamar a onPageChange al hacer clic en "siguiente"', () => {
    render(<Pagination totalCount={10} currentPage={5} onPageChange={onPageChangeMock} />);

    const nextButton = screen.getAllByRole('listitem').pop();
    fireEvent.click(nextButton as Element);
    expect(onPageChangeMock).toHaveBeenCalledWith(6);
  });

  test('debe llamar a onPageChange al hacer clic en "anterior"', () => {
    render(<Pagination totalCount={10} currentPage={5} onPageChange={onPageChangeMock} />);

    const previousButton = screen.getAllByRole('listitem')[0];
    fireEvent.click(previousButton);
    expect(onPageChangeMock).toHaveBeenCalledWith(4);
  });

  test('no debe renderizar si totalCount es menor que 2', () => {
    const { container } = render(<Pagination totalCount={1} currentPage={1} onPageChange={onPageChangeMock} />);
    expect(container.firstChild).toBeNull();
  });
});
