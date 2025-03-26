import React from 'react';

import { StyledMain } from './Layout.styled';

// main
export default function Main({ bg = '#fff', mode = 'start', children, ...props }) {
  return (
    <StyledMain bg={bg} mode={mode} {...props}>
      {children}
    </StyledMain>
  );
}
