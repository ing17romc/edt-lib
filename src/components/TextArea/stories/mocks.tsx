import { TextAreaProps } from '../types';
import { ComponentSize } from '../../types';

export const defaultArgs: TextAreaProps = {
  label: 'Descripción',
  placeholder: 'Escribe algo...',
  variant: 'outlined',
  size: ComponentSize.MEDIUM,
  rows: 3,
};
