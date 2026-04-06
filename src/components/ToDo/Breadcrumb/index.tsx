import React from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/Breadcrumb.module.scss'
import { BreadcrumbProps, BreadcrumbItem } from './types'

/**
 * Componente Breadcrumb que muestra la ruta de navegación jerárquica.
 *
 * @param items - Lista de elementos de la ruta
 * @param separator - Separador entre elementos
 * @param linkProps - Props adicionales para los anchors
 */
const Breadcrumb = ({
  items,
  separator = '/',
  linkProps,
  className,
}: BreadcrumbProps) => (
  <nav aria-label="breadcrumb" className={classNames(styles.breadcrumb, className)}>
    <ol className={styles.list}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <li key={`${item.label}-${index}`} className={styles.item}>
            {isLast || !item.href ? (
              <span
                className={classNames(styles.text, isLast && styles['text--active'])}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            ) : (
              <a
                href={item.href}
                className={styles.link}
                {...linkProps}
              >
                {item.label}
              </a>
            )}
            {!isLast && (
              <span className={styles.separator} aria-hidden="true">
                {separator}
              </span>
            )}
          </li>
        )
      })}
    </ol>
  </nav>
)

export default Breadcrumb
export type { BreadcrumbProps, BreadcrumbItem }
