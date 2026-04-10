import { TextAreaProps } from '../types';
import { ComponentSize } from '../../types';

export const defaultArgs: TextAreaProps = {
  label: 'Description',
  placeholder: 'Type something...',
  variant: 'outlined',
  size: ComponentSize.MEDIUM,
  rows: 3,
};
