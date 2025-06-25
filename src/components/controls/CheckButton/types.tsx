import { ForwardedRef } from 'react';

export interface CheckButtonProps {
  id: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  checked?: boolean;
  eventChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ref?: ForwardedRef<HTMLInputElement>;
}

export type CheckButtonComponent = React.FC<CheckButtonProps>;

export type { CheckButtonProps, CheckButtonComponent };
