// Tipos para el componente Home

/**
 * Opción de menú lateral o superior.
 */
export interface Option {
  path: string;
  name: string;
  icon?: string;
}

/**
 * Props para el componente Home.
 */
export interface HomeProps {
  leftOptions: Option[];
  rightOptions: Option[];
  currentPath: string;
  getCurrentPath: (path: string) => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
