export interface MenuOption {
  path: string;
  icon: string;
  name: string;
}

export interface MenuProps {
  options: MenuOption[];
  getCurrentPath: (path: string) => void;
}

export type MenuComponent = React.FC<MenuProps>;

export type { MenuOption, MenuProps, MenuComponent };
