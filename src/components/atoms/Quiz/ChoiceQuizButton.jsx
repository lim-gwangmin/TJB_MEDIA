import React from 'react';

import quiz_default from '@assets/icons/icon_quiz_default.svg';
import quiz_true from '@assets/icons/icon_quiz_true.svg';

import { StyledChoiceOptionButton, StyledChoiceOtionImage } from './ChoiceQuizButton.styled';

export default function ChoiceQuizButton({ answer, option, onClick, isSelected, disabled }) {
  return (
    <StyledChoiceOptionButton
      onClick={() => onClick(answer)}
      isSelected={isSelected}
      disabled={disabled}
    >
      {option}
      <StyledChoiceOtionImage src={isSelected ? quiz_true : quiz_default} alt="check" />
    </StyledChoiceOptionButton>
  );
}
