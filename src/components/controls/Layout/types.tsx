/**
 * Tipos para el componente Layout principal.
 */

export interface LayoutMenuOption {
  path: string;
  name: string;
  icon: string;
}

export interface LayoutProps {
  /** Opciones del menú izquierdo */
  leftOptions: LayoutMenuOption[];
  /** Opciones del menú derecho */
  rightOptions: LayoutMenuOption[];
  /** Ruta actual activa */
  currentPath: string;
  /** Contenido del footer */
  footer: React.ReactNode;
  /** Contenido principal */
  children: React.ReactNode;
  /** Función para manejar cambio de ruta */
  getCurrentPath: (path: string) => void;
}
