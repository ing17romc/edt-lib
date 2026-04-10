import type { TextBoxProps } from '../types';
import { ComponentSize } from '../../types';

/**
 * Default arguments for TextBox Storybook stories.
 */
export const defaultArgs: TextBoxProps = {
  label: 'Label',
  placeholder: 'Type something...',
  variant: 'outlined',
  size: ComponentSize.MEDIUM,
};
