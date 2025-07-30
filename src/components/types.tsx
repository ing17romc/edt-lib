/**
 * Enums centralizados para tamaños y variantes de componentes.
 * Estos enums deben ser utilizados por los componentes Button, IconButton y CheckButton
 * para mantener consistencia en toda la aplicación.
 */

/**
 * Tamaños estándar para componentes de interfaz de usuario.
 */
export enum ComponentSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

/**
 * Variantes de estilo estándar para componentes de interfaz de usuario.
 */
export enum ComponentVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
}
