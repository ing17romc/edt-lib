import React, { forwardRef } from 'react';
import { ControlStatus } from '../../utils/enums';
import { SelectorProps } from './types';

/**
 * Componente Selector que proporciona un menú desplegable con múltiples opciones de configuración.
 * Permite crear selectores personalizados con títulos y diferentes estados.
 * 
 * @param {SelectorProps} props - Propiedades del componente
 * @param {string} props.id - ID único para el select (requerido)
 * @param {string} [props.titleTop] - Título superior del selector
 * @param {string} [props.titleBottom] - Título inferior del selector
 * @param {string | number} props.value - Valor actual seleccionado
 * @param {boolean} [props.required=false] - Si el selector es requerido
 * @param {boolean} [props.disabled=false] - Si el selector está deshabilitado
 * @param {boolean} [props.readOnly=false] - Si el selector es de solo lectura
 * @param {(e: React.ChangeEvent<HTMLSelectElement>) => void} [props.eventChange] - Evento de cambio
 * @param {SelectorOption[]} [props.options=[]] - Opciones disponibles para el selector
 * @param {Ref<HTMLSelectElement>} [props.ref] - Referencia al elemento select
 * @returns {JSX.Element} Elemento select con opciones personalizadas
 */

const Selector: React.FC<SelectorProps> = forwardRef<HTMLSelectElement, SelectorProps>(
  (
    {
      id,
      titleTop,
      titleBottom,
      value,
      required = false,
      disabled = false,
      readOnly = false,
      eventChange,
      options = [],
      ...props
    },
    ref
  ) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (eventChange && !disabled) {
        eventChange(e);
      }
    };

    const getSelectStyle = (): ControlStatus => {
      if (disabled) {
        return ControlStatus.DISABLED;
      }
      if (readOnly) {
        return ControlStatus.READ_ONLY;
      }
      if (required && !value) {
        return ControlStatus.REQUIRED;
      }
      return '';
    };

    return (
      <div className="body-selector">
        <div className="grid-primary">
          <div className="start-1 size-12">
            {titleTop && <h3 className="title-selector">{titleTop}</h3>}
          </div>
          <div className="start-1 size-12 padding-v-10">
            <select
              id={id}
              name={id}
              value={value}
              onChange={handleOnChange}
              disabled={disabled || readOnly}
              required={required}
              className={getSelectStyle()}
              aria-label={titleTop || 'Selector'}
              aria-required={required}
              aria-disabled={disabled}
              aria-readonly={readOnly}
              ref={ref}
              {...props}
            >
              {options.map((option, index) => (
                <option
                  key={index}
                  value={option.value}
                  aria-label={option.label}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {titleBottom && (
            <div className="start-1 size-12 padding-v-10">
              <h3 className="title-selector">{titleBottom}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
);

Selector.displayName = 'Selector';

export default Selector;
