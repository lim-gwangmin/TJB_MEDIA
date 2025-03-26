import React from 'react';

import { StyledTitle } from './Title.styled';

export default function Title({
  size = 24,
  weight = 500,
  color = '#000000',
  lineHeight = 1.3,
  children,
  ...props
}) {
  return (
    <StyledTitle size={size} weight={weight} color={color} lineHeight={lineHeight} {...props}>
      {children}
    </StyledTitle>
  );
}
