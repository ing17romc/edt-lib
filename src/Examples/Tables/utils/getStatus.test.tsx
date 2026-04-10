import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import getStatus from './index';

describe('getStatus', () => {
  it('shows "Active" in blue when value is true', () => {
    render(getStatus(true));
    const strongElement = screen.getByText('Active');
    expect(strongElement).toBeInTheDocument();
    expect(strongElement).toHaveClass('font-blue');
  });

  it('shows "Inactive" in red when value is false', () => {
    render(getStatus(false));
    const strongElement = screen.getByText('Inactive');
    expect(strongElement).toBeInTheDocument();
    expect(strongElement).toHaveClass('font-red');
  });

  it('shows "Active" in blue when value is 1', () => {
    render(getStatus(1));
    expect(screen.getByText('Active')).toHaveClass('font-blue');
  });

  it('shows "Inactive" in red when value is 0', () => {
    render(getStatus(0));
    expect(screen.getByText('Inactive')).toHaveClass('font-red');
  });
});
