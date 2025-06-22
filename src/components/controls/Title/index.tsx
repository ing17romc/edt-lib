import React from 'react';

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({
  level = 1,
  className = '',
  style,
  children,
  ...rest
}) => {
  const HeadingTag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
