import React, { forwardRef } from 'react';
import { ControlStatus } from '../../utils/constant';
import { TextAreaProps } from './types';

/**
 * Componente TextArea que proporciona un área de texto con múltiples opciones de configuración.
 * Permite crear áreas de texto personalizadas con títulos, placeholders y diferentes estados.
 * 
 * @param {TextAreaProps} props - Propiedades del componente
 * @param {string} props.id - ID único para el textarea (requerido)
 * @param {string} [props.titleTop] - Título superior del área de texto
 * @param {string} [props.placeholder] - Texto de placeholder
 * @param {string} [props.titleBottom] - Título inferior del área de texto
 * @param {string} props.value - Valor actual del textarea
 * @param {boolean} [props.required=false] - Si el área de texto es requerida
 * @param {boolean} [props.disabled=false] - Si el área de texto está deshabilitada
 * @param {boolean} [props.readOnly=false] - Si el área de texto es de solo lectura
 * @param {boolean} [props.noPaste=false] - Si se permite pegar
 * @param {boolean} [props.noCopy=false] - Si se permite copiar
 * @param {number} [props.size=200] - Número máximo de caracteres
 * @param {number} [props.rows=4] - Número de filas del textarea
 * @param {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [props.eventChange] - Evento de cambio
 * @param {(e: React.FocusEvent<HTMLTextAreaElement>) => void} [props.eventFocus] - Evento de enfoque
 * @param {(e: React.FocusEvent<HTMLTextAreaElement>) => void} [props.eventBlur] - Evento de pérdida de enfoque
 * @param {(e: React.KeyboardEvent<HTMLTextAreaElement>) => void} [props.eventKeyDown] - Evento de tecla presionada
 * @param {Ref<HTMLTextAreaElement>} [props.ref] - Referencia al elemento textarea
 * @returns {JSX.Element} Elemento textarea con configuración personalizada
 */

const TextArea: React.FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      id,
      titleTop,
      placeholder,
      titleBottom,
      value,
      required = false,
      disabled = false,
      readOnly = false,
      noPaste = false,
      noCopy = false,
      size = 200,
      rows = 4,
      eventChange,
      eventFocus,
      eventBlur,
      eventKeyDown,
      ...props
    },
    ref
  ) => {
    const handleOnPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
      if (noPaste) {
        e.preventDefault();
      }
    };

    const handleOnCopy = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
      if (noCopy) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      } else if (eventKeyDown && !disabled && !readOnly) {
        eventKeyDown(e);
      }
    };

    return (
      <div className="body-textarea">
        <div className="grid-primary">
          <div className="start-1 size-12">
            {titleTop && <h3 className="title-textarea">{titleTop}</h3>}
          </div>
          <div className="start-1 size-12 padding-v-10">
            <textarea
              id={id}
              name={id}
              value={value}
              placeholder={placeholder}
              className={disabled ? ControlStatus.DISABLED : readOnly ? ControlStatus.READ_ONLY : ''}
              disabled={disabled}
              readOnly={readOnly}
              onChange={(e) => {
                if (eventChange && !disabled) {
                  eventChange(e);
                }
              }}
              onFocus={(e) => {
                if (eventFocus && !disabled && !readOnly) {
                  eventFocus(e);
                }
              }}
              onBlur={(e) => {
                if (eventBlur && !disabled && !readOnly) {
                  eventBlur(e);
                }
              }}
              onKeyDown={handleKeyDown}
              ref={ref}
              onPaste={handleOnPaste}
              onCopy={handleOnCopy}
              rows={rows}
              maxLength={size}
              autoComplete="off"
              required={required}
              aria-label={titleTop || placeholder}
              aria-required={required}
              aria-disabled={disabled}
              aria-readonly={readOnly}
              {...props}
            />
          </div>
          {titleBottom && (
            <div className="start-1 size-12 padding-v-10">
              <h3 className="title-textarea">{titleBottom}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
