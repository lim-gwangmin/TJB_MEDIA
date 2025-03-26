import styled from '@emotion/styled';

export const StyledPlayerContainer = styled('div')`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 비율 */
  height: 0;
  border-radius: 1rem;
  overflow: hidden;
  margin: 2.5rem auto 3rem;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
