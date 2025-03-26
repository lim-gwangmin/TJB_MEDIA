import React from 'react';

import { TextPoint } from '@components/atoms/Text';
import { Title } from '@components/atoms/Title';

import { SignStepTitlePotintStyle, SignStepTitleStyle } from './Title.styled';

export default function SignStepTitle({ step = 1, children }) {
  return (
    <div>
      <TextPoint style={SignStepTitlePotintStyle}>STEP.{step}</TextPoint>
      <Title style={SignStepTitleStyle}>{children}</Title>
    </div>
  );
}
