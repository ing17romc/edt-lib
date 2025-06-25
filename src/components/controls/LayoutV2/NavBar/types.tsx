/**
 * Tipos para el componente NavBar.
 */

export interface NavBarOption {
  path: string;
  name: string;
  icon?: string;
}

export interface NavBarProps {
  /** Opciones del menú izquierdo */
  leftOptions: NavBarOption[];
  /** Opciones del menú derecho */
  rightOptions: NavBarOption[];
  /** Función para manejar cambio de ruta */
  getCurrentPath: (path: string) => void;
}
