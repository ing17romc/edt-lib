import React from 'react';

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
        <li><a href="#ayuda">Ayuda</a></li>
        <li><a href="#terminos">Términos y condiciones</a></li>
        <li><a href="#privacidad">Política de privacidad</a></li>
      </ul>
    </div>
    <div>
      <h3>Contacto</h3>
      <p>Email: info@ejemplo.com</p>
      <p>Teléfono: +123 456 7890</p>
    </div>
  </div>
);