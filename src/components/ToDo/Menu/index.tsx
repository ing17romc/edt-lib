import React from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/Menu.module.scss'
import { MenuProps, MenuItem } from './types'

/**
 * Componente Menu que muestra una lista de elementos de navegación o acciones.
 *
 * @param items - Elementos del menú
 * @param activeKey - Key del elemento activo
 * @param onSelect - Callback al seleccionar un elemento
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
