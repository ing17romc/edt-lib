import React from 'react';
import CheckButton from '../index';

// Mock básico
interface CheckButtonProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const DefaultCheckButton = (props: CheckButtonProps) => (
  <CheckButton label="Checkbox de ejemplo" {...props} />
);

// Mock con estado controlado
export const ControlledCheckButton = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <CheckButton
      label="Checkbox controlado"
      checked={checked}
      onChange={setChecked}
    />
  );
};

// Mock deshabilitado
export const DisabledCheckButton = (props: CheckButtonProps) => (
  <CheckButton label="Checkbox deshabilitado" disabled {...props} />
);

// Mock con tamaño grande
export const LargeCheckButton = (props: CheckButtonProps) => (
  <CheckButton label="Checkbox grande" className="check-button--large" {...props} />
);

// Mock con tamaño pequeño
export const SmallCheckButton = (props: CheckButtonProps) => (
  <CheckButton label="Checkbox pequeño" className="check-button--small" {...props} />
);
