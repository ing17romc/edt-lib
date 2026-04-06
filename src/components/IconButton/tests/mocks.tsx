import { IconButtonProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../types';

/**
 * Mock de la función onClick para pruebas
 */
export const mockOnClick = jest.fn();

/**
 * Props por defecto para el IconButton
 */
export const defaultIconButtonProps: IconButtonProps = {
  icon: 'home',
  'aria-label': 'Inicio',
  variant: ComponentVariant.PRIMARY,
  size: ComponentSize.MEDIUM,
  onClick: mockOnClick,
};

/**
 * Props para un IconButton deshabilitado
 */
export const disabledIconButtonProps: IconButtonProps = {
  ...defaultIconButtonProps,
  'aria-label': 'Botón deshabilitado',
  disabled: true,
};

/**
 * Props para un IconButton en estado de carga
 */
export const loadingIconButtonProps: IconButtonProps = {
  ...defaultIconButtonProps,
  'aria-label': 'Cargando',
  loading: true,
};

/**
 * Todas las variantes disponibles de IconButton
 */
export const allVariants = Object.values(ComponentVariant).map((variant) => ({
  icon: 'home',
  variant,
  'aria-label': `Botón ${variant}`,
}));

/**
 * Todos los tamaños disponibles de IconButton
 */
export const allSizes = Object.values(ComponentSize).map((size) => ({
  icon: 'home',
  size,
  'aria-label': `Botón ${size}`,
}));
