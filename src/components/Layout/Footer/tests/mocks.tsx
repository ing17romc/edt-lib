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
      <h3>Useful links</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><a href="#help">Help</a></li>
        <li><a href="#terms">Terms and conditions</a></li>
        <li><a href="#privacy">Privacy policy</a></li>
      </ul>
    </div>
    <div>
      <h3>Contact</h3>
      <p>Email: info@example.com</p>
      <p>Phone: +1 234 567 8900</p>
    </div>
  </div>
);