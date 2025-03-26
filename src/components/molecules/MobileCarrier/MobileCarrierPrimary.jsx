import React, { useState } from 'react';

import { CARRIER_OPTIONS } from '@constant';

import { BasicTextInput } from '@components/atoms/Input';
import { BasicSelectBox } from '@components/atoms/SelectBox';

import { StyledMobileCarrierPrimary } from './MobileCarrier.styled';

export default function MobileCarrierPrimary({}) {
  const [error, setError] = useState(false);
  return (
    <StyledMobileCarrierPrimary error={error}>
      <BasicSelectBox
        name={telName}
        value={CARRIER_OPTIONS[0].value}
        options={CARRIER_OPTIONS}
        errorEvent={setError}
      />
      <BasicTextInput name={phoneName} errorEvent={setError} />
    </StyledMobileCarrierPrimary>
  );
}
