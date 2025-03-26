import React, { useState } from 'react';

import { TextInputMobileCarrier } from '@components/atoms/Input';
import { LabeledSelectBox } from '@components/atoms/SelectBox';

import { StyledCustomMobileCarrier } from './MobileCarrier.styled';

export default function MobileCarrierSecondary({}) {
  const [error, setError] = useState(false);
  return (
    <StyledCustomMobileCarrier error={error}>
      <LabeledSelectBox />
      <TextInputMobileCarrier errorEvent={setError} />
    </StyledCustomMobileCarrier>
  );
}
