import type { Meta } from '@storybook/react-vite';
import { SpinnerProps, SpinnerVariant } from '../types';
import { ComponentSize } from '../../types';

export const defaultArgs: Partial<SpinnerProps> = {
  size: ComponentSize.MEDIUM,
  variant: SpinnerVariant.PRIMARY,
  pulse: false,
  'aria-label': 'Loading...',
};

export const argTypes: Meta<SpinnerProps>['argTypes'] = {
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Size of the spinner indicator.',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  variant: {
    control: 'select',
    options: Object.values(SpinnerVariant),
    description: 'Color variant of the spinner.',
    table: {
      type: { summary: Object.values(SpinnerVariant).join(' | ') },
      defaultValue: { summary: SpinnerVariant.PRIMARY },
    },
  },
  pulse: {
    control: 'boolean',
    description: 'When true, renders a pulsing animation instead of a rotating spinner.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  'aria-label': {
    control: 'text',
    description: 'Accessible label for screen readers.',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'Loading...' },
    },
  },
};

export const parameters = {
  docs: {
    description: {
      component:
        'An animated loading indicator that signals to users that content is being processed. Supports multiple color variants, sizes, and a pulse animation mode.',
    },
  },
};

/**
 * All available Spinner variants
 */
export const allVariants = Object.values(SpinnerVariant);

/**
 * All available Spinner sizes
 */
export const allSizes = Object.values(ComponentSize);
