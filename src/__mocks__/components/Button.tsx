import React from 'react';

interface ButtonProps {
  title: string;
  type?: string;
  size?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onClick }) => (
  <button onClick={onClick} data-testid={`button-${title.toLowerCase()}`}>
    {title}
  </button>
);

export default Button;
