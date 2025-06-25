/**
 * Tipos para el componente LayoutV2.
 */

export interface LayoutV2SideOption {
  path: string;
  name: string;
  icon: string;
}

export interface LayoutV2NavOption {
  path: string;
  name: string;
  icon?: string;
}

export interface LayoutV2BreadcrumbOption {
  path: string;
  name: string;
}

export interface LayoutV2Props {
  /** Opciones del menú lateral */
  sideOptions: LayoutV2SideOption[];
  /** Opciones del menú de navegación izquierdo */
  leftOptions: LayoutV2NavOption[];
  /** Opciones del menú de navegación derecho */
  rightOptions: LayoutV2NavOption[];
  /** Contenido principal */
  children: React.ReactNode;
  /** Función para manejar cambio de ruta */
  getCurrentPath: (path: string) => void;
  /** Mostrar barra lateral */
  showSideBar: boolean;
  /** Opciones del breadcrumb (opcional) */
  breadcrumbOptions?: LayoutV2BreadcrumbOption[];
}
