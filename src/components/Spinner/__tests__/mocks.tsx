import { SpinnerProps, SpinnerVariant } from '../types';
import { ComponentSize } from '../../types';

export const defaultProps: SpinnerProps = {
  size: ComponentSize.MEDIUM,
  variant: SpinnerVariant.PRIMARY,
  'aria-label': 'Cargando...',
};

export const pulseProps: SpinnerProps = {
  ...defaultProps,
  pulse: true,
};
