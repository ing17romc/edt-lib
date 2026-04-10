import React from 'react';
import CheckButton from '../index';
import { CheckButtonProps } from '../types';
import { ComponentSize } from '../../types';

// Types for mocks
type MockCheckButtonProps = Omit<CheckButtonProps, 'onChange'> & {
  onChange?: (checked: boolean) => void;
};

// Default values for mocks
const defaultProps: MockCheckButtonProps = {
  label: 'Example option',
  checked: false,
  disabled: false,
};

// Basic mock
export const DefaultCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton {...defaultProps} {...props} />
);

// Mock with controlled state
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

// Disabled mock
export const DisabledCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton {...defaultProps} disabled={true} label="Disabled option" {...props} />
);

// Checked state mock
export const CheckedCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton {...defaultProps} checked={true} label="Selected option" {...props} />
);

// Large size mock
export const LargeCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton 
    {...defaultProps} 
    label="Large option" 
    size={ComponentSize.LARGE}
    {...props} 
  />
);

// Medium size mock
export const MediumCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton 
    {...defaultProps} 
    label="Medium option" 
    size={ComponentSize.MEDIUM}
    {...props} 
  />
);

// Small size mock
export const SmallCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton 
    {...defaultProps} 
    label="Small option" 
    size={ComponentSize.SMALL}
    {...props} 
  />
);

// Long label mock
export const LongLabelCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton 
    {...defaultProps} 
    label="This is a very long label that should be handled correctly with text overflowing into multiple lines if necessary" 
    {...props} 
  />
);

// Custom class mock
export const CustomClassCheckButton = (props: MockCheckButtonProps) => (
  <CheckButton 
    {...defaultProps} 
    label="With custom class" 
    className="custom-checkbox-class" 
    {...props} 
  />
);
