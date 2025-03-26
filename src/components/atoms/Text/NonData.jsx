import React from 'react';

import { StyledNonData } from './Text.styled';

export default function NonData({ children, ...props }) {
  return <StyledNonData {...props}>{children}</StyledNonData>;
}
