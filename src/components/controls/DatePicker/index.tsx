import React, { useState, useEffect } from 'react';
import { DatePickerProps } from './types';

/**
 * Componente DatePicker que proporciona un selector de fecha personalizado.
 * Permite seleccionar día, mes y año de manera independiente.
 * 
 * @param {DatePickerProps} props - Propiedades del componente
 * @param {string} props.id - ID único para el componente
 * @param {string} props.title - Texto que se mostrará como etiqueta
 * @param {string} props.value - Valor inicial de la fecha (formato MM/DD/YYYY)
 * @param {(value: string) => void} props.eventChange - Función que se ejecuta al cambiar la fecha
 * @param {boolean} [props.disabled=false] - Si el componente está deshabilitado
 * @param {boolean} [props.readOnly=false] - Si el componente está en modo solo lectura
 * @param {boolean} [props.required=false] - Si el campo es requerido
 * @param {React.ForwardedRef} [props.ref] - Referencia al elemento select
 * @returns {JSX.Element} Elemento div con selectores para día, mes y año
 */

const DatePicker = ({
  id,
  title,
  value,
  eventChange,
  disabled = false,
  readOnly = false,
  required = false,
  ref
}: DatePickerProps) => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [days, setDays] = useState<number[]>([]);

  // Calcular el rango de años dinámicamente para incluir el año actual y el del valor inicial
  const currentYear = new Date().getFullYear();
  let initialYear = currentYear;
  if (value && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(value)) {
    const parts = value.split('/');
    initialYear = Math.max(currentYear, parseInt(parts[2], 10));
  }
  const years = Array.from({ length: 100 }, (_, i) => initialYear - 99 + i);

  useEffect(() => {
    if (value && Date.parse(value)) {
      const date = new Date(value);
      setDay(date.getDate().toString());
      setMonth((date.getMonth() + 1).toString()); // 1-based
      setYear(date.getFullYear().toString());
    }
  }, [value]);

  useEffect(() => {
    setDays(Array.from({ length: 31 }, (_, i) => i + 1));
  }, []);

  const dateformat = (_month: string, _day: string, _year: string): string =>
    `${_month}/${_day}/${_year}`; // ya está bien para 1-based

  const onChangeDay = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDay = e.target.value;
    setDay(() => {
      const updatedDay = newDay;
      if (month && updatedDay && year) {
        const strNewDate = dateformat(month, updatedDay, year);
        updateDate(strNewDate);
      }
      return updatedDay;
    });
  };

  const onChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = e.target.value;
    setMonth(() => {
      const updatedMonth = newMonth;
      if (updatedMonth && day && year) {
        const strNewDate = dateformat(updatedMonth, day, year);
        updateDate(strNewDate);
      }
      return updatedMonth;
    });
  };

  const onChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = e.target.value;
    setYear(() => {
      const updatedYear = newYear;
      if (month && day && updatedYear) {
        const strNewDate = dateformat(month, day, updatedYear);
        updateDate(strNewDate);
      }
      return updatedYear;
    });
  };

  const updateDate = (strNewDate: string) => {
    if (strNewDate !== value) {
      eventChange(strNewDate);
    }
  };

  const getStyle = () => {
    if (disabled) {
      return 'disabled';
    } else if (readOnly) {
      return 'read-only';
    } else if (required && (!value || value === '0/0/0')) {
      return 'required';
    }
    return '';
  };

  return (
    <div className={`date-picker ${getStyle()}`} role="group" aria-label={title}>
      <label htmlFor={id}>{title}</label>
      <div className="date-picker-container">
        <select
          id={id}
          name={id}
          value={month}
          onChange={onChangeMonth}
          disabled={disabled}
          required={!disabled && required}
          aria-label="Mes"
          ref={ref}
          aria-disabled={disabled}
          aria-readonly={readOnly}
        >
          <option value="">Mes</option>
          {[
            'Enero', 'Febrero', 'Marzo', 'Abril',
            'Mayo', 'Junio', 'Julio', 'Agosto',
            'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
          ].map((monthName, index) => (
            <option key={index} value={index.toString()}>
              {monthName}
            </option>
          ))}
        </select>

        <select
          value={day}
          onChange={onChangeDay}
          disabled={disabled}
          required={!disabled && required}
          aria-label="Día"
          aria-disabled={disabled}
          aria-readonly={readOnly}
        >
          <option value="">Día</option>
          {days.map((d) => (
            <option key={d} value={d.toString()}>
              {d}
            </option>
          ))}
        </select>

        <select
          value={year}
          onChange={onChangeYear}
          disabled={disabled}
          required={!disabled && required}
          aria-label="Año"
          aria-disabled={disabled}
          aria-readonly={readOnly}
        >
          <option value="">Año</option>
          {years.map((y) => (
            <option key={y} value={y.toString()}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DatePicker
