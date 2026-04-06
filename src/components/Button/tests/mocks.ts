import type { ButtonProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../types';

/**
 * Mock de la función onClick para pruebas
 */
export const mockOnClick = jest.fn();

/**
 * Props por defecto para el botón
 */
export const defaultButtonProps: ButtonProps = {
  children: 'Click me',
  variant: ComponentVariant.PRIMARY,
  size: ComponentSize.MEDIUM,
  onClick: mockOnClick,
};

/**
 * Props para un botón deshabilitado
 */
export const disabledButtonProps: ButtonProps = {
  ...defaultButtonProps,
  children: 'Disabled Button',
  disabled: true,
};

/**
 * Props para un botón de ancho completo
 */
export const fullWidthButtonProps: ButtonProps = {
  ...defaultButtonProps,
  children: 'Full Width Button',
  fullWidth: true,
};

/**
 * Todas las variantes de botón disponibles
 */
export const allVariants = Object.values(ComponentVariant).map((variant) => ({
  children: variant.charAt(0).toUpperCase() + variant.slice(1),
  variant,
}));

/**
 * Todos los tamaños de botón disponibles
 */
export const allSizes = Object.values(ComponentSize).map((size) => ({
  children: size.charAt(0).toUpperCase() + size.slice(1),
  size,
}));

/**
 * Todas las combinaciones de variantes y tamaños
 */
export const allCombinations = allVariants.flatMap(({ variant }) =>
  allSizes.map(({ size }) => ({
    variant,
    size,
    children: `${variant} ${size}`,
  }))
);
