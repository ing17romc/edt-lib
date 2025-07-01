import React from 'react';

interface IconButtonProps {
  text: string;
  icon: string;
  id: string;
  size: string;
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ text, id, onClick }) => (
  <button onClick={onClick} data-testid={id}>
    {text}
  </button>
);

export default IconButton;
