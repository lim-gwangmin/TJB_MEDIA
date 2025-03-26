import React from 'react';

import { StyledVisualBox } from './Box.styled';

export default function VisualBox({ image, children, ...props }) {
  return (
    <StyledVisualBox image={image} {...props}>
      {children}
    </StyledVisualBox>
  );
}
