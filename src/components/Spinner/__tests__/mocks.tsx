import { SpinnerProps, SpinnerSize, SpinnerVariant } from '../types';

export const defaultProps: SpinnerProps = {
  size: SpinnerSize.MEDIUM,
  variant: SpinnerVariant.PRIMARY,
  'aria-label': 'Cargando...',
};

export const pulseProps: SpinnerProps = {
  ...defaultProps,
  pulse: true,
};
