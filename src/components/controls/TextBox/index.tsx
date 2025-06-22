import React, { forwardRef, Ref } from 'react';
import { STYLE_STATUS_CONTROL } from '../../utils/constant';
import { TextBoxProps } from './types';


/**
 * Componente TextBox que proporciona un campo de entrada de texto con múltiples opciones de configuración.
 * Permite crear campos de texto personalizados con títulos, placeholders y diferentes estados.
 * 
 * @param {TextBoxProps} props - Propiedades del componente
 * @param {string} props.id - ID único para el input (requerido)
 * @param {string} [props.titleTop] - Título superior del campo
 * @param {string} [props.placeholder] - Texto de placeholder
 * @param {string} [props.titleBottom] - Título inferior del campo
 * @param {string} props.value - Valor actual del input
 * @param {boolean} [props.required=false] - Si el campo es requerido
 * @param {boolean} [props.isPassword=false] - Si el campo es de tipo contraseña
 * @param {boolean} [props.disabled=false] - Si el campo está deshabilitado
 * @param {boolean} [props.readOnly=false] - Si el campo es de solo lectura
 * @param {boolean} [props.noPaste=false] - Si se permite pegar
 * @param {boolean} [props.noCopy=false] - Si se permite copiar
 * @param {number} [props.size=200] - Ancho del input en píxeles
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} [props.eventChange] - Evento de cambio
 * @param {(e: React.FocusEvent<HTMLInputElement>) => void} [props.eventFocus] - Evento de enfoque
 * @param {(e: React.FocusEvent<HTMLInputElement>) => void} [props.eventBlur] - Evento de pérdida de enfoque
 * @param {(e: React.KeyboardEvent<HTMLInputElement>) => void} [props.eventKeyDown] - Evento de tecla presionada
 * @param {Ref<HTMLInputElement>} [props.ref] - Referencia al elemento input
 * @returns {JSX.Element} Elemento input con configuración personalizada
 */

const TextBox: React.FC<TextBoxProps> = forwardRef<HTMLInputElement, TextBoxProps>(
  (
    {
      id,
      titleTop,
      placeholder,
      titleBottom,
      value,
      required = false,
      isPassword = false,
      disabled = false,
      readOnly = false,
      noPaste = false,
      noCopy = false,
      size = 200,
      eventChange,
      eventFocus,
      eventBlur,
      eventKeyDown,
      ...props
    },
    ref
  ) => {
    const handleOnPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
      if (noPaste) {
        e.preventDefault();
      }
    };

    const handleOnCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
      if (noCopy) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
      } else if (eventKeyDown && !disabled && !readOnly) {
        eventKeyDown(e);
      }
    };

    return (
      <div className="body-textbox">
        <div className="grid-primary">
          <div className="start-1 size-12">
            {titleTop && <h3 className="title-textbox">{titleTop}</h3>}
          </div>
          <div className="start-1 size-12 padding-v-10">
            <input
              id={id}
              type={isPassword ? 'password' : 'text'}
              placeholder={placeholder}
              value={value}
              required={required}
              className={disabled ? 'DISABLED' : readOnly ? 'READ_ONLY' : ''}
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
              style={{ width: `${size}px` }}
              aria-label={titleTop || placeholder}
              aria-required={required}
              aria-disabled={disabled}
              aria-readonly={readOnly}
              {...props}
            />
          </div>
          {titleBottom && (
            <div className="start-1 size-12 padding-v-10">
              <h3 className="title-textbox">{titleBottom}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
);

TextBox.displayName = 'TextBox';


export default TextBox;
