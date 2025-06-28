import { IconProps } from '../types';
import { ControlSize } from '../../../utils/enums';
import { ALL_ICONS } from '../../../utils/IconTypes';

export const mockIconProps: IconProps = {
  name: ALL_ICONS.ADD,
  size: ControlSize.MD
};

export const mockIconSmallProps: IconProps = {
  name: ALL_ICONS.SEARCH,
  size: ControlSize.SM
};

export const mockIconLargeProps: IconProps = {
  name: ALL_ICONS.INFO,
  size: ControlSize.LG
};

export const mockIconDefaultSize: IconProps = {
  name: ALL_ICONS.EDIT
};
