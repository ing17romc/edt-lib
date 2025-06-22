import React from 'react';
import classNames from 'classnames';
import './Title.scss';

interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  style?: React.CSSProperties;
}

export const Title: React.FC<TitleProps> = ({
  children,
  level = 1,
  className,
  style,
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <Component
      className={classNames('title', `title--level-${level}`, className)}
      style={style}
    >
      {children}
    </Component>
  );
};
