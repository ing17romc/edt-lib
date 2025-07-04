import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Message from '../index';
import styles from '../Message.module.scss';

describe('Message', () => {
  it('renderiza el mensaje con las propiedades por defecto', () => {
    const { container } = render(
      <Message type="info">Mensaje de prueba</Message>
    );
    
    const messageElement = container.firstChild;
    expect(messageElement).toHaveClass(styles.message);
    expect(messageElement).toHaveClass(styles['message-info']);
    expect(screen.getByText('Mensaje de prueba')).toBeInTheDocument();
    
    // Verificar que el ícono se renderice correctamente
    const icon = container.querySelector(`.${styles.messageIcon} svg`);
    expect(icon).toBeInTheDocument();
    
    // Verificar el rol ARIA por defecto para tipo info
    expect(messageElement).toHaveAttribute('role', 'status');
    expect(messageElement).toHaveAttribute('aria-live', 'polite');
  });

  it('renderiza el mensaje con un título cuando se proporciona', () => {
    render(
      <Message type="success" title="¡Éxito!" data-testid="message-with-title">
        Operación completada
      </Message>
    );
    
    const titleElement = screen.getByTestId('message-title');
    expect(titleElement).toHaveTextContent('¡Éxito!');
    expect(screen.getByText('Operación completada')).toBeInTheDocument();
    
    // Verificar que el título tenga la clase correcta
    expect(titleElement).toHaveClass(styles.messageTitle);
  });

  it('aplica la clase CSS correcta según la propiedad type', () => {
    const { getByTestId } = render(
      <div>
        <Message type="success" data-testid="success-msg">Éxito</Message>
        <Message type="info" data-testid="info-msg">Información</Message>
        <Message type="warning" data-testid="warning-msg">Advertencia</Message>
        <Message type="danger" data-testid="danger-msg">Peligro</Message>
      </div>
    );
    
    // Verificar que cada mensaje tenga la clase correcta según su tipo
    const successMsg = getByTestId('success-msg');
    const infoMsg = getByTestId('info-msg');
    const warningMsg = getByTestId('warning-msg');
    const dangerMsg = getByTestId('danger-msg');
    
    expect(successMsg).toHaveClass(styles['message-success']);
    expect(infoMsg).toHaveClass(styles['message-info']);
    expect(warningMsg).toHaveClass(styles['message-warning']);
    expect(dangerMsg).toHaveClass(styles['message-danger']);
    
    // Verificar roles ARIA según el tipo
    expect(warningMsg).toHaveAttribute('role', 'alert');
    expect(dangerMsg).toHaveAttribute('role', 'alert');
    expect(warningMsg).toHaveAttribute('aria-live', 'assertive');
  });

  it('aplica una clase personalizada cuando se proporciona', () => {
    const { container } = render(
      <Message type="info" className="custom-class">
        Mensaje con clase personalizada
      </Message>
    );
    
    const messageElement = container.firstChild;
    expect(messageElement).toHaveClass('custom-class');
    expect(messageElement).toHaveClass(styles.message);
  });

  it('aplica estilos personalizados cuando se proporcionan', () => {
    const customStyle = { marginTop: '20px', backgroundColor: 'red' };
    const { container } = render(
      <Message type="info" style={customStyle} data-testid="styled-message">
        Mensaje con estilos personalizados
      </Message>
    );
    
    const messageElement = container.firstChild as HTMLElement;
    expect(messageElement.style.marginTop).toBe('20px');
    expect(messageElement.style.backgroundColor).toBe('red');
  });

  it('no muestra el título cuando no se proporciona', () => {
    const { queryByTestId } = render(
      <Message type="info">Mensaje sin título</Message>
    );
    
    expect(queryByTestId('message-title')).not.toBeInTheDocument();
    expect(screen.getByText('Mensaje sin título')).toBeInTheDocument();
  });
  
  it('muestra el botón de cierre cuando la propiedad closable es true', () => {
    const handleClose = jest.fn();
    render(
      <Message type="info" closable onClose={handleClose}>
        Mensaje cerrable
      </Message>
    );
    
    const closeButton = screen.getByRole('button', { name: /cerrar mensaje/i });
    expect(closeButton).toBeInTheDocument();
    expect(closeButton).toHaveClass(styles.closeButton);
    
    // Verificar que el mensaje tenga la clase 'closable'
    const messageElement = closeButton.closest(`.${styles.message}`);
    expect(messageElement).toHaveClass(styles.closable);
  });
  
  it('llama a la función onClose cuando se hace clic en el botón de cierre', () => {
    const handleClose = jest.fn();
    render(
      <Message type="info" closable onClose={handleClose}>
        Mensaje cerrable
      </Message>
    );
    
    const closeButton = screen.getByRole('button', { name: /cerrar mensaje/i });
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
  
  it('oculta el mensaje después de hacer clic en el botón de cierre', () => {
    const { queryByTestId } = render(
      <Message type="info" closable data-testid="closable-message">
        Mensaje que desaparecerá
      </Message>
    );
    
    const closeButton = screen.getByRole('button', { name: /cerrar mensaje/i });
    fireEvent.click(closeButton);
    
    // Verificar que el mensaje ya no está en el DOM
    expect(queryByTestId('closable-message')).not.toBeInTheDocument();
  });
  
  it('acepta y muestra nodos React como children', () => {
    const { getByText } = render(
      <Message type="info">
        <span>Este es un </span>
        <strong>mensaje</strong>
        <span> con formato</span>
      </Message>
    );
    
    expect(getByText('mensaje')).toHaveStyle('font-weight: bold');
    expect(getByText('con formato')).toBeInTheDocument();
  });
  
  it('permite sobrescribir el rol ARIA', () => {
    const { getByRole } = render(
      <Message type="warning" role="alertdialog">
        Mensaje con rol personalizado
      </Message>
    );
    
    expect(getByRole('alertdialog')).toBeInTheDocument();
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
