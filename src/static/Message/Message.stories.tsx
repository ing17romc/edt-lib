import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Message from './index';
import { mockMessages } from './__tests__/mocks';

const meta: Meta<typeof Message> = {
  title: 'Static/Message',
  component: Message,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A component that displays various types of status messages (success, info, warning, danger) to provide clear visual feedback to users.'
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Default implementation showing all message types.'
      }
    }
  }
};

export const MessageTypes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {mockMessages.map(({ type, title, content, className }) => (
        <div key={type} className={`message ${className}`}>
          <strong>{title}</strong> {content}
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Individual message types with their default styling.'
      }
    }
  }
};

export const CustomContent: Story = {
  render: () => (
    <div>
      <div className="message message-success">
        <strong>Custom Success!</strong> This is a custom success message with{' '}
        <button 
          type="button" 
          onClick={() => {
            // This is a no-op for demonstration purposes
            console.log('Button clicked');
          }} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'inherit', 
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
            font: 'inherit',
            outline: 'inherit'
          }}
        >
          a button
        </button>.
      </div>
      <div className="message message-info" style={{ marginTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>ℹ️</span>
          <div>
            <h4 style={{ margin: '0 0 0.25rem 0' }}>Custom Info Message</h4>
            <p style={{ margin: 0 }}>This message has custom HTML content and styling.</p>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of messages with custom HTML content and styling.'
      }
    }
  }
};
