import React from 'react';

import { StyledBox } from './Box.styled';

export default function Box({
  bgColor = '#fff',
  paddingTop = 15,
  paddingRt = 20,
  paddingBt = 15,
  paddingLf = 20,
  radius = 10,
  shadow = false,
  children,
  ...props
}) {
  return (
    <StyledBox
      bgColor={bgColor}
      paddingTop={paddingTop}
      paddingRt={paddingRt}
      paddingBt={paddingBt}
      paddingLf={paddingLf}
      radius={radius}
      shadow={shadow}
      {...props}
    >
      {children}
    </StyledBox>
  );
}
