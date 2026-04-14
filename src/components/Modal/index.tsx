import React, { useEffect, useCallback, useId } from 'react';
import styles from './styles/Modal.module.scss';
import { ModalProps } from './types';
import { ComponentSize } from '../types';

/**
 * Modal component that displays content in a popup window.
 * Supports different sizes, Escape key closing, and clicking outside the modal.
 */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = ComponentSize.MEDIUM,
  showCloseButton = true,
  closeButtonText = 'Close',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  className = '',
  style,
  footer,
  centerVertically = true,
  preventScroll = true,
}) => {
  const titleId = useId();

  // Effect to manage body scroll when the modal is open
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

  // Escape key handler to close the modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && closeOnEsc) {
        onClose();
      }
    },
    [isOpen, onClose, closeOnEsc]
  );

  // Add and remove the event listener for the Escape key
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  // Overlay click handler
  const handleOverlayClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  // If the modal is not open, render nothing
  if (!isOpen) return null;

  return (
    <div 
      className={`${styles.modalOverlay} ${isOpen ? styles.visible : ''} ${centerVertically ? styles.centered : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
    >
      <button 
        type="button"
        className={styles.overlayButton}
        onClick={handleOverlayClick}
        aria-label="Close modal"
      />
      <div 
        className={`${styles.modalContainer} ${styles[size]} ${className}`}
        style={style}
      >
        {(title || showCloseButton) && (
          <div className={styles.modalHeader}>
            {title && <h2 id={titleId}>{title}</h2>}
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
