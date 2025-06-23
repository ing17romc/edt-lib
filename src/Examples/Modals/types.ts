// Tipos para el componente Modales

/**
 * Estado del componente Modales.
 */
export interface ModalesState {
  typeNotification: string;
  pdf: string;
  [key: string]: string | number | boolean | undefined;
}

/**
 * Props para el componente Modales.
 * Actualmente el componente no recibe props, pero se deja la interfaz para futura extensión.
 */
// No se requiere interfaz vacía para ModalesProps
