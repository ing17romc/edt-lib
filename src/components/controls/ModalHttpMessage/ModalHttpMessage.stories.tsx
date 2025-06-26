import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '../Button';
import ModalHttpMessage from './index';
import { httpStatusTestCases } from './__tests__/mocks';

const meta: Meta<typeof ModalHttpMessage> = {
  title: 'Feedback/ModalHttpMessage',
  component: ModalHttpMessage,
  tags: ['autodocs'],
  argTypes: {
    show: {
      control: 'boolean',
      description: 'Controls the visibility of the modal',
    },
    eventModal: {
      action: 'closed',
      description: 'Function called when the modal is closed',
    },
    code: {
      control: 'number',
      description: 'HTTP status code to display',
    },
    title: {
      control: 'text',
      description: 'Title of the HTTP message',
    },
    message: {
      control: 'text',
      description: 'Main message content',
    },
    details: {
      control: 'text',
      description: 'Additional details to display in a textarea',
    },
  },
  args: {
    show: true,
    code: 200,
    title: 'Success',
    message: 'Operation completed successfully',
    details: 'Additional details about the operation would appear here.',
  },
  render: function Render(args) {
    const [show, setShow] = useState(args.show);
    
    return (
      <>
        <Button title="Show Modal" onClick={() => setShow(true)} />
        <ModalHttpMessage 
          {...args} 
          show={show} 
          eventModal={() => setShow(false)} 
        />
      </>
    );
  },
};

export default meta;
type Story = StoryObj<typeof ModalHttpMessage>;

export const Success: Story = {
  args: {
    code: 200,
    title: 'Success',
    message: 'Your request was processed successfully.',
    details: 'The operation completed without any issues.',
  },
};

export const ClientError: Story = {
  args: {
    code: 400,
    title: 'Bad Request',
    message: 'The server cannot process the request due to a client error.',
    details: 'Please check your input and try again.',
  },
};

export const ServerError: Story = {
  args: {
    code: 500,
    title: 'Internal Server Error',
    message: 'An unexpected error occurred on the server.',
    details: 'Our team has been notified and is working on a fix.',
  },
};

// Helper component for the interactive demo
const AllStatusCodesDemo = () => {
  const [show, setShow] = useState(false);
  const [currentCode, setCurrentCode] = useState(httpStatusTestCases[0].code);
  const currentCase = httpStatusTestCases.find(c => c.code === currentCode) || httpStatusTestCases[0];

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        {httpStatusTestCases.map(({ code }) => (
          <Button
            key={code}
            title={`Show ${code}`}
            onClick={() => {
              setCurrentCode(code);
              setShow(true);
            }}
          />
        ))}
      </div>
      <ModalHttpMessage
        show={show}
        eventModal={() => setShow(false)}
        code={currentCase.code}
        title={`Status ${currentCase.code}`}
        message={`This is a test message for HTTP status ${currentCase.code}`}
        details={`Additional details about the ${currentCase.code} status code would appear here.`}
      />
    </div>
  );
};

export const AllStatusCodes: Story = {
  render: () => <AllStatusCodesDemo />,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};
