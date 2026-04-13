import React from 'react'
import classNames from '../../utils/classNames'
import styles from './styles/Menu.module.scss'
import { MenuProps, MenuItem } from './types'

/**
 * Menu component that displays a list of navigation or action items.
 *
 * @param items - Menu items
 * @param activeKey - Key of the active item
 * @param onSelect - Callback when selecting an item
 */
const Menu = ({
  items,
  activeKey,
  onSelect,
  className,
  ...rest
}: MenuProps) => (
  <ul
    role="menu"
    className={classNames(styles.menu, className)}
    {...rest}
  >
    {items.map((item) => {
      if (item.divider) {
        return <li key={item.key} role="separator" className={styles.divider} />
      }

      return (
        <li key={item.key} role="none">
          <button
            role="menuitem"
            type="button"
            disabled={item.disabled}
            className={classNames(
              styles.item,
              item.key === activeKey && styles['item--active'],
              item.disabled && styles['item--disabled']
            )}
            onClick={() => !item.disabled && onSelect?.(item.key)}
          >
            {item.icon && <span className={styles.icon}>{item.icon}</span>}
            <span className={styles.label}>{item.label}</span>
          </button>
        </li>
      )
    })}
  </ul>
)

export default Menu
export type { MenuProps, MenuItem }
