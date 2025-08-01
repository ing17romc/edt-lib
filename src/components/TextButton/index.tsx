import React from 'react';
import Button from '../Button';
import { TextButtonProps } from './types';
import styles from './styles/TextButton.module.scss';
import { ComponentSize, ComponentVariant } from '../types';
  
/**
 * Componente de botón de texto que extiende la funcionalidad del componente Button.
 * Diseñado para acciones secundarias o menos prominentes que los botones regulares.
 */
const TextButton: React.FC<TextButtonProps> = ({
  children,
  className = '',
  size = ComponentSize.MEDIUM,
  color = 'primary',
  underline = 'hover',
  disabled = false,
  loading = false,
  fullWidth = false,
  ...rest
}) => {
  const buttonClasses = [
    styles.textButton,
    styles[`size-${size}`],
    styles[`color-${color}`],
    styles[`underline-${underline}`],
    disabled ? styles.disabled : '',
    loading ? styles.loading : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ].filter(Boolean).join(' ');

  // Estilos en línea para sobrescribir cualquier estilo que pueda estar causando problemas
  const buttonStyle: React.CSSProperties = {
    // Forzar color transparente cuando está cargando
    ...(loading && { color: 'transparent' }),
    // Forzar ancho completo cuando fullWidth es true
    ...(fullWidth && { width: '100%' })
  };

  return (
    <Button
      className={buttonClasses}
      style={buttonStyle}
      disabled={disabled || loading}
      variant={ComponentVariant.PRIMARY}
      size={size as ComponentSize}
      fullWidth={fullWidth}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default TextButton;
