import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import HomeV2 from './index';
import { OPTIONS, LEFT_OPTIONS, RIGHT_OPTIONS } from '../data';

describe('HomeV2', () => {
  it('renderiza el layout y el menú correctamente', () => {
    render(
      <HomeV2
        leftOptions={LEFT_OPTIONS}
        rightOptions={RIGHT_OPTIONS}
        sideOptions={OPTIONS}
        getCurrentPath={jest.fn()}
      />
    );
    // Verifica que los nombres de las opciones estén en el documento
    OPTIONS.forEach(option => {
      expect(screen.getByText(option.name)).toBeInTheDocument();
    });
  });

  it('llama a getCurrentPath al hacer click en una opción del menú', () => {
    const mockGetCurrentPath = jest.fn();
    render(
      <HomeV2
        leftOptions={LEFT_OPTIONS}
        rightOptions={RIGHT_OPTIONS}
        sideOptions={OPTIONS}
        getCurrentPath={mockGetCurrentPath}
      />
    );
    const firstOption = screen.getByText(OPTIONS[0].name);
    fireEvent.click(firstOption.closest('button'));
    expect(mockGetCurrentPath).toHaveBeenCalledWith(OPTIONS[0].path);
  });
});
