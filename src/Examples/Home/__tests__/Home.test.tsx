import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from './index.js.tsx';
import { OPTIONS, LEFT_OPTIONS, RIGHT_OPTIONS } from '../data';

describe('Home', () => {
  it('renderiza el layout y el menú correctamente', () => {
    render(
      <Home
        leftOptions={LEFT_OPTIONS}
        rightOptions={RIGHT_OPTIONS}
        currentPath={LEFT_OPTIONS[0].path}
        getCurrentPath={jest.fn()}
        footer={<p>Footer</p>}
      />
    );
    // Verifica que los nombres de las opciones estén en el documento
    OPTIONS.forEach(option => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
    });
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  it('llama a getCurrentPath al hacer click en una opción del menú', () => {
    const mockGetCurrentPath = jest.fn();
    render(
      <Home
        leftOptions={LEFT_OPTIONS}
        rightOptions={RIGHT_OPTIONS}
        currentPath={LEFT_OPTIONS[0].path}
        getCurrentPath={mockGetCurrentPath}
      />
    );
    const firstOption = screen.getByText(OPTIONS[0].name);
    fireEvent.click(firstOption.closest('button'));
    expect(mockGetCurrentPath).toHaveBeenCalledWith(OPTIONS[0].path);
  });
});
