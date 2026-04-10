import React, { useState } from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/Tooltip.module.scss'
import { TooltipProps } from './types'

/**
 * Tooltip component that displays additional information when hovering over an element.
 *
 * @param content - Content to display inside the tooltip
 * @param placement - Tooltip position relative to the child element
 * @param disabled - Whether the tooltip is disabled
 * @param children - Element that activates the tooltip
 */
const Tooltip = ({
  content,
  placement = 'top',
  disabled = false,
  children,
  className,
  ...rest
}: TooltipProps) => {
  const [visible, setVisible] = useState(false)

  if (disabled) {
    return <>{children}</>
  }

  return (
    <div
      className={classNames(styles.wrapper, className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      {...rest}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={classNames(
            styles.tooltip,
            styles[`tooltip--${placement}`]
          )}
        >
          {content}
          <span className={styles.arrow} />
        </div>
      )}
    </div>
  )
}

export default Tooltip
export type { TooltipProps }
