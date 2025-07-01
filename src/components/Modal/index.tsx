import React, { useEffect, useCallback } from 'react';
import styles from './styles/Modal.module.scss';
import { ModalProps } from './types';

/**
 * Componente Modal que muestra contenido en una ventana emergente.
 * Soporta diferentes tamaños, cierre con tecla Escape y clic fuera del modal.
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true,
  closeButtonText = 'Cerrar',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  className = '',
  style,
  footer,
  centerVertically = true,
  preventScroll = true,
}) => {
  // Efecto para manejar el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen && preventScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, preventScroll]);

  // Manejador de tecla Escape para cerrar el modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && closeOnEsc) {
        onClose();
      }
    },
    [isOpen, onClose, closeOnEsc]
  );

  // Agregar y remover el event listener para la tecla Escape
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Manejador de clic en el overlay
  const handleOverlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  // Si el modal no está abierto, no renderizar nada
  if (!isOpen) return null;

  return (
    <div 
      className={`${styles.modalOverlay} ${isOpen ? styles.visible : ''} ${centerVertically ? styles.centered : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <button 
        type="button"
        className={styles.overlayButton}
        onClick={handleOverlayClick}
        aria-label="Cerrar modal"
      />
      <div 
        className={`${styles.modalContainer} ${styles[size]} ${className}`}
        style={style}
      >
        {(title || showCloseButton) && (
          <div className={styles.modalHeader}>
            {title && <h2 id="modal-title">{title}</h2>}
            {showCloseButton && (
              <button
                type="button"
                className={styles.closeButton}
                onClick={onClose}
                aria-label={closeButtonText}
              >
                &times;
              </button>
            )}
          </div>
        )}
        
        <div className={styles.modalContent}>
          {children}
        </div>
        
        {footer && (
          <div className={styles.modalFooter}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
