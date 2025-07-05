import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Message from '../index';
import type { MessageType } from '../types';
import styles from '../Message.module.scss';

describe('Message', () => {
  // Casos de prueba para la renderización básica
  it('debe renderizar correctamente con valores por defecto', () => {
    const { container } = render(<Message>Mensaje predeterminado</Message>);
    expect(container.firstChild).toHaveClass(styles.message, styles['message-info']);
    expect(screen.getByText('Mensaje predeterminado')).toBeInTheDocument();
    expect(container.querySelector(`.${styles.messageIcon} svg`)).toBeInTheDocument();
  });

  // Casos de prueba para los diferentes tipos de mensaje
  it.each([
    ['success', 'status'],
    ['info', 'status'],
    ['warning', 'alert'],
    ['danger', 'alert']
  ])('debe aplicar las clases y roles correctos para el tipo %s', (type, role) => {
    const { container } = render(
      <Message type={type as MessageType}>{`Mensaje de ${type}`}</Message>
    );
    
    expect(container.firstChild).toHaveClass(styles[`message-${type}`]);
    expect(container.firstChild).toHaveAttribute('role', role);
    expect(container.firstChild).toHaveAttribute(
      'aria-live', 
      role === 'alert' ? 'assertive' : 'polite'
    );
  });

  // Casos de prueba para el título
  it('debe mostrar el título cuando se proporciona', () => {
    render(<Message title="Título">Mensaje</Message>);
    expect(screen.getByText('Título')).toHaveClass(styles.messageTitle);
  });

  it('no debe mostrar el título cuando no se proporciona', () => {
    render(<Message>Mensaje sin título</Message>);
    expect(screen.queryByTestId('message-title')).not.toBeInTheDocument();
  });

  // Casos de prueba para personalización
  it('debe aplicar clases personalizadas', () => {
    const { container } = render(
      <Message className="clase-personalizada">Mensaje</Message>
    );
    expect(container.firstChild).toHaveClass('clase-personalizada');
  });

  it('debe aplicar estilos personalizados', () => {
    const style = { color: 'red' };
    const { container } = render(
      <Message style={style}>Mensaje con estilo</Message>
    );
    expect(container.firstChild).toHaveStyle('color: rgb(255, 0, 0)');
  });
  
  // Pruebas de funcionalidad de cierre
  it('debe mostrar el botón de cierre cuando la propiedad closable es true', () => {
    render(
      <Message closable>
        Mensaje cerrable
      </Message>
    );
    
    const closeButton = screen.getByRole('button', { name: /cerrar/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('debe llamar a onClose cuando se hace clic en el botón de cierre', () => {
    const handleClose = jest.fn();
    
    render(
      <Message closable onClose={handleClose}>
        Mensaje con cierre
      </Message>
    );
    
    const closeButton = screen.getByRole('button', { name: /cerrar/i });
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('debe ocultar el mensaje al hacer clic en el botón de cierre', () => {
    const { container } = render(
      <Message closable>
        Mensaje cerrable
      </Message>
    );
    
    const closeButton = screen.getByRole('button', { name: /cerrar/i });
    fireEvent.click(closeButton);
    
    expect(container.firstChild).not.toBeInTheDocument();
  });

  it('debe permitir sobrescribir el rol ARIA', () => {
    const { getByRole } = render(
      <Message type="warning" role="alertdialog">
        Mensaje con rol personalizado
      </Message>
    );
    
    expect(getByRole('alertdialog')).toBeInTheDocument();
  });

  it('debe aceptar nodos React como children', () => {
    render(
      <Message>
        <span>Mensaje con </span>
        <strong>formato</strong>
      </Message>
    );
    
    expect(screen.getByText('formato')).toHaveStyle('font-weight: bold');
  });

  it('permite pasar propiedades HTML adicionales', () => {
    const { getByTestId } = render(
      <Message 
        type="info" 
        data-custom-attribute="custom-value"
        data-testid="custom-attributes"
      >
        Mensaje con atributos personalizados
      </Message>
    );
    
    const message = getByTestId('custom-attributes');
    expect(message).toHaveAttribute('data-custom-attribute', 'custom-value');
  });
});
