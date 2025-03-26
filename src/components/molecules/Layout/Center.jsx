import React from 'react';

import { Article } from '@components/atoms/Layout';

import { ArticleStyle, StyledCenter } from './Layout.styled';

// section
export default function Center({
  bg = 'inherit',
  paddingTop = 20,
  paddingBt = 20,
  maxWidth = 1024,
  gap = 20,
  children,
  ...props
}) {
  return (
    <StyledCenter bg={bg} paddingTop={paddingTop} paddingBt={paddingBt} {...props}>
      <Article maxWidth={maxWidth} style={ArticleStyle} gap={gap}>
        {children}
      </Article>
    </StyledCenter>
  );
}
