import React, { forwardRef } from 'react';
import classNames from '../../utils/classNames';
import { SpinnerProps, SpinnerVariant } from './types';
import { ComponentSize } from '../types';
import styles from './styles/Spinner.module.scss';

/**
 * Spinner component that displays a loading indicator.
 * Provides different styles and sizes to adapt to different contexts.
 * 
 * @component
 * @example
 * // Basic usage
 * <Spinner />
 * 
 * // With custom size
 * <Spinner size="large" />
 * 
 * // With color variant
 * <Spinner variant="danger" />
 * 
 * // Modo pulso
 * <Spinner pulse />
 */
const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({
  size = ComponentSize.MEDIUM,
  variant = SpinnerVariant.PRIMARY,
  pulse = false,
  className,
  'aria-label': ariaLabel = 'Loading...',
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
