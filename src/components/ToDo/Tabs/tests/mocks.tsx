import React from 'react'
import { TabItem, TabsProps } from '../types'

export const defaultTabs: TabItem[] = [
  { key: 'tab1', label: 'Pestaña 1', content: <div>Contenido de pestaña 1</div> },
  { key: 'tab2', label: 'Pestaña 2', content: <div>Contenido de pestaña 2</div> },
  { key: 'tab3', label: 'Pestaña 3', content: <div>Contenido de pestaña 3</div> },
]

export const tabsWithDisabled: TabItem[] = [
  { key: 'tab1', label: 'Activo', content: <div>Contenido 1</div> },
  { key: 'tab2', label: 'Deshabilitado', content: <div>Contenido 2</div>, disabled: true },
  { key: 'tab3', label: 'Normal', content: <div>Contenido 3</div> },
]

export const mockOnChange = jest.fn()

export const defaultTabsProps: TabsProps = {
  tabs: defaultTabs,
}

export const controlledTabsProps: TabsProps = {
  tabs: defaultTabs,
  activeKey: 'tab1',
  onChange: mockOnChange,
}
