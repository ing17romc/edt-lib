import type { Meta } from '@storybook/react-vite';
import { SwitchProps } from '../types';
import { ComponentSize } from '../../types';

export const defaultArgs: Partial<SwitchProps> = {
  label: 'Enable option',
  checked: false,
  size: ComponentSize.MEDIUM,
  disabled: false,
};

export const argTypes: Meta<SwitchProps>['argTypes'] = {
  size: {
    control: 'select',
    options: Object.values(ComponentSize),
    description: 'Size of the switch toggle.',
    table: {
      type: { summary: Object.values(ComponentSize).join(' | ') },
      defaultValue: { summary: ComponentSize.MEDIUM },
    },
  },
  checked: {
    control: 'boolean',
    description: 'Controlled on/off state of the switch.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  disabled: {
    control: 'boolean',
    description: 'When true, the switch is non-interactive and visually muted.',
    table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
  },
  label: {
    control: 'text',
    description: 'Text label rendered next to the switch toggle.',
    table: { type: { summary: 'string' } },
  },
  onChange: {
    action: 'changed',
    description: 'Callback fired with the new checked state when the switch is toggled.',
    table: { type: { summary: '(checked: boolean) => void' } },
  },
};

export const parameters = {
  docs: {
    description: {
      component:
        'A toggle switch for boolean settings. Supports multiple sizes, a text label, controlled checked state, and a disabled mode.',
    },
  },
};

export const allSizes = Object.values(ComponentSize);
