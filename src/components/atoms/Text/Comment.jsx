import React from 'react';

import styled from '@emotion/styled';

import { StyledComment } from './Text.styled';

export default function Comment({ top = 0, right = 0, bottom = 0, left = 0, children, ...props }) {
  return (
    <StyledComment top={top} right={right} bottom={bottom} left={left} {...props}>
      {children}
    </StyledComment>
  );
}
