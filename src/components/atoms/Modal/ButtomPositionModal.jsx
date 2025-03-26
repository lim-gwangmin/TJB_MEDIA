import React from 'react';

import { StyledBottomModalContainer, StyledModal, StyledModalBody } from './Modal.styled';

export default function ButtomPositionModal({
  isOpen = false,
  title = '',
  mode = 'center',
  max = 600,
  children,
  ...props
}) {
  return (
    <StyledModal isOpen={isOpen} style={{ flexFlow: 'column', justifyContent: 'end' }}>
      <StyledBottomModalContainer isOpen={isOpen} max={max} mode={mode} {...props}>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledBottomModalContainer>
    </StyledModal>
  );
}
