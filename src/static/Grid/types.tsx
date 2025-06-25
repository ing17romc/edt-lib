import React from 'react';

/**
 * Props for the Grid component.
 * 
 * @remarks
 * Currently, the Grid component doesn't accept any props, but this interface is defined
 * for future extensibility and to maintain consistency with the codebase.
 * 
 * @public
 */
export interface GridProps {
  /**
   * Optional custom class name for the grid container
   */
  className?: string;
  
  /**
   * Optional inline styles for the grid container
   */
  style?: React.CSSProperties;
}

/**
 * Type that represents the Grid component
 */
export type GridComponent = React.FC<GridProps>;
