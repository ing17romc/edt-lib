import React, { useState, useRef, useEffect, isValidElement, cloneElement } from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/FloatingMenu.module.scss'
import { FloatingMenuProps, FloatingMenuItem } from './types'

/**
 * Componente FloatingMenu que muestra un menú desplegable sobre un elemento trigger.
 *
 * @param trigger - Elemento que abre/cierra el menú
 * @param items - Elementos del menú
 * @param placement - Posición del menú respecto al trigger
 * @param onSelect - Callback al seleccionar un elemento
 * @param disabled - Si el menú está deshabilitado
 */
const FloatingMenu = ({
  trigger,
  items,
  placement = 'bottom-start',
  onSelect,
  disabled = false,
  className,
  ...rest
}: FloatingMenuProps) => {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (key: string) => {
    onSelect?.(key)
    setOpen(false)
  }

  const handleOpen = () => {
    if (!disabled) setOpen((v) => !v)
  }

  const enhancedTrigger = isValidElement(trigger)
    ? cloneElement(trigger as React.ReactElement<React.DOMAttributes<HTMLElement>>, {
        onClick: handleOpen,
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            handleOpen()
          }
        },
      })
    : trigger

  return (
    <div
      ref={containerRef}
      className={classNames(styles.floatingMenu, className)}
      {...rest}
    >
      <div
        className={styles.trigger}
      >
        {enhancedTrigger}
      </div>
      {open && (
        <ul
          role="menu"
          className={classNames(
            styles.dropdown,
            styles[`dropdown--${placement}`]
          )}
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
                    item.disabled && styles['item--disabled']
                  )}
                  onClick={() => !item.disabled && handleSelect(item.key)}
                >
                  {item.icon && <span className={styles.icon}>{item.icon}</span>}
                  <span>{item.label}</span>
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default FloatingMenu
export type { FloatingMenuProps, FloatingMenuItem }
