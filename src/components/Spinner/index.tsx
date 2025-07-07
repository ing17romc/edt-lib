import React, { forwardRef } from 'react';
import classNames from '../../utils/classNames';
import { SpinnerProps, SpinnerSize, SpinnerVariant } from './types';
import styles from './styles/Spinner.module.scss';

/**
 * Componente Spinner que muestra un indicador de carga.
 * Proporciona diferentes estilos y tamaños para adaptarse a diferentes contextos.
 * 
 * @component
 * @example
 * // Uso básico
 * <Spinner />
 * 
 * // Con tamaño personalizado
 * <Spinner size="large" />
 * 
 * // Con variante de color
 * <Spinner variant="danger" />
 * 
 * // Modo pulso
 * <Spinner pulse />
 */
const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({
  size = SpinnerSize.MEDIUM,
  variant = SpinnerVariant.PRIMARY,
  pulse = false,
  className,
  'aria-label': ariaLabel = 'Cargando...',
  ...rest
}, ref) => {
  const spinnerClasses = classNames(
    styles.spinner,
    styles[`spinner--${size}`],
    styles[`spinner--${variant}`],
    { [styles['spinner--pulse']]: pulse },
    className
  );

  return (
    <div
      ref={ref}
      className={spinnerClasses}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
      {...rest}
    >
      <div className={styles.spinner__inner} aria-hidden="true" />
    </div>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
