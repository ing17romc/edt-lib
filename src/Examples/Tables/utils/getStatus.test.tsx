import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import getStatus from './index';

describe('getStatus', () => {
  it('muestra "Active" en azul cuando value es true', () => {
    render(getStatus(true));
    const strongElement = screen.getByText('Active');
    expect(strongElement).toBeInTheDocument();
    expect(strongElement).toHaveClass('font-blue');
  });

  it('muestra "Inactive" en rojo cuando value es false', () => {
    render(getStatus(false));
    const strongElement = screen.getByText('Inactive');
    expect(strongElement).toBeInTheDocument();
    expect(strongElement).toHaveClass('font-red');
  });

  it('muestra "Active" en azul cuando value es 1', () => {
    render(getStatus(1));
    expect(screen.getByText('Active')).toHaveClass('font-blue');
  });

  it('muestra "Inactive" en rojo cuando value es 0', () => {
    render(getStatus(0));
    expect(screen.getByText('Inactive')).toHaveClass('font-red');
  });
});
