import React from 'react';

import { StyledQuizCountWrapper } from './QuizCount.styled';

export default function QuizCount({ currentPage = 0, totalPage = 0 }) {
  return (
    <StyledQuizCountWrapper>
      {currentPage}/{totalPage}
    </StyledQuizCountWrapper>
  );
}
