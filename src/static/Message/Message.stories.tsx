import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Message from './index';

export default {
  title: 'Static/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Component for displaying feedback messages to the user with different levels of importance.'
      },
    },
  },
  args: {
    children: 'Example message',
    title: 'Message title',
    type: 'info',
    closable: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'danger'],
      description: 'Message type',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: 'text',
      description: 'Optional title',
    },
    children: {
      control: 'text',
      description: 'Main content',
    },
    closable: {
      control: 'boolean',
      description: 'Allows closing the message',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    onClose: {
      action: 'onClose',
      description: 'Close handler',
    },
  },
} as Meta<typeof Message>;

type Story = StoryObj<typeof Message>;

export const Default: Story = {};

export const WithTitle: Story = {
  args: {
    title: 'Message title',
    children: 'This is a message with a title.',
  },
};

export const Closable: Story = {
  args: {
    title: 'Important message',
    children: 'This message can be closed.',
    closable: true,
  },
};

export const Types: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Message type="success" title="Success">
        Operation completed successfully.
      </Message>
      <Message type="info" title="Information">
        This is an informational message.
      </Message>
      <Message type="warning" title="Warning">
        This action cannot be undone.
      </Message>
      <Message type="danger" title="Error">
        An error occurred while processing the request.
      </Message>
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Message type="info" title="Update available">
      <div>
        <p>New features available:</p>
        <ul style={{ margin: '0.5rem 0 0 1rem', paddingLeft: '1rem' }}>
          <li>Performance improvements</li>
          <li>New functionalities</li>
          <li>Bug fixes</li>
        </ul>
      </div>
    </Message>
  ),
};

export const WithoutTitle: Story = {
  args: {
    title: undefined,
    children: 'This is a message without a title. Useful for short and direct messages.',
  },
};
