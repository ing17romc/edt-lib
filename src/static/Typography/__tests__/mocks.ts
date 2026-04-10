/**
 * Mocks used in Typography component tests
 */
import type { TypographyProps } from '../types';

/**
 * Default props for the Typography component in tests
 */
export const mockTypographyProps: TypographyProps = {
  showCodeExamples: true,
  className: 'test-class',
};

/**
 * Sample text used in tests
 */
export const sampleText = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.';

/**
 * Available font sizes for tests
 */
export const fontSizes = ['8', '10', '12', '14', '16', '18', '20', '22'] as const;

/**
 * Available line height types for tests
 */
export const lineHeightTypes = ['simple', 'doble', 'triple'] as const;
