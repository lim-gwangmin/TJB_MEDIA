import React from 'react';

import { defaultTextPointColor, StyledTextPoint } from './Text.styled';

export default function TextPoint({
  color = defaultTextPointColor,
  size,
  weight,
  children,
  ...props
}) {
  return (
    <StyledTextPoint size={size} weight={weight} color={color} {...props}>
      {children}
    </StyledTextPoint>
  );
}
