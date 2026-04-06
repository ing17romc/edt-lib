import React from 'react'
import { TabsProps } from '../types'

export const defaultArgs: Partial<TabsProps> = {
  tabs: [
    { key: 'tab1', label: 'Información', content: <div>Contenido de la pestaña Información.</div> },
    { key: 'tab2', label: 'Detalles', content: <div>Contenido de la pestaña Detalles.</div> },
    { key: 'tab3', label: 'Historial', content: <div>Contenido de la pestaña Historial.</div> },
  ],
}

export const argTypes = {}
