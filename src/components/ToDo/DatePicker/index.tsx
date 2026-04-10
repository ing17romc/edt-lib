import React, { useId, useRef, useState } from 'react'
import classNames from '../../../utils/classNames'
import styles from './styles/DatePicker.module.scss'
import { DatePickerProps } from './types'

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const toISO = (y: number, m: number, d: number) =>
  `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

const parseISO = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number)
  return { year: y, month: m - 1, day: d }
}

const formatDisplay = (iso: string) => {
  const { year, month, day } = parseISO(iso)
  return `${String(day).padStart(2, '0')}/${String(month + 1).padStart(2, '0')}/${year}`
}

const getDaysInMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0).getDate()

const getFirstDayOfWeek = (year: number, month: number) =>
  new Date(year, month, 1).getDay()

/**
 * DatePicker component — date selector without external dependencies.
 *
 * @param value - Selected date in ISO format (YYYY-MM-DD)
 * @param onChange - Callback with the selected date
 * @param min - Minimum date in ISO format
 * @param max - Maximum date in ISO format
 * @param placeholder - Help text
 * @param disabled - Whether the field is disabled
 * @param label - Field label
 */
const DatePicker = ({
  value,
  onChange,
  min,
  max,
  placeholder = 'DD/MM/YYYY',
  disabled = false,
  label,
  className,
  ...rest
}: DatePickerProps) => {
  const inputId = useId()
  const containerRef = useRef<HTMLDivElement>(null)

  const today = new Date()
  const initial = value ? parseISO(value) : { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() }

  const [open, setOpen] = useState(false)
  const [viewYear, setViewYear] = useState(initial.year)
  const [viewMonth, setViewMonth] = useState(initial.month)

  const handleDayClick = (day: number) => {
    const iso = toISO(viewYear, viewMonth, day)
    onChange?.(iso)
    setOpen(false)
  }

  const prevMonth = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1) }
    else setViewMonth((m) => m - 1)
  }

  const nextMonth = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1) }
    else setViewMonth((m) => m + 1)
  }

  const isDisabledDay = (day: number) => {
    const iso = toISO(viewYear, viewMonth, day)
    if (min && iso < min) return true
    if (max && iso > max) return true
    return false
  }

  const daysInMonth = getDaysInMonth(viewYear, viewMonth)
  const firstDay = getFirstDayOfWeek(viewYear, viewMonth)
  const blanks = Array.from({ length: firstDay }, (_, i) => i)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  return (
    <div
      ref={containerRef}
      className={classNames(styles.datePicker, className)}
      {...rest}
    >
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <button
        id={inputId}
        type="button"
        disabled={disabled}
        className={classNames(
          styles.input,
          disabled && styles['input--disabled']
        )}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => !disabled && setOpen((v) => !v)}
      >
        <span className={value ? styles.value : styles.placeholder}>
          {value ? formatDisplay(value) : placeholder}
        </span>
        <span className={styles.calendarIcon} aria-hidden="true">📅</span>
      </button>

      {open && (
        <div role="dialog" aria-label="Date picker" className={styles.calendar}>
          <div className={styles.calendarHeader}>
            <button
              type="button"
              aria-label="Previous month"
              className={styles.navButton}
              onClick={prevMonth}
            >
              ‹
            </button>
            <span className={styles.monthYear}>
              {MONTHS[viewMonth]} {viewYear}
            </span>
            <button
              type="button"
              aria-label="Next month"
              className={styles.navButton}
              onClick={nextMonth}
            >
              ›
            </button>
          </div>

          <div className={styles.grid}>
            {DAYS.map((d) => (
              <span key={d} className={styles.dayName}>{d}</span>
            ))}
            {blanks.map((b) => (
              <span key={`blank-${b}`} />
            ))}
            {days.map((day) => {
              const iso = toISO(viewYear, viewMonth, day)
              const isSelected = value === iso
              const isToday = iso === toISO(today.getFullYear(), today.getMonth(), today.getDate())
              const disabled = isDisabledDay(day)
              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled}
                  aria-label={iso}
                  aria-pressed={isSelected}
                  className={classNames(
                    styles.day,
                    isSelected && styles['day--selected'],
                    isToday && !isSelected && styles['day--today'],
                    disabled && styles['day--disabled']
                  )}
                  onClick={() => handleDayClick(day)}
                >
                  {day}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default DatePicker
export type { DatePickerProps }
