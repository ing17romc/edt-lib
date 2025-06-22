import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SideBar from './index';

describe('SideBar', () => {
  const options = [
    { path: '/dashboard', name: 'Dashboard', icon: 'dashboard-icon' },
    { path: '/settings', name: 'Settings', icon: 'settings-icon' }
  ];
  const getCurrentPath = jest.fn();

  it('renderiza los botones de navegación lateral', () => {
    render(<SideBar options={options} getCurrentPath={getCurrentPath} />);
    expect(screen.getByRole('button', { name: /dashboard/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument();
  });

  it('llama a getCurrentPath al hacer click en un botón', () => {
    render(<SideBar options={options} getCurrentPath={getCurrentPath} />);
    fireEvent.click(screen.getByRole('button', { name: /settings/i }));
    expect(getCurrentPath).toHaveBeenCalledWith('/settings');
  });
});
