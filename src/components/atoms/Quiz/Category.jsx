import React from 'react';

import { StyledBallon, StyledBallonWrapper } from './Category.styled';

export default function Category({ children }) {
  return (
    <StyledBallonWrapper>
      <StyledBallon>{children}</StyledBallon>
    </StyledBallonWrapper>
  );
}
