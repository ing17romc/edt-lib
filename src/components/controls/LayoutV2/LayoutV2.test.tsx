import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LayoutV2 from './index';

describe('LayoutV2', () => {
  const sideOptions = [
    { path: '/dashboard', name: 'Dashboard', icon: 'dashboard-icon' },
    { path: '/ajustes', name: 'Ajustes', icon: 'settings-icon' }
  ];
  const leftOptions = [
    { path: '/inicio', name: 'Inicio' }
  ];
  const rightOptions = [
    { path: '/ayuda', name: 'Ayuda' }
  ];
  const getCurrentPath = jest.fn();
  const breadcrumbOptions = [
    { path: '/inicio', name: 'Inicio' },
    { path: '/dashboard', name: 'Dashboard' }
  ];

  it('renderiza la navegación, sidebar y breadcrumbs cuando corresponde', () => {
    render(
      <LayoutV2
        sideOptions={sideOptions}
        leftOptions={leftOptions}
        rightOptions={rightOptions}
        getCurrentPath={getCurrentPath}
        showSideBar={true}
        breadcrumbOptions={breadcrumbOptions}
      >
        <main>Contenido principal</main>
      </LayoutV2>
    );
    const dashboardButtons = screen.getAllByRole('button', { name: /dashboard/i });
    expect(dashboardButtons.length).toBeGreaterThan(0);
    const inicioButtons = screen.getAllByRole('button', { name: /inicio/i });
    expect(inicioButtons.length).toBeGreaterThan(0);
    const ayudaButtons = screen.getAllByRole('button', { name: /ayuda/i });
    expect(ayudaButtons.length).toBeGreaterThan(0);
    expect(screen.getByText(/contenido principal/i)).toBeInTheDocument();
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  it('no renderiza el sidebar si showSideBar es false', () => {
    render(
      <LayoutV2
        sideOptions={sideOptions}
        leftOptions={leftOptions}
        rightOptions={rightOptions}
        getCurrentPath={getCurrentPath}
        showSideBar={false}
      >
        <main>Contenido principal</main>
      </LayoutV2>
    );
    // El botón del sidebar no debe estar
    const dashboardButtons = screen.queryAllByRole('button', { name: /dashboard/i });
    expect(dashboardButtons.length).toBe(0); // No debe estar presente cuando showSideBar es false
  });
});
