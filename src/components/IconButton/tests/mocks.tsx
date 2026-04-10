import { IconButtonProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../types';

/**
 * Mock onClick function for tests
 */
export const mockOnClick = vi.fn();

/**
 * Default props for IconButton
 */
export const defaultIconButtonProps: IconButtonProps = {
  icon: 'home',
  'aria-label': 'Home',
  variant: ComponentVariant.PRIMARY,
  size: ComponentSize.MEDIUM,
  onClick: mockOnClick,
};

/**
 * Props for a disabled IconButton
 */
export const disabledIconButtonProps: IconButtonProps = {
  ...defaultIconButtonProps,
  'aria-label': 'Disabled button',
  disabled: true,
};

/**
 * Props for a loading IconButton
 */
export const loadingIconButtonProps: IconButtonProps = {
  ...defaultIconButtonProps,
  'aria-label': 'Loading',
  loading: true,
};

/**
 * All available IconButton variants
 */
export const allVariants = Object.values(ComponentVariant).map((variant) => ({
  icon: 'home',
  variant,
  'aria-label': `${variant} button`,
}));

/**
 * All available IconButton sizes
 */
export const allSizes = Object.values(ComponentSize).map((size) => ({
  icon: 'home',
  size,
  'aria-label': `${size} button`,
}));
