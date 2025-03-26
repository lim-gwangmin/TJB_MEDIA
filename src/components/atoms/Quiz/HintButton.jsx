import React from 'react';

import hintImage from '@assets/images/hint_image.svg';

import { StyledHintButton } from './HintButton.styled';

export default function HintButton({ onClick }) {
  return (
    <StyledHintButton onClick={onClick}>
      <img src={hintImage} alt="힌트" />
    </StyledHintButton>
  );
}
