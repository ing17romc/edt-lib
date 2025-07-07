import React, { forwardRef } from 'react';
import classNames from '../../utils/classNames';
import { TitleProps, TitleSize, TitleVariant, TitleTag } from './types';
import styles from './styles/Title.module.scss';

const Title = forwardRef<HTMLHeadingElement, TitleProps>(({
  size = TitleSize.H1,
  variant = TitleVariant.DARK,
  children,
  className,
  bold = false,
  italic = false,
  underline = false,
  strikethrough = false,
  align = 'left',
  block = true,
  noWrap = false,
  id,
  onClick,
  style,
  ...rest
}, ref) => {
  const Tag = size as TitleTag;

  const titleClasses = classNames(
    styles.title,
    styles[`title--${size}`],
    styles[`title--${variant}`],
    {
      [styles[`title--bold`]]: bold,
      [styles[`title--italic`]]: italic,
      [styles[`title--underline`]]: underline,
      [styles[`title--strikethrough`]]: strikethrough,
      [styles[`title--${align}`]]: align,
      [styles[`title--block`]]: block,
      [styles[`title--noWrap`]]: noWrap,
      [styles[`title--clickable`]]: !!onClick,
    },
    className
  );

  const props = {
    ...rest,
    className: titleClasses,
    id,
    onClick,
    style,
  };

  // Crear el elemento con la ref correctamente tipada
  return React.createElement(Tag, {
    ...props,
    ref: ref as React.Ref<HTMLHeadingElement>,
  }, children);
});

Title.displayName = 'Title';

export { Title, TitleSize, TitleVariant };
export type { TitleProps };
