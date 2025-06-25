// Tipos para el componente HomeV2

/**
 * Opción de menú lateral o superior.
 */
export interface Option {
  path: string;
  name: string;
  icon?: string;
}

/**
 * Props para el componente HomeV2.
 */
export interface HomeV2Props {
  leftOptions: Option[];
  rightOptions: Option[];
  sideOptions: Option[];
  getCurrentPath: (path: string) => void;
}
