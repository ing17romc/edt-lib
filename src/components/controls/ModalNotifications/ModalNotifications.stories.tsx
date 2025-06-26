import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import { ModalNotifications } from './index';
import type { ModalNotificationsProps } from './types';

// This is a workaround for the TypeScript error in Storybook
// The issue is that Storybook's Story type expects a different event type than our component
type FixedModalNotificationsProps = Omit<ModalNotificationsProps, 'eventModal' | 'eventContinue'> & {
  eventModal: (e: React.MouseEvent<Element, MouseEvent>) => void;
  eventContinue: (e: React.MouseEvent<Element, MouseEvent>) => void;
};

declare module './index' {
  interface ModalNotificationsProps {
    eventModal: (e: React.MouseEvent<Element, MouseEvent>) => void;
    eventContinue: (e: React.MouseEvent<Element, MouseEvent>) => void;
  }
}
import { NotificationType } from './types';

const meta: Meta<typeof ModalNotifications> = {
  title: 'Feedback/ModalNotifications',
  component: ModalNotifications,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['ERROR', 'WARNING', 'INFO', 'SUCCESSFULL'] as NotificationType[],
      },
    },
    title: { control: 'text' },
    message: { control: 'text' },
    details: { control: 'text' },
    show: { control: 'boolean' },
  },
  args: {
    title: 'Notification Title',
    message: 'This is a notification message',
    details: 'Additional details about the notification can go here.',
    type: 'INFO',
    show: false,
  },
};

export default meta;

type Story = StoryObj<typeof ModalNotifications>;

// Interactive story with controls
export const Default: Story = {
  render: (args) => {
    const [show, setShow] = useState(args.show);
    
    return (
      <div>
        <Button 
          title="Show Modal" 
          onClick={() => setShow(true)} 
          type="PRIMARY"
        />
        <ModalNotifications
          {...args}
          show={show}
          eventModal={() => setShow(false)}
          eventContinue={() => setShow(false)}
        />
      </div>
    );
  },
};

// Story with different notification types
export const ErrorNotification: Story = {
  args: {
    type: 'ERROR',
    title: 'Error',
    message: 'An error occurred while processing your request.',
    details: 'The server returned a 500 Internal Server Error.',
  },
  render: (args) => {
    const [show, setShow] = useState(true);
    return (
      <ModalNotifications
        {...args}
        show={show}
        eventModal={() => setShow(false)}
        eventContinue={() => setShow(false)}
      />
    );
  },
};

export const WarningNotification: Story = {
  args: {
    type: 'WARNING',
    title: 'Warning',
    message: 'This action cannot be undone.',
    details: 'Are you sure you want to proceed?',
  },
  render: (args) => {
    const [show, setShow] = useState(true);
    return (
      <ModalNotifications
        {...args}
        show={show}
        eventModal={() => setShow(false)}
        eventContinue={() => setShow(false)}
      />
    );
  },
};

export const SuccessNotification: Story = {
  args: {
    type: 'SUCCESSFULL',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    details: 'You can now continue working with your updated data.',
  },
  render: (args) => {
    const [show, setShow] = useState(true);
    return (
      <ModalNotifications
        {...args}
        show={show}
        eventModal={() => setShow(false)}
        eventContinue={() => setShow(false)}
      />
    );
  },
};

// Story with custom actions
export const WithCustomActions: Story = {
  args: {
    type: 'INFO',
    title: 'Custom Actions',
    message: 'This modal has custom action buttons.',
  },
  render: (args) => {
    const [show, setShow] = useState(true);
    const [action, setAction] = useState<string>('');
    
    const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setShow(false);
      console.log('Continue button clicked');
    };
    
    return (
      <div>
        <Button 
          title="Show Modal with Custom Actions" 
          onClick={() => setShow(true)} 
          type="PRIMARY"
        />
        {action && <p style={{ marginTop: '1rem' }}>Action: {action}</p>}
        <ModalNotifications
          {...args}
          show={show}
          eventModal={(e: React.MouseEvent<Element, MouseEvent>) => {
            e.preventDefault();
            setShow(false);
          }}
          eventContinue={(e: React.MouseEvent<HTMLButtonElement>) => handleContinue(e)}
        />
      </div>
    );
  },
};
