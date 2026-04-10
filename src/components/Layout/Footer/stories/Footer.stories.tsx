import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Footer from '..';
import { MockFooterContent } from './mocks';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {
    copyright: {
      control: 'text',
      description: 'Copyright holder name displayed in the footer.',
      table: { type: { summary: 'string' } },
    },
    year: {
      control: 'number',
      description: 'Year displayed next to the copyright notice.',
      table: { type: { summary: 'number' }, defaultValue: { summary: 'current year' } },
    },
    className: {
      control: 'text',
      description: 'Additional CSS class name for the root element.',
      table: { type: { summary: 'string' } },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'A page footer that renders optional child content alongside an automatic copyright notice. Accepts a configurable copyright text and year.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: (args) => (
    <Footer {...args}>
      <MockFooterContent />
    </Footer>
  ),
  args: {
    copyright: 'All rights reserved',
    year: new Date().getFullYear(),
  },
};

export const CopyrightOnly: Story = {
  render: (args) => <Footer {...args} />,
  args: {
    copyright: 'All rights reserved',
    year: new Date().getFullYear(),
  },
};

export const CustomCopyright: Story = {
  render: (args) => <Footer {...args} />,
  args: {
    copyright: 'My Company Inc.',
    year: 2025,
  },
};
