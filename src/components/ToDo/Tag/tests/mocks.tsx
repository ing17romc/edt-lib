import { TagProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../../types';

export const mockOnClose = jest.fn();

export const defaultTagProps: TagProps = {
  children: 'Etiqueta',
  variant: ComponentVariant.PRIMARY,
  size: ComponentSize.MEDIUM,
};

export const closableTagProps: TagProps = {
  ...defaultTagProps,
  closable: true,
  onClose: mockOnClose,
};

export const disabledTagProps: TagProps = {
  ...defaultTagProps,
  disabled: true,
};

export const allVariants = Object.values(ComponentVariant).map((variant) => ({
  children: variant.charAt(0).toUpperCase() + variant.slice(1),
  variant,
}));

export const allSizes = Object.values(ComponentSize).map((size) => ({
  children: size.charAt(0).toUpperCase() + size.slice(1),
  size,
}));
