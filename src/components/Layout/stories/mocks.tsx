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
    <a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a>
    <a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a>
    <a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a>
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
      <h3>Useful links</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="#help" style={{ textDecoration: 'none', color: 'inherit' }}>Help</a></li>
        <li><a href="#terms" style={{ textDecoration: 'none', color: 'inherit' }}>Terms and conditions</a></li>
        <li><a href="#privacy" style={{ textDecoration: 'none', color: 'inherit' }}>Privacy policy</a></li>
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <p>Email: info@example.com</p>
      <p>Phone: +1 234 567 8900</p>
    </div>
  </div>
);
