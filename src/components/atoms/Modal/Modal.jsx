import React from 'react';

import closeIcon from '@assets/icons/icon_close.svg';

import {
  StyledModal,
  StyledModalBody,
  StyledModalContainer,
  StyledModalHeader,
} from './Modal.styled';

export default function Modal({
  isOpen = false,
  isClose = null,
  title = '',
  max = 400,
  children,
  ...props
}) {
  return (
    <StyledModal isOpen={isOpen}>
      <StyledModalContainer max={max} {...props}>
        <StyledModalHeader>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 600 }}>{title}</h2>
          <button type="button" onClick={() => isClose && isClose(false)}>
            <img src={closeIcon} alt="모달 닫기" />
          </button>
        </StyledModalHeader>
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModalContainer>
    </StyledModal>
  );
}
