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
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </>
);