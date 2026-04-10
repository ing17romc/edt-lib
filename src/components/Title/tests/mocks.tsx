import { TitleProps, TitleSize, TitleVariant } from '../types';

// Basic mock with minimum props
export const mockTitleProps: TitleProps = {
  children: 'Example Title',
};

// Mock with all properties
export const mockTitleWithAllProps: TitleProps = {
  children: 'Title with all properties',
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
  onClick: vi.fn(),
};

// Function to generate titles with different variants
export const mockTitleWithDifferentVariants = (variant: TitleVariant): TitleProps => ({
  children: `Title ${variant}`,
  variant,
});

// Function to generate titles with different sizes
export const mockTitleWithDifferentSizes = (size: TitleSize): TitleProps => ({
  children: `Title ${size}`,
  size,
});
