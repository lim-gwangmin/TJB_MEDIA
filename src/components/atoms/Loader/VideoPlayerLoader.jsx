import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

import { StyledVideoPlayerLoaderWrapper } from './Loader.styled';

export default function VideoPlayerLoader() {
  return (
    <StyledVideoPlayerLoaderWrapper>
      <ThreeCircles visible={true} color="#FF881B" ariaLabel="three-circles-loading" />
    </StyledVideoPlayerLoaderWrapper>
  );
}
