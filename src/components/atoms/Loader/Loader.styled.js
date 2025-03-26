import styled from '@emotion/styled';

export const StyledSubmitLoader = styled('div')`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 9999;
`;

export const StyledSpinnerWrapper = styled('div')`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledVideoPlayerLoaderWrapper = styled('div')`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
  height: 0;
  background-color: rgba(200, 200, 200, 0.3);
  > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  svg {
    width: 8rem;
    height: 8rem;
  }
`;
