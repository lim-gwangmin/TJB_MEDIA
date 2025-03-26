import React from 'react';

import { StyledModal, StyledModalBody, StyledModalContainer } from './Modal.styled';

export default function Alert({
  isOpen = false,
  title = '',
  mode = 'center',
  max = 400,
  children,
  ...props
}) {
  return (
    <StyledModal isOpen={isOpen}>
      <StyledModalContainer max={max} mode={mode} {...props}>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModalContainer>
    </StyledModal>
  );
}
