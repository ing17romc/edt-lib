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
    borderRadius: '4px'
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

export const MockFooterContent = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    gap: '1rem'
  }}>
    <div>
      <h3>Enlaces útiles</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="#ayuda" style={{ textDecoration: 'none', color: 'inherit' }}>Ayuda</a></li>
        <li><a href="#terminos" style={{ textDecoration: 'none', color: 'inherit' }}>Términos y condiciones</a></li>
        <li><a href="#privacidad" style={{ textDecoration: 'none', color: 'inherit' }}>Política de privacidad</a></li>
      </ul>
    </div>
    <div>
      <h3>Contacto</h3>
      <p>Email: info@ejemplo.com</p>
      <p>Teléfono: +123 456 7890</p>
    </div>
  </div>
);