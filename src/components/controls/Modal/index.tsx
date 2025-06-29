import React, { useEffect, useState, FC } from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './types';
import './styles/Modal.scss';

/**
 * Componente Modal que proporciona una ventana modal accesible.
 * Permite mostrar contenido en una ventana superpuesta con opciones de cierre.
 * 
 * @param {ModalProps} props - Propiedades del componente
 * @param {boolean} props.show - Estado de visibilidad del modal
 * @param {(e: React.MouseEvent) => void} props.eventModal - Función que se ejecuta al cerrar el modal
 * @param {React.ReactNode} props.children - Contenido a mostrar dentro del modal
 * @returns {JSX.Element | null} Elemento modal o null si no está visible
 */

// Define the component with proper typing
const ModalComponent: FC<ModalProps> = ({ show, eventModal, children }) => {
  const [state, setState] = useState(show);

  const closeModal = (e: React.MouseEvent) => {
    eventModal(e);
  };

  useEffect(() => {
    setState(show);
  }, [show]);

  const modalRender = () => (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="modal"
      tabIndex={-1}
    >
      <div className="modal-content">
        <div className="modal-container">
          <div className="padding-v-20 padding-h-20">
            <button
              className="modal-close-button"
              onClick={e => { e.stopPropagation(); closeModal(e); }}
              aria-label="Cerrar modal"
              tabIndex={0}
            >
              X
            </button>
          </div>
        </div>
        <div id="modal-body" className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );

  return state ? ReactDOM.createPortal(modalRender(), document.body) : null;
};

// Export the component as both named and default export
export { ModalComponent as Modal };
export default ModalComponent;

