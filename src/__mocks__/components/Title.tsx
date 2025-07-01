import React from 'react';

interface TitleProps {
  title?: string;
  children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ title, children }) => (
  <h1 data-testid="title">{children || title}</h1>
);

export { Title };
