import React from 'react';

import { Article } from '@components/atoms/Layout';

import { StyledSectionContainer } from './Layout.styled';

// section
export default function SectionContainer({
  bg = 'inherit',
  paddingTop = 20,
  paddingBt = 20,
  maxWidth = 1024,
  children,
  ...props
}) {
  return (
    <StyledSectionContainer bg={bg} paddingTop={paddingTop} paddingBt={paddingBt} {...props}>
      <Article maxWidth={maxWidth}>{children}</Article>
    </StyledSectionContainer>
  );
}
