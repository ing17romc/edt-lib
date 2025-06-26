import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './index';
import type { DatePickerProps } from './types';

// Meta information for the component
const meta: Meta<typeof DatePicker> = {
  title: 'Controls/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the date picker',
    },
    title: {
      control: 'text',
      description: 'Label text displayed above the date picker',
    },
    value: {
      control: 'text',
      description: 'Current date value in MM/DD/YYYY format',
    },
    disabled: {
      control: 'boolean',
      description: 'If true, the date picker is disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'If true, the date picker is read-only',
    },
    required: {
      control: 'boolean',
      description: 'If true, the date picker is required',
    },
    eventChange: {
      action: 'dateChanged',
      description: 'Callback function called when the date changes',
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

// Default story
const DatePickerWithState = (args: Omit<DatePickerProps, 'eventChange' | 'value'>) => {
  const [date, setDate] = useState('');
  
  const handleDateChange = (value: string) => {
    setDate(value);
    args.eventChange?.(value);
  };

  return (
    <div style={{ width: '300px' }}>
      <DatePicker 
        {...args} 
        value={date}
        eventChange={handleDateChange} 
      />
      <div style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
        <strong>Selected Date:</strong> {date || 'None'}
      </div>
    </div>
  );
};

// Default story
export const Default: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    id: 'default-date-picker',
    title: 'Select a Date',
    value: '',
  },
};

// With Initial Value
export const WithInitialValue: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    id: 'with-initial-value',
    title: 'Birth Date',
    value: '5/15/1990',
  },
};

// Disabled State
export const Disabled: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    id: 'disabled-date-picker',
    title: 'Disabled Date Picker',
    value: '1/1/2023',
    disabled: true,
  },
};

// Read Only State
export const ReadOnly: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    id: 'readonly-date-picker',
    title: 'Read Only Date',
    value: '12/25/2023',
    readOnly: true,
  },
};

// Required State
export const Required: Story = {
  render: (args) => <DatePickerWithState {...args} />,
  args: {
    id: 'required-date-picker',
    title: 'Appointment Date',
    value: '',
    required: true,
  },
};

// With Custom Date Range
export const WithCustomDateRange: Story = {
  render: (args) => {
    const [date, setDate] = useState('');
    
    const handleDateChange = (value: string) => {
      setDate(value);
      args.eventChange?.(value);
    };

    return (
      <div style={{ width: '300px' }}>
        <p style={{ fontSize: '0.875rem', marginBottom: '1rem' }}>
          This example shows a date picker with a custom date range (2000-2030).
        </p>
        <DatePicker 
          {...restArgs} 
          value={date}
          eventChange={handleDateChange}
        />
        <div style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
          <strong>Selected Date:</strong> {date || 'None'}
        </div>
      </div>
    );
  },
  args: {
    id: 'custom-range-date-picker',
    title: 'Custom Date Range',
    value: '',
  },
};
