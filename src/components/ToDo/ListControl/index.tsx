import React from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/ListControl.module.scss'
import { ListControlProps, ListControlItem } from './types'

/**
 * Componente ListControl que muestra una lista seleccionable de elementos.
 *
 * @param items - Elementos de la lista
 * @param onSelect - Callback al seleccionar un elemento
 * @param multiSelect - Si permite selección múltiple
 */
const ListControl = ({
  items,
  onSelect,
  multiSelect = false,
  className,
  ...rest
}: ListControlProps) => (
  <ul
    role={multiSelect ? 'listbox' : 'listbox'}
    aria-multiselectable={multiSelect}
    className={classNames(styles.listControl, className)}
    {...rest}
  >
    {items.map((item) => (
      <li
        key={item.key}
        role="option"
        aria-selected={item.selected ?? false}
        aria-disabled={item.disabled}
        className={classNames(
          styles.item,
          item.selected && styles['item--selected'],
          item.disabled && styles['item--disabled']
        )}
        onClick={() => !item.disabled && onSelect?.(item.key)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (!item.disabled) { onSelect?.(item.key); } } }}
      >
        <span className={styles.label}>{item.label}</span>
        {item.description && (
          <span className={styles.description}>{item.description}</span>
        )}
      </li>
    ))}
  </ul>
)

export default ListControl
export type { ListControlProps, ListControlItem }
