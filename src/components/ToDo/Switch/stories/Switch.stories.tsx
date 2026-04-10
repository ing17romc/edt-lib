import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Switch from '..';
import { defaultArgs, argTypes, allSizes, parameters } from './mocks';
import { ComponentSize } from '../../../types';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes,
  args: defaultArgs,
  parameters,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { label: 'Enable option' },
};

export const Checked: Story = {
  args: { label: 'Enabled', checked: true },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {allSizes.map((size) => (
        <Switch key={size} size={size as ComponentSize} label={size.charAt(0).toUpperCase() + size.slice(1)} />
      ))}
    </div>
  ),
  parameters: { docs: { source: { code: null } } },
};

const InteractiveSwitch = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      label={checked ? 'Enabled' : 'Disabled'}
      checked={checked}
      onChange={setChecked}
    />
  );
};

export const Interactive: Story = {
  render: () => <InteractiveSwitch />,
  parameters: { docs: { source: { code: null } } },
};

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
};
