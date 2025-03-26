import React from 'react';

import bee from '@assets/images/bee_image_x3.svg';

import { CommentLoader } from '@components/atoms/Loader';

import { StyledLoading, StyledLoadingImageWrapper, StyledLoadingWrapper } from './Loader.styled';

export default function Loading() {
  return (
    <StyledLoading>
      <StyledLoadingWrapper>
        <StyledLoadingImageWrapper>
          <CommentLoader />
        </StyledLoadingImageWrapper>
        <img src={bee} alt="벌 모양" style={{ width: '17rem' }} />
      </StyledLoadingWrapper>
    </StyledLoading>
  );
}
