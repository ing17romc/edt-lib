import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Switch from '..';
import { defaultArgs, argTypes, allSizes } from './mocks';
import { ComponentSize } from '../../../types';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes,
  args: defaultArgs,
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { label: 'Activar opción' },
};

export const Checked: Story = {
  args: { label: 'Activado', checked: true },
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

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Switch
        label={checked ? 'Activado' : 'Desactivado'}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
  parameters: { docs: { source: { code: null } } },
};

export const Disabled: Story = {
  args: { label: 'Deshabilitado', disabled: true },
};
