import React, { useState } from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/Tabs.module.scss'
import { TabsProps, TabItem } from './types'

/**
 * Tabs component that allows navigating between multiple content sections.
 *
 * @param tabs - List of tabs with their content
 * @param activeKey - Active key (controlled mode)
 * @param defaultActiveKey - Default active key (uncontrolled mode)
 * @param onChange - Callback when changing tabs
 */
const Tabs = ({
  tabs,
  activeKey,
  defaultActiveKey,
  onChange,
  className,
  ...rest
}: TabsProps) => {
  const [internalKey, setInternalKey] = useState(
    defaultActiveKey ?? tabs[0]?.key ?? ''
  )

  const currentKey = activeKey ?? internalKey

  const handleSelect = (key: string) => {
    if (!activeKey) setInternalKey(key)
    onChange?.(key)
  }

  const activeTab = tabs.find((t) => t.key === currentKey)

  return (
    <div className={classNames(styles.tabs, className)} {...rest}>
      <div role="tablist" className={styles.tabList}>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            type="button"
            aria-selected={tab.key === currentKey}
            aria-controls={`panel-${tab.key}`}
            id={`tab-${tab.key}`}
            disabled={tab.disabled}
            className={classNames(
              styles.tab,
              tab.key === currentKey && styles['tab--active'],
              tab.disabled && styles['tab--disabled']
            )}
            onClick={() => !tab.disabled && handleSelect(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {activeTab && (
        <div
          role="tabpanel"
          id={`panel-${activeTab.key}`}
          aria-labelledby={`tab-${activeTab.key}`}
          className={styles.panel}
        >
          {activeTab.content}
        </div>
      )}
    </div>
  )
}

export default Tabs
export type { TabsProps, TabItem }
