import { ControlSize } from '../../utils/enums';
import { AllIconsType } from '../../utils/IconTypes';

export type ButtonType = 'button' | 'submit';

export interface ImageButtonProps {
  id: string;
  text: string;
  icon: AllIconsType;
  size?: ControlSize;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type ImageButtonComponent = React.FC<ImageButtonProps>;

export type { ImageButtonProps, ImageButtonComponent };
