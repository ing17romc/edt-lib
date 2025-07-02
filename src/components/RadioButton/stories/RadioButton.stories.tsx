import React from 'react';
import type { StoryObj } from '@storybook/react';
import RadioButton from '..';
import {
  meta,
  defaultArgs,
  checkedArgs,
  disabledArgs,
  disabledCheckedArgs,
  withCustomClass,
  RadioGroupComponent,
} from './mocks';

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: defaultArgs,
};

export const Checked: Story = {
  args: checkedArgs,
};

export const Disabled: Story = {
  args: disabledArgs,
};

export const DisabledChecked: Story = {
  args: disabledCheckedArgs,
};

export const WithCustomClass: Story = {
  args: withCustomClass,
};

export const Group: Story = {
  render: () => <RadioGroupComponent />,
};

// Componente controlado
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

// Ejemplo de uso controlado
export const Controlled: Story = {
  render: (args) => <ControlledComponent {...args} />,
  args: defaultArgs,
};
