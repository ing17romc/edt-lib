import { ImageButtonProps } from '../types';
import { IconName } from '../../Icon/types';

export const defaultProps: ImageButtonProps = {
  id: 'test-button',
  text: 'Test Button',
  icon: 'add',
};

export const disabledProps: ImageButtonProps = {
  id: 'disabled-button',
  text: 'Disabled Button',
  icon: 'delete',
  disabled: true,
};

export const clickableProps: ImageButtonProps = {
  id: 'clickable-button',
  text: 'Clickable Button',
  icon: 'edit',
  onClick: jest.fn(),
};

export const customSizeProps: ImageButtonProps = {
  id: 'custom-size-button',
  text: 'Custom Size Button',
  icon: 'settings' as IconName,
  size: 'LG',
};
