import React from 'react'
import type { Meta } from '@storybook/react-vite'
import { TabsProps } from '../types'

export const defaultArgs: Partial<TabsProps> = {
  tabs: [
    { key: 'tab1', label: 'Information', content: <div>Content of the Information tab.</div> },
    { key: 'tab2', label: 'Details', content: <div>Content of the Details tab.</div> },
    { key: 'tab3', label: 'History', content: <div>Content of the History tab.</div> },
  ],
}

export const argTypes: NonNullable<Meta<TabsProps>['argTypes']> = {
  defaultActiveKey: {
    control: { type: 'text' },
    description: 'Key of the tab that is active by default on first render.',
    table: { type: { summary: 'string' } },
  },
  onChange: {
    action: 'changed',
    description: 'Callback fired with the key of the newly selected tab.',
    table: { type: { summary: '(key: string) => void' } },
  },
}

export const parameters = {
  docs: {
    description: {
      component:
        'A tabbed navigation component that switches between labelled content panels. Supports a configurable default active tab and exposes a change callback.',
    },
  },
}
