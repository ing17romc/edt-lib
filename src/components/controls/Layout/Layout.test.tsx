import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Layout } from './index';

describe('Layout', () => {
  const leftOptions = [
    { path: '/inicio', name: 'Inicio', icon: 'home-icon' },
    { path: '/servicios', name: 'Servicios', icon: 'services-icon' }
  ];
  const rightOptions = [
    { path: '/contacto', name: 'Contacto', icon: 'contact-icon' }
  ];
  const getCurrentPath = jest.fn();
  const footer = <footer>Pie de página</footer>;

  it('renderiza el layout con navegación y footer', () => {
    render(
      <Layout leftOptions={leftOptions} rightOptions={rightOptions} getCurrentPath={getCurrentPath} footer={footer}>
        <main>Contenido principal</main>
      </Layout>
    );
    expect(screen.getByText(/contenido principal/i)).toBeInTheDocument();
    expect(screen.getByText(/pie de página/i)).toBeInTheDocument();
  });

  it('pasa correctamente las props a NavBar', () => {
    render(
      <Layout leftOptions={leftOptions} rightOptions={rightOptions} getCurrentPath={getCurrentPath} footer={footer}>
        <main>Contenido principal</main>
      </Layout>
    );
    // Verifica que los botones de navegación existan
    expect(screen.getByRole('button', { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /contacto/i })).toBeInTheDocument();
  });
});
