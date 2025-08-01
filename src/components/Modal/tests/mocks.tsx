import React from 'react';
import { ModalProps } from '../types';
import { ComponentSize } from '../../types';

export const mockModalProps: ModalProps = {
  isOpen: true,
  onClose: jest.fn(),
  title: 'Título del Modal',
  children: <p>Contenido del modal de prueba</p>,
};

export const mockModalWithFooter: ModalProps = {
  isOpen: true,
  onClose: jest.fn(),
  title: 'Modal con Footer',
  children: <p>Contenido del modal con pie de página</p>,
  footer: (
    <>
      <button type="button">Cancelar</button>
      <button type="button">Aceptar</button>
    </>
  ),
};

export const mockModalWithoutTitle: ModalProps = {
  isOpen: true,
  onClose: jest.fn(),
  children: <p>Modal sin título</p>,
};

export const mockModalWithCustomSize: ModalProps = {
  isOpen: true,
  onClose: jest.fn(),
  title: 'Modal Grande',
  size: ComponentSize.LARGE,
  children: <p>Este es un modal con tamaño personalizado</p>,
};

export const mockModalWithDisabledClose: ModalProps = {
  isOpen: true,
  onClose: jest.fn(),
  title: 'Sin botón de cerrar',
  showCloseButton: false,
  children: <p>Este modal no se puede cerrar con el botón</p>,
};

export const mockModalWithCustomCloseText: ModalProps = {
  isOpen: true,
  onClose: jest.fn(),
  title: 'Modal con texto personalizado',
  closeButtonText: 'Cerrar ventana',
  children: <p>Este modal tiene un texto personalizado para cerrar</p>,
};
