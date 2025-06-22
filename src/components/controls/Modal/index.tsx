import React, { useEffect, useState } from 'react';
import { ModalProps } from './types';

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

const Modal: React.FC<ModalProps> = ({ show, eventModal, children }) => {
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
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          closeModal(e);
        }
      }}
    >
      <div className="modal-content">
        <div className="modal-container">
          <div className="padding-v-20 padding-h-20">
            <button 
              type="button" 
              className="modal-close-button" 
              onClick={e => { e.stopPropagation(); closeModal(e); }}
              aria-label="Cerrar modal"
              tabIndex={0}
            >
              X
            </button>
            <div id="modal-title" className="modal-title">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return state ? modalRender() : null;
};

export default Modal

