/**
 * Tipos para el componente SideBar.
 */

export interface SideBarOption {
  path: string;
  name: string;
  icon: string;
}

export interface SideBarProps {
  /** Opciones del menú */
  options: SideBarOption[];
  /** Función para manejar cambio de ruta */
  getCurrentPath: (path: string) => void;
}
