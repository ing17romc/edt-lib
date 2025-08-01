import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '..';
import styles from '../styles/Modal.module.scss';
import { 
  mockModalProps, 
  mockModalWithFooter, 
  mockModalWithoutTitle, 
  mockModalWithCustomSize,
  mockModalWithDisabledClose,
  mockModalWithCustomCloseText
} from './mocks';
import { ComponentSize } from '../../types';

describe('Modal', () => {
  it('renderiza correctamente con las props por defecto', () => {
    render(<Modal {...mockModalProps} />);
    
    // Verificar que el modal se renderice con el título y el contenido
    const modalTitle = screen.getByRole('heading', { name: /título del modal/i, level: 2 });
    const modalContent = screen.getByText('Contenido del modal de prueba');
    
    expect(modalTitle).toBeInTheDocument();
    expect(modalContent).toBeInTheDocument();
    
    // Verificar que el botón de cerrar esté presente
    const closeButton = screen.getByRole('button', { name: mockModalProps.closeButtonText || 'Cerrar' });
    expect(closeButton).toBeInTheDocument();
  });

  it('no se renderiza cuando isOpen es falso', () => {
    render(<Modal {...mockModalProps} isOpen={false} />);
    
    // Verificar que el modal no esté en el documento
    expect(screen.queryByText('Título del Modal')).not.toBeInTheDocument();
  });

  it('llama a onClose cuando se hace clic en el botón de cerrar', () => {
    const handleClose = jest.fn();
    render(<Modal {...mockModalProps} onClose={handleClose} />);
    
    const closeButton = screen.getByRole('button', { name: mockModalProps.closeButtonText || 'Cerrar' });
    fireEvent.click(closeButton);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('llama a onClose cuando se hace clic en el overlay', () => {
    const handleClose = jest.fn();
    render(
      <Modal 
        isOpen={true}
        onClose={handleClose}
        closeOnOverlayClick={true}
        title="Test Modal"
      >
        Contenido de prueba
      </Modal>
    );
    
    // Encontrar el botón del overlay
    const overlayButton = screen.getByRole('button', { name: 'Cerrar modal' });
    expect(overlayButton).toBeInTheDocument();
    
    // Simular clic en el botón del overlay
    fireEvent.click(overlayButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('no llama a onClose cuando se hace clic dentro del modal', () => {
    const handleClose = jest.fn();
    render(<Modal {...mockModalProps} onClose={handleClose} />);
    
    const modalContent = screen.getByText('Contenido del modal de prueba').closest(`.${styles.modalContainer}`);
    if (modalContent) {
      fireEvent.click(modalContent);
    }
    
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('renderiza el footer cuando se proporciona', () => {
    render(<Modal {...mockModalWithFooter} />);
    
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
    expect(screen.getByText('Aceptar')).toBeInTheDocument();
  });

  it('no muestra el botón de cerrar cuando showCloseButton es falso', () => {
    const { container } = render(<Modal {...mockModalWithDisabledClose} />);
    
    // Verificar que el botón de cierre (×) no esté presente
    const closeButton = container.querySelector(`.${styles.closeButton}`);
    expect(closeButton).not.toBeInTheDocument();
  });

  it('usa el texto personalizado para el botón de cerrar', () => {
    render(<Modal {...mockModalWithCustomCloseText} />);
    
    const closeButton = screen.getByRole('button', { name: /cerrar ventana/i });
    expect(closeButton).toBeInTheDocument();
  });

  it('aplica la clase de tamaño personalizado', () => {
    const { container } = render(<Modal {...mockModalWithCustomSize} />);
    
    // Verificar que el modal tenga la clase de tamaño personalizado
    const modalElement = container.querySelector(`.${styles.modalContainer}.${styles[mockModalWithCustomSize.size || ComponentSize.MEDIUM]}`);
    expect(modalElement).toBeInTheDocument();
    
    // Verificar que el modal tenga la clase de tamaño correcta
    expect(modalElement).toHaveClass(styles[mockModalWithCustomSize.size || ComponentSize.MEDIUM]);
  });

  it('no muestra el título cuando no se proporciona', () => {
    render(<Modal {...mockModalWithoutTitle} />);
    
    const title = screen.queryByRole('heading');
    expect(title).not.toBeInTheDocument();
  });

  it('cierra con la tecla Escape', () => {
    const handleClose = jest.fn();
    render(<Modal {...mockModalProps} onClose={handleClose} />);
    
    fireEvent.keyDown(document, { key: 'Escape' });
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
