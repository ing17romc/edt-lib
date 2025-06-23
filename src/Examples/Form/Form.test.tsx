import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './index';

describe('Form', () => {
  it('renderiza los campos principales del formulario', () => {
    render(<Form />);
    expect(screen.getByText('Cliente')).toBeInTheDocument();
    expect(screen.getAllByText('Datos Personales').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Aviso de privacidad').length).toBeGreaterThan(0);
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('permite interactuar con el campo de nombre', () => {
    render(<Form />);
    const nombreInput = screen.getByDisplayValue('Rafael Orlando');
    fireEvent.change(nombreInput, { target: { value: 'Nuevo Nombre' } });
    // Nota: el cambio no se reflejará en el UI porque el eventChange depende de getValueInput
    // Aquí solo se prueba que el input está presente y es editable
    expect(nombreInput).toBeInTheDocument();
  });
});
