import React from 'react'
import { TabItem, TabsProps } from '../types'

export const defaultTabs: TabItem[] = [
  { key: 'tab1', label: 'Tab 1', content: <div>Tab 1 content</div> },
  { key: 'tab2', label: 'Tab 2', content: <div>Tab 2 content</div> },
  { key: 'tab3', label: 'Tab 3', content: <div>Tab 3 content</div> },
]

export const tabsWithDisabled: TabItem[] = [
  { key: 'tab1', label: 'Active', content: <div>Content 1</div> },
  { key: 'tab2', label: 'Disabled', content: <div>Content 2</div>, disabled: true },
  { key: 'tab3', label: 'Normal', content: <div>Content 3</div> },
]

export const mockOnChange = vi.fn()

export const defaultTabsProps: TabsProps = {
  tabs: defaultTabs,
}

export const controlledTabsProps: TabsProps = {
  tabs: defaultTabs,
  activeKey: 'tab1',
  onChange: mockOnChange,
}
