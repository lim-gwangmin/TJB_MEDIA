import React from 'react';

import { StyledArticle } from './Layout.styled';

// section
export default function Article({ maxWidth, children, gap = 0, ...props }) {
  return (
    <StyledArticle maxWidth={maxWidth} gap={gap} {...props}>
      {children}
    </StyledArticle>
  );
}
