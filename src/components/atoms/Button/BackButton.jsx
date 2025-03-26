import React from 'react';

import backImage from '@assets/icons/icon_arrow_back.svg';

import useCustomNavigate from '@hooks/useCustomNavigate';

import { StyledBackButton } from './Button.styled';

export default function BackButton({ backButton }) {
  const { goBack } = useCustomNavigate();
  if (!backButton) return null;
  return (
    <StyledBackButton type="button" onClick={goBack}>
      <img src={backImage} alt="" />
    </StyledBackButton>
  );
}
