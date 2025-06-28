import { ImageButtonProps } from '../types';
import { ALL_ICONS } from '../../../utils/IconTypes';
import { ControlSize } from '../../../utils/enums';

export const defaultProps: ImageButtonProps = {
  id: 'test-button',
  text: 'Test Button',
  icon: ALL_ICONS.ADD,
};

export const disabledProps: ImageButtonProps = {
  id: 'disabled-button',
  text: 'Disabled Button',
  icon: ALL_ICONS.DELETE,
  disabled: true,
};

export const clickableProps: ImageButtonProps = {
  id: 'clickable-button',
  text: 'Clickable Button',
  icon: ALL_ICONS.EDIT,
  onClick: jest.fn(),
};

export const customSizeProps: ImageButtonProps = {
  id: 'custom-size-button',
  text: 'Custom Size Button',
  icon: ALL_ICONS.SETTINGS,
  size: ControlSize.LG,
};
