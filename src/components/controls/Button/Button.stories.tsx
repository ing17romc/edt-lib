import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';
import { STYLE_CONTROL, SIZE_CONTROL } from '../../utils/constant';

// Meta information for the component
const meta: Meta<typeof Button> = {
  title: 'Controls/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A customizable button component with various styles and sizes.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The text displayed on the button',
    },
    buttonType: {
      control: {
        type: 'select',
        options: Object.values(STYLE_CONTROL).map(style => style.toUpperCase()),
      },
      description: 'The style variant of the button',
    },
    size: {
      control: {
        type: 'select',
        options: Object.values(SIZE_CONTROL).map(size => size.toUpperCase()),
      },
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button when true',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default story
export const Primary: Story = {
  args: {
    title: 'Primary Button',
    buttonType: 'PRIMARY',
    size: 'MD',
  },
};

// Secondary button
export const Secondary: Story = {
  args: {
    title: 'Secondary Button',
    buttonType: 'SECONDARY',
    size: 'MD',
  },
};

// Large button
export const Large: Story = {
  args: {
    title: 'Large Button',
    buttonType: 'PRIMARY',
    size: 'LG',
  },
};

// Medium button
export const Medium: Story = {
  args: {
    title: 'Medium Button',
    buttonType: 'PRIMARY',
    size: 'MD',
  },
};

// Small button
export const Small: Story = {
  args: {
    title: 'Small Button',
    buttonType: 'PRIMARY',
    size: 'SM',
  },
};

// Extra Small button
export const ExtraSmall: Story = {
  args: {
    title: 'XS Button',
    buttonType: 'PRIMARY',
    size: 'XS',
  },
};

// With click handler
export const WithClickHandler: Story = {
  args: {
    title: 'Click Me',
    buttonType: 'PRIMARY',
    size: 'MD',
    onClick: () => console.log('Button clicked!'),
  },
};

// Disabled button
export const Disabled: Story = {
  args: {
    title: 'Disabled Button',
    buttonType: 'PRIMARY',
    size: 'MD',
    disabled: true,
  },
};
