import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from '../Button';
import { ModalNotifications } from './index';
import type { ModalNotificationsProps, NotificationType } from './types';

// Type for our story args
type StoryArgs = Omit<ModalNotificationsProps, 'eventModal' | 'eventContinue' | 'show'>;

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

// Wrapper component for Default story
const DefaultStory: React.FC<StoryArgs> = (args) => {
  const [show, setShow] = React.useState(false);
  const [action, setAction] = React.useState('');

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleContinue = () => {
    setAction('Continue clicked');
    setShow(false);
  };

  return (
    <div>
      <Button 
        title="Show Notification" 
        onClick={handleOpen} 
        buttonType="PRIMARY"
      />
      <ModalNotifications
        {...args}
        show={show}
        eventModal={handleClose}
        eventContinue={handleContinue}
      />
      {action && <div style={{ marginTop: '1rem' }}>Action: {action}</div>}
    </div>
  );
};

// Interactive story with controls
export const Default: Story = {
  render: (args) => <DefaultStory {...args} />,
  args: {
    title: 'Default Notification',
    message: 'This is a default notification message.',
    type: 'INFO',
    show: false,
  },
};

// Wrapper component for ErrorNotification story
const ErrorNotificationStory: React.FC<StoryArgs> = (args) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleContinue = () => {
    setShow(false);
  };

  return (
    <ModalNotifications
      {...args}
      show={show}
      eventModal={handleClose}
      eventContinue={handleContinue}
    />
  );
};

// Story with different notification types
export const ErrorNotification: Story = {
  render: (args) => <ErrorNotificationStory {...args} />,
  args: {
    type: 'ERROR',
    title: 'Error',
    message: 'An error occurred while processing your request.',
    details: 'The server returned a 500 Internal Server Error.',
  },
};

// Wrapper component for WarningNotification story
const WarningNotificationStory: React.FC<StoryArgs> = (args) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleContinue = () => setShow(false);

  return (
    <ModalNotifications
      {...args}
      show={show}
      eventModal={handleClose}
      eventContinue={handleContinue}
    />
  );
};

export const WarningNotification: Story = {
  render: (args) => <WarningNotificationStory {...args} />,
  args: {
    type: 'WARNING',
    title: 'Warning',
    message: 'This is a warning message.',
    details: 'Please be aware of this warning.',
  },
};

// Wrapper component for SuccessNotification story
const SuccessNotificationStory: React.FC<StoryArgs> = (args) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleContinue = () => setShow(false);

  return (
    <ModalNotifications
      {...args}
      show={show}
      eventModal={handleClose}
      eventContinue={handleContinue}
    />
  );
};

export const SuccessNotification: Story = {
  render: (args) => <SuccessNotificationStory {...args} />,
  args: {
    type: 'SUCCESSFULL',
    title: 'Success!',
    message: 'Your changes have been saved successfully.',
    details: 'You can now continue working with your updated data.',
  },
};

// Wrapper component for WithCustomActions story
const WithCustomActionsStory: React.FC<StoryArgs> = (args) => {
  const [show, setShow] = useState(true);
  const [action, setAction] = useState<string>('');
  
  const handleContinue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShow(false);
    setAction('Continue button clicked');
  };
  
  const handleModalClose = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    setShow(false);
  };
  
  return (
    <div>
      <Button 
        title="Show Modal with Custom Actions" 
        onClick={() => setShow(true)} 
        buttonType="PRIMARY"
      />
      {action && <p style={{ marginTop: '1rem' }}>Action: {action}</p>}
      <ModalNotifications
        {...args}
        show={show}
        eventModal={handleModalClose}
        eventContinue={handleContinue}
      />
    </div>
  );
};

// Story with custom actions
export const WithCustomActions: Story = {
  render: (args) => <WithCustomActionsStory {...args} />,
  args: {
    type: 'INFO',
    title: 'Custom Actions',
    message: 'This modal has custom action buttons.',
  },
};
