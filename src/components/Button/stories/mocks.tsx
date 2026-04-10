import type { Meta } from '@storybook/react-vite';
import { ButtonProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../types';

export const defaultArgs = {
  children: 'Button',
  disabled: false,
  fullWidth: false,
};

export const argTypes: Meta<ButtonProps>['argTypes'] = {
  children: {
    control: 'text',
    description: 'Button label or React content displayed inside the button.',
    table: { type: { summary: 'ReactNode' } },
  },
  variant: {
    control: 'select',
    options: Object.values(ComponentVariant),
    description: 'Visual variant of the button.',
    table: {
      type: { summary: Object.values(ComponentVariant).join(' | ') },
      defaultValue: { summary: ComponentVariant.PRIMARY },
    },
  },
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Size of the button.',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  disabled: {
    control: 'boolean',
    description: 'When true, the button is non-interactive and visually muted.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  fullWidth: {
    control: 'boolean',
    description: 'When true, the button stretches to fill its container width.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  loading: {
    control: 'boolean',
    description: 'When true, shows a loading indicator and disables interaction.',
    table: {
      type: { summary: 'boolean' },
      defaultValue: { summary: 'false' },
    },
  },
  type: {
    control: 'select',
    options: ['button', 'submit', 'reset'],
    description: 'HTML button type attribute.',
    table: {
      type: { summary: 'button | submit | reset' },
      defaultValue: { summary: 'button' },
    },
  },
  onClick: {
    action: 'clicked',
    description: 'Callback fired when the button is clicked.',
    table: { type: { summary: '(event: MouseEvent) => void' } },
  },
};

export const variants = Object.values(ComponentVariant).map((variant) => ({
  variant,
  label: variant.charAt(0).toUpperCase() + variant.slice(1),
}));

export const sizes = Object.values(ComponentSize).map((size) => ({
  size,
  label: size.charAt(0).toUpperCase() + size.slice(1),
}));

export const parameters = {
  docs: {
    description: {
      component:
        'A multi-purpose button component with support for multiple visual variants, sizes, loading state, and full-width layout. Built on top of the native HTML button element.',
    },
  },
};

export const buttonStories: Meta<ButtonProps> = {
  tags: ['autodocs'],
  parameters,
  argTypes,
  args: defaultArgs as ButtonProps,
};
