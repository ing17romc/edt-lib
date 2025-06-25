/**
 * Tipos para el componente NavBar (Layout).
 */

export interface LayoutNavBarOption {
  path: string;
  name: string;
}

export interface LayoutNavBarProps {
  /** Opciones del menú izquierdo */
  leftOptions: LayoutNavBarOption[];
  /** Opciones del menú derecho */
  rightOptions: LayoutNavBarOption[];
  /** Ruta actual */
  currentPath: string;
  /** Función para manejar cambio de ruta */
  getCurrentPath: (path: string) => void;
}
