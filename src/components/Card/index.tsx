import React from 'react';
import styles from './styles/Card.module.scss';
import { CardProps, CardVariant } from './types';

/**
 * Componente Card para mostrar contenido en un contenedor con estilo de tarjeta.
 * Soporta diferentes variantes visuales y es completamente accesible.
 */
export const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  imageUrl,
  imageAlt = '',
  variant = CardVariant.ELEVATED,
  className = '',
  onClick,
}) => {
  const isClickable = !!onClick;
  
  const cardClasses = [
    styles.card,
    styles[`card--${variant}`],
    isClickable ? styles['card--clickable'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isClickable) {
      e.preventDefault();
      onClick?.();
    }
  };
  
  const handleClick = (e: React.MouseEvent) => {
    if (isClickable) {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div
      className={cardClasses}
      style={isClickable ? { cursor: 'pointer' } : undefined}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={isClickable ? 'button' : 'article'}
      tabIndex={isClickable ? 0 : -1}
      aria-label={isClickable ? title || 'Tarjeta interactiva' : undefined}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt}
          className={styles.card__image}
          loading="lazy"
        />
      )}
      <div className={styles.card__content}>
        {title && <h3 className={styles.card__title}>{title}</h3>}
        {subtitle && <p className={styles.card__subtitle}>{subtitle}</p>}
        <div className={styles.card__body}>{children}</div>
      </div>
    </div>
  );
};

export { CardVariant } from './types';
