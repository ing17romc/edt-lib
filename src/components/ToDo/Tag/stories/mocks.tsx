import type { Meta } from '@storybook/react-vite';
import { TagProps } from '../types';
import { ComponentVariant, ComponentSize } from '../../../types';

export const defaultArgs: Partial<TagProps> = {
  children: 'Tag label',
  variant: ComponentVariant.PRIMARY,
  size: ComponentSize.MEDIUM,
  closable: false,
  disabled: false,
};

export const argTypes: Meta<TagProps>['argTypes'] = {
  variant: {
    control: 'select',
    options: Object.values(ComponentVariant),
    description: 'Color variant of the tag.',
    table: {
      type: { summary: Object.values(ComponentVariant).join(' | ') },
      defaultValue: { summary: ComponentVariant.PRIMARY },
    },
  },
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Size of the tag.',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  closable: {
    control: 'boolean',
    description: 'When true, a close button is shown to dismiss the tag.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  disabled: {
    control: 'boolean',
    description: 'When true, the tag is non-interactive and visually muted.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
};

export const parameters = {
  docs: {
    description: {
      component:
        'A compact label used to categorise or flag content. Supports multiple color variants, sizes, a closable mode, and a disabled state.',
    },
  },
};

export const allVariants = Object.values(ComponentVariant);
export const allSizes = Object.values(ComponentSize);
