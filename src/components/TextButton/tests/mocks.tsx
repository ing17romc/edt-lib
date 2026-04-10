import { TextButtonProps } from '../types';
import { ComponentSize } from '../../types';

export const mockTextButtonProps: TextButtonProps = {
  children: 'Test button',
  color: 'primary',
  size: ComponentSize.MEDIUM,
  className: 'test-class',
  onClick: vi.fn(),
};

export const mockDisabledTextButtonProps: TextButtonProps = {
  children: 'Disabled',
  color: 'primary',
  disabled: true,
};

export const mockLoadingTextButtonProps: TextButtonProps = {
  children: 'Loading',
  loading: true,
};

export const mockFullWidthTextButtonProps: TextButtonProps = {
  children: 'Full width',
  fullWidth: true,
};

export const mockCustomTextButtonProps: TextButtonProps = {
  children: 'Custom',
  color: 'secondary',
  size: ComponentSize.LARGE,
  underline: 'always',
};
