import type { TextBoxProps } from '../types';
import { ComponentSize } from '../../types';

/**
 * Argumentos por defecto para las historias de Storybook del componente TextBox.
 */
export const defaultArgs: TextBoxProps = {
  label: 'Etiqueta',
  placeholder: 'Escribe algo...',
  variant: 'outlined',
  size: ComponentSize.MEDIUM,
};
