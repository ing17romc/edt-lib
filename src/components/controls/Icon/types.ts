export type IconSize = 'SM' | 'MD' | 'LG';

export type IconName =
  | 'add'
  | 'remove'
  | 'edit'
  | 'delete'
  | 'search'
  | 'save'
  | 'cancel'
  | 'check'
  | 'warning'
  | 'info'
  | 'help'
  | 'close';

export interface IconProps {
  name: IconName;
  size?: IconSize;
}

export type IconComponent = React.FC<IconProps>;

export type { IconProps, IconComponent };
