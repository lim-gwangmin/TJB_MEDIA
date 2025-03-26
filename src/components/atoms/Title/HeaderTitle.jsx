import React from 'react';

import { StyledHeaderTitle } from './Title.styled';

export default function HeaderTitle({ titleAlign, children }) {
  return <StyledHeaderTitle titleAlign={titleAlign}>{children}</StyledHeaderTitle>;
}
