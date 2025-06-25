import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CheckButton from './index';

const meta: Meta<typeof CheckButton> = {
  title: 'Controls/CheckButton',
  component: CheckButton,
  tags: ['autodocs'],
  argTypes: {
    eventChange: { action: 'changed' },
  },
};

export default meta;

type Story = StoryObj<typeof CheckButton>;

export const Default: Story = {
  args: {
    id: 'default-checkbox',
    label: 'Default Checkbox',
  },
};

export const Checked: Story = {
  args: {
    id: 'checked-checkbox',
    label: 'Checked Checkbox',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled-checkbox',
    label: 'Disabled Checkbox',
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    id: 'readonly-checkbox',
    label: 'Read Only Checkbox',
    readOnly: true,
    checked: true,
  },
};

export const Required: Story = {
  args: {
    id: 'required-checkbox',
    label: 'Required Checkbox',
    required: true,
  },
};

export const WithCustomClass: Story = {
  args: {
    id: 'custom-class-checkbox',
    label: 'Checkbox with Custom Class',
    className: 'custom-checkbox',
  },
};
