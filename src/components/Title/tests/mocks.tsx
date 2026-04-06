import { TitleProps, TitleSize, TitleVariant } from '../types';

// Mock básico con props mínimas
export const mockTitleProps: TitleProps = {
  children: 'Título de ejemplo',
};

// Mock con todas las propiedades
export const mockTitleWithAllProps: TitleProps = {
  children: 'Título con todas las propiedades',
  size: TitleSize.H2,
  variant: TitleVariant.PRIMARY,
  className: 'custom-class',
  bold: true,
  italic: true,
  underline: true,
  strikethrough: false,
  align: 'center',
  block: true,
  noWrap: false,
  id: 'title-id',
  onClick: jest.fn(),
};

// Función para generar títulos con diferentes variantes
export const mockTitleWithDifferentVariants = (variant: TitleVariant): TitleProps => ({
  children: `Título ${variant}`,
  variant,
});

// Función para generar títulos con diferentes tamaños
export const mockTitleWithDifferentSizes = (size: TitleSize): TitleProps => ({
  children: `Título ${size}`,
  size,
});
