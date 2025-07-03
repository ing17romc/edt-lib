import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Message from '../index';
import styles from '../Message.module.scss';

describe('Message', () => {
  it('renders message with default props', () => {
    const { container } = render(
      <Message type="info">Mensaje de prueba</Message>
    );
    
    const messageElement = container.firstChild;
    expect(messageElement).toHaveClass(styles.message);
    expect(messageElement).toHaveClass(styles['message-info']);
    expect(screen.getByText('Mensaje de prueba')).toBeInTheDocument();
  });

  it('renders message with title when provided', () => {
    render(
      <Message type="success" title="¡Éxito!">
        Operación completada
      </Message>
    );
    
    expect(screen.getByText('¡Éxito!')).toBeInTheDocument();
    expect(screen.getByText('Operación completada')).toBeInTheDocument();
  });

  it('applies correct CSS class based on type prop', () => {
    const { getByText } = render(
      <div>
        <Message type="success" data-testid="success-msg">Éxito</Message>
        <Message type="info" data-testid="info-msg">Información</Message>
        <Message type="warning" data-testid="warning-msg">Advertencia</Message>
        <Message type="danger" data-testid="danger-msg">Peligro</Message>
      </div>
    );
    
    // Verificar que cada mensaje tiene la clase correcta según su tipo
    const successMsg = getByText('Éxito').closest(`.${styles.message}`);
    const infoMsg = getByText('Información').closest(`.${styles.message}`);
    const warningMsg = getByText('Advertencia').closest(`.${styles.message}`);
    const dangerMsg = getByText('Peligro').closest(`.${styles.message}`);
    
    expect(successMsg).toHaveClass(styles['message-success']);
    expect(infoMsg).toHaveClass(styles['message-info']);
    expect(warningMsg).toHaveClass(styles['message-warning']);
    expect(dangerMsg).toHaveClass(styles['message-danger']);
  });

  it('applies custom className when provided', () => {
    const { container } = render(
      <Message type="info" className="custom-class">
        Mensaje con clase personalizada
      </Message>
    );
    
    expect(container.firstChild).toHaveClass('custom-class');
    expect(container.firstChild).toHaveClass(styles.message);
  });

  it('applies custom styles when provided', () => {
    const customStyle = { marginTop: '20px', backgroundColor: 'red' };
    const { container } = render(
      <Message type="info" style={customStyle}>
        Mensaje con estilos personalizados
      </Message>
    );
    
    const messageElement = container.firstChild as HTMLElement;
    expect(messageElement.style.marginTop).toBe('20px');
    expect(messageElement.style.backgroundColor).toBe('red');
  });

  it('renders without title when title is not provided', () => {
    const { queryByTestId } = render(
      <Message type="info">Mensaje sin título</Message>
    );
    
    expect(queryByTestId('message-title')).not.toBeInTheDocument();
    expect(screen.getByText('Mensaje sin título')).toBeInTheDocument();
  });
});
