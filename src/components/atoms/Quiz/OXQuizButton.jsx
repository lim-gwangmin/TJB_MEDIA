import React from 'react';

import { StyledOXQuizButton } from './OXQuizButton.styled';

export default function OXQuizButton({
  answerType,
  isSelected,
  handleSelectAnswer,
  disabled,
  children,
}) {
  return (
    <StyledOXQuizButton
      type="button"
      answerType={answerType}
      isSelected={isSelected}
      disabled={disabled}
      onClick={handleSelectAnswer}
    >
      {children}
    </StyledOXQuizButton>
  );
}
