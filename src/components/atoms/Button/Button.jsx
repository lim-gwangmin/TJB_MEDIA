import React from 'react';

import { StyledBasicButton } from './Button.styled';

export default function Button({
  type = 'button',
  text,
  width,
  height = 60,
  textAlign = 'center',
  size = 16,
  theme = 'default',
  disabled = false,
  children,
  ...props
}) {
  return (
    <StyledBasicButton
      type={type}
      theme={theme}
      size={size}
      width={width}
      height={height}
      textAlign={textAlign}
      disabled={disabled}
      {...props}
    >
      {text ?? children}
    </StyledBasicButton>
  );
}
