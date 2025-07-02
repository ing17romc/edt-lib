import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';
import NavBar from '../NavBar';
import Footer from '../Footer';
import { MockLogo, MockNav, MockFooterContent } from './mocks';

describe('Layout', () => {
  it('debe renderizar el layout con el contenido principal', () => {
    render(
      <Layout>
        <NavBar logo={<MockLogo />} title="Mi Aplicación">
          <MockNav />
        </NavBar>
        <main>
          <h1>Contenido Principal</h1>
        </main>
        <Footer>
          <MockFooterContent />
        </Footer>
      </Layout>
    );

    expect(screen.getByText('Contenido Principal')).toBeInTheDocument();
    expect(screen.getByText('Mi Aplicación')).toBeInTheDocument();
    expect(screen.getByText('Enlaces útiles')).toBeInTheDocument();
  });
});