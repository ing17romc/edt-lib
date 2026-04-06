import React from 'react';

export const MockLogo = () => (
  <div style={{
    width: '32px',
    height: '32px',
    backgroundColor: 'var(--color-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '4px',
  }}>
    L
  </div>
);

export const MockNav = () => (
  <>
    <a href="#inicio" style={{ textDecoration: 'none', color: 'inherit' }}>Inicio</a>
    <a href="#acerca" style={{ textDecoration: 'none', color: 'inherit' }}>Acerca de</a>
    <a href="#contacto" style={{ textDecoration: 'none', color: 'inherit' }}>Contacto</a>
  </>
);
