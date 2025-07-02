import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../index';
import { MockFooterContent } from './mocks';

describe('Footer', () => {
  it('debe renderizar el footer con el contenido', () => {
    render(
      <Footer>
        <MockFooterContent />
      </Footer>
    );

    expect(screen.getByText('Enlaces útiles')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByText('Email: info@ejemplo.com')).toBeInTheDocument();
  });
});