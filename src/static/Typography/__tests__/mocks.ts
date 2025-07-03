/**
 * Mocks utilizados en las pruebas del componente Typography
 */
import type { TypographyProps } from '../types';

/**
 * Props por defecto para el componente Typography en pruebas
 */
export const mockTypographyProps: TypographyProps = {
  showCodeExamples: true,
  className: 'test-class',
};

/**
 * Texto de ejemplo utilizado en las pruebas
 */
export const sampleText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

/**
 * Tamaños de fuente disponibles para pruebas
 */
export const fontSizes = ['8', '10', '12', '14', '16', '18', '20', '22'] as const;

/**
 * Tipos de interlineado disponibles para pruebas
 */
export const lineHeightTypes = ['simple', 'doble', 'triple'] as const;
