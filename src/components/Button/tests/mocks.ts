import type { ButtonProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../types';

/**
 * Mock onClick function for testing
 */
export const mockOnClick = vi.fn();

/**
 * Default button props
 */
export const defaultButtonProps: ButtonProps = {
  children: 'Click me',
  variant: ComponentVariant.PRIMARY,
  size: ComponentSize.MEDIUM,
  onClick: mockOnClick,
};

/**
 * Disabled button props
 */
export const disabledButtonProps: ButtonProps = {
  ...defaultButtonProps,
  children: 'Disabled Button',
  disabled: true,
};

/**
 * Full width button props
 */
export const fullWidthButtonProps: ButtonProps = {
  ...defaultButtonProps,
  children: 'Full Width Button',
  fullWidth: true,
};

/**
 * All available button variants
 */
export const allVariants = Object.values(ComponentVariant).map((variant) => ({
  children: variant.charAt(0).toUpperCase() + variant.slice(1),
  variant,
}));

/**
 * All available button sizes
 */
export const allSizes = Object.values(ComponentSize).map((size) => ({
  children: size.charAt(0).toUpperCase() + size.slice(1),
  size,
}));

/**
 * All variant and size combinations
 */
export const allCombinations = allVariants.flatMap(({ variant }) =>
  allSizes.map(({ size }) => ({
    variant,
    size,
    children: `${variant} ${size}`,
  }))
);
