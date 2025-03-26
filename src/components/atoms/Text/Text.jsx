import React from 'react';

import { StyledText } from './Text.styled';

export default function Text({
  size = 16,
  weight = 400,
  color = '#000000',
  align = 'left',
  children,
  ...props
}) {
  return (
    <StyledText size={size} weight={weight} align={align} color={color} {...props}>
      {children}
    </StyledText>
  );
}
