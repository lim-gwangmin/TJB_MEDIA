import React from 'react';

import { Box } from '@components/atoms/Box';
import { ProgressCounter } from '@components/atoms/Counter';
import { CircularGauge } from '@components/atoms/Gauge';
import { Title } from '@components/atoms/Title';
import { SpaceBetweenTitle } from '@components/molecules/Title';

import { calculatePercentage } from '@utils/calculate';

import { CardCenterWrapper } from './Card.styled';

export default function CorrectAnswersCard({ solveRightNo, solveNo }) {
  const gaueValue = calculatePercentage(solveRightNo, solveNo);
  return (
    <Box shadow={true}>
      <SpaceBetweenTitle icon={false}>
        <Title size={20}>정답문제</Title>
      </SpaceBetweenTitle>
      <CardCenterWrapper>
        <CircularGauge value={gaueValue} maxValue={100} strokeWidth={10} color="#ff5722" />
      </CardCenterWrapper>
      <ProgressCounter count={solveRightNo} total={solveNo} unit={'문제'} />
    </Box>
  );
}
