import { IconName, IconSize } from '../Icon/types';

export type ButtonType = 'button' | 'submit';

export interface ImageButtonProps {
  id: string;
  text: string;
  icon: IconName;
  size?: IconSize;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ImageButtonComponent = React.FC<ImageButtonProps>;

export type { ImageButtonProps, ImageButtonComponent };
