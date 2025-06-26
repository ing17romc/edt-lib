import React, { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Modal from './index';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Controls/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Controls the visibility of the modal',
    },
    eventModal: {
      action: 'modalClosed',
      description: 'Callback function when the modal is closed',
    },
    children: {
      control: 'text',
      description: 'Modal content',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

// Template for stories with state management
const ModalWithState = (args: Omit<React.ComponentProps<typeof Modal>, 'show' | 'eventModal'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <Button 
        text="Open Modal" 
        onClick={handleOpen} 
      />
      <Modal 
        {...args} 
        show={isOpen} 
        eventModal={handleClose}
      >
        {args.children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => (
    <ModalWithState {...args}>
      <div>
        <h2 id="modal-title">Modal Title</h2>
        <p>This is the modal content. You can put anything here.</p>
      </div>
    </ModalWithState>
  ),
};

export const WithCustomContent: Story = {
  render: (args) => {
    const handleClose = () => console.log('Close button clicked');
    const handleConfirm = () => console.log('Confirm button clicked');
    
    return (
      <ModalWithState {...args}>
        <div style={{ padding: '20px' }}>
          <h2 id="modal-title" style={{ marginTop: 0 }}>Custom Styled Modal</h2>
          <p>This modal has custom styling and content.</p>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              text="Close" 
              onClick={handleClose}
              style={{ marginRight: '10px' }}
              variant="secondary"
            />
            <Button 
              text="Confirm" 
              onClick={handleConfirm}
              variant="primary"
            />
          </div>
        </div>
      </ModalWithState>
    );
  },
};

export const WithForm: Story = {
  render: (args) => {
    const handleCancel = () => console.log('Form cancelled');
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted');
    };
    
    return (
      <ModalWithState {...args}>
        <div style={{ padding: '20px', maxWidth: '500px' }}>
          <h2 id="modal-title" style={{ marginTop: 0 }}>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
              <input 
                type="text" 
                id="name" 
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
              <input 
                type="email" 
                id="email" 
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} 
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
              <textarea 
                id="message" 
                rows={4} 
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <Button 
                type="button"
                text="Cancel" 
                onClick={handleCancel}
                variant="secondary"
              />
              <Button 
                type="submit"
                text="Send" 
                variant="primary"
              />
            </div>
          </form>
        </div>
      </ModalWithState>
    );
  },
};
