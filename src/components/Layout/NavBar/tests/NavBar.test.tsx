import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../index';
import { MockLogo, MockNav } from './mocks';

describe('NavBar', () => {
  it('debe renderizar la barra de navegación con el logo, título y enlaces', () => {
    render(
      <NavBar logo={<MockLogo />} title="Mi App">
        <MockNav />
      </NavBar>
    );

    expect(screen.getByText('Mi App')).toBeInTheDocument();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Acerca de')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });
});