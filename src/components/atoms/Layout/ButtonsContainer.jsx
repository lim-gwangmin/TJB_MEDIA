import React from 'react';

import { StyledButtonsContainer } from './Layout.styled';

export default function ButtonsContainer({
  children,
  gap = 10,
  position = 'center',
  flow = 'wrap',
  ...props
}) {
  return (
    <StyledButtonsContainer gap={gap} position={position} flow={flow} {...props}>
      {children}
    </StyledButtonsContainer>
  );
}
