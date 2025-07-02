import React from 'react';
import CheckButton from '../index';
import { CheckButtonProps } from '../types';

// Tipos para los mocks
type MockCheckButtonProps = Omit<CheckButtonProps, 'onChange'> & {
  onChange?: (checked: boolean) => void;
};

// Valores por defecto para los mocks
const defaultProps: MockCheckButtonProps = {
  label: 'Opción de ejemplo',
  checked: false,
  disabled: false,
};

// Mock básico
export const DefaultCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton {...defaultProps} {...props} />
);

// Mock con estado controlado
export const ControlledCheckButton = (props: MockCheckButtonProps) => {
  const [checked, setChecked] = React.useState(defaultProps.checked);
  return (
    <CheckButton
      {...defaultProps}
      {...props}
      checked={checked}
      onChange={(isChecked: boolean) => {
        setChecked(isChecked);
        props.onChange?.(isChecked);
      }}
    />
  );
};

// Mock deshabilitado
export const DisabledCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton {...defaultProps} disabled={true} label="Opción deshabilitada" {...props} />
);

// Mock con estado marcado
export const CheckedCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton {...defaultProps} checked={true} label="Opción seleccionada" {...props} />
);

// Mock con tamaño grande
export const LargeCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton 
    {...defaultProps} 
    label="Opción grande" 
    className="check-button--large" 
    {...props} 
  />
);

// Mock con tamaño pequeño
export const SmallCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton 
    {...defaultProps} 
    label="Opción pequeña" 
    className="check-button--small" 
    {...props} 
  />
);

// Mock con etiqueta larga
export const LongLabelCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton 
    {...defaultProps} 
    label="Esta es una etiqueta muy larga que debería manejarse correctamente con el texto que se desborda en múltiples líneas si es necesario" 
    {...props} 
  />
);

// Mock con clase personalizada
export const CustomClassCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton 
    {...defaultProps} 
    label="Con clase personalizada" 
    className="custom-checkbox-class" 
    {...props} 
  />
);
