import React from 'react';

import { CorrectAnswersCard, TotalStampsCard } from '@components/molecules/Card';

import { StyledCards } from './Home.styled';

export default function Cards({ solveRightNo = 0, solveNo = 0, stampNo = 0, allStampNo = 0 }) {
  return (
    <StyledCards>
      <CorrectAnswersCard solveRightNo={solveRightNo} solveNo={solveNo} />
      <TotalStampsCard stampNo={stampNo} allStampNo={allStampNo} />
    </StyledCards>
  );
}
