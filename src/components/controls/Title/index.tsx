import React from 'react';
import { TitleProps, TitleLevel, HeadingTag } from './types';

const Title: React.FC<TitleProps> = ({
  level = 1 as TitleLevel,
  className = '',
  style,
  children,
  ...rest
}) => {
  const HeadingTag = `h${level}` as HeadingTag;
  
  return (
    <div>
      {React.createElement(
        HeadingTag,
        {
          className: `title title--level-${level} ${className}`.trim(),
          style,
          ...rest
        },
        children
      )}
      <div className="line" />
    </div>
  );
};

export default Title;
