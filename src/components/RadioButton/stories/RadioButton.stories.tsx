import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import RadioButton from '..';
import { ComponentSize } from '../../types';
import { RadioButtonProps } from '../types';
import {
  defaultArgs,
  checkedArgs,
  disabledArgs,
  disabledCheckedArgs,
  withCustomClass,
  smallSize,
  largeSize,
  RadioGroupComponent,
} from './mocks';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Unique value that identifies this radio button within its group.',
      table: { type: { summary: 'string | number' } },
    },
    label: {
      control: 'text',
      description: 'Text label displayed next to the radio button.',
      table: { type: { summary: 'string' } },
    },
    checked: {
      control: 'boolean',
      description: 'Controls the selected state of the radio button.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: 'When true, the radio button is non-interactive and visually muted.',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    name: {
      control: 'text',
      description: 'Group name — radio buttons sharing the same name are mutually exclusive.',
      table: { type: { summary: 'string' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names for the root element.',
      table: { type: { summary: 'string' } },
    },
    onChange: {
      action: 'changed',
      description: 'Callback fired with the radio button value when it becomes selected.',
      table: { type: { summary: '(value: string | number) => void' } },
    },
    size: {
      control: 'select',
      options: Object.values(ComponentSize),
      description: 'Size of the radio button.',
      table: {
        type: { summary: Object.values(ComponentSize).join(' | ') },
        defaultValue: { summary: ComponentSize.MEDIUM },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A styled radio button component for single-option selection within a group. Supports multiple sizes, controlled usage, and a disabled state.',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: defaultArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio = canvas.getByRole('radio');
    await expect(radio).not.toBeChecked();
    await expect(radio).not.toBeDisabled();
  },
};

export const Checked: Story = {
  args: checkedArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio')).toBeChecked();
  },
};

export const Disabled: Story = {
  args: disabledArgs,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio')).toBeDisabled();
  },
};

export const DisabledChecked: Story = {
  args: disabledCheckedArgs,
};

export const WithCustomClass: Story = {
  args: withCustomClass,
  parameters: {
    docs: {
      description: {
        story: 'RadioButton with a custom CSS class applied.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: smallSize,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioButton with small size (SMALL).',
      },
    },
  },
};

export const LargeSize: Story = {
  args: largeSize,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('radio')).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: 'RadioButton with large size (LARGE).',
      },
    },
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <RadioButton {...smallSize} label="Small option (SMALL)" />
      <RadioButton {...defaultArgs} label="Medium option (MEDIUM)" />
      <RadioButton {...largeSize} label="Large option (LARGE)" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example showing the different size variants available for the RadioButton.',
      },
    },
  },
};

export const Group: Story = {
  render: () => <RadioGroupComponent />,
};

// Controlled component
const ControlledComponent = (args: RadioButtonProps) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  
  return (
    <RadioButton
      {...args}
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
};

// Controlled usage example
export const Controlled: Story = {
  render: (args) => <ControlledComponent {...args} />,
  args: defaultArgs,
};
