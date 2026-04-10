import type { Meta } from '@storybook/react';
import type { MessageType, MessageProps } from '../types';

/**
 * Example data for messages
 */
export const mockMessages: Array<{
  type: MessageType;
  title: string;
  content: string;
}> = [
  {
    type: 'success',
    title: 'Success!',
    content: 'The operation completed successfully.',
  },
  {
    type: 'info',
    title: 'Information',
    content: 'This is an informational message.',
  },
  {
    type: 'warning',
    title: 'Warning',
    content: 'This action requires your attention.',
  },
  {
    type: 'danger',
    title: 'Error',
    content: 'An unexpected error occurred.',
  },
];

/**
 * Available message types for Storybook controls
 */
export const messageTypes: MessageType[] = ['success', 'info', 'warning', 'danger'];

/**
 * Default arguments for the Message component
 */
export const defaultArgs: Partial<MessageProps> = {
  type: 'info',
  title: 'Message title',
  children: 'Example message content.',
};


/**
 * Controls for Storybook arguments
 */
export const argTypes: Meta<typeof defaultArgs>['argTypes'] = {
  type: {
    control: { type: 'select' },
    options: messageTypes,
    description: 'Message type to display',
    table: {
      type: { summary: messageTypes.map(t => `'${t}'`).join(' | ') },
      defaultValue: { summary: 'info' },
    },
  },
  title: {
    control: { type: 'text' },
    description: 'Optional message title',
    table: {
      type: { summary: 'string' },
    },
  },
  children: {
    control: { type: 'text' },
    description: 'Message content',
    table: {
      type: { summary: 'ReactNode' },
    },
  },
  className: {
    control: { type: 'text' },
    description: 'Additional CSS classes',
    table: {
      type: { summary: 'string' },
    },
  },
};
