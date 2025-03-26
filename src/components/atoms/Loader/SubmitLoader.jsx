import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

import { StyledSpinnerWrapper, StyledSubmitLoader } from './Loader.styled';

export default function SubmitLoader() {
  return (
    <StyledSubmitLoader>
      <StyledSpinnerWrapper>
        <InfinitySpin color="#FF881B" />
      </StyledSpinnerWrapper>
    </StyledSubmitLoader>
  );
}
