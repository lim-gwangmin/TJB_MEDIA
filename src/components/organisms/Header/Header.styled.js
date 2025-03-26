import styled from '@emotion/styled';

export const StyledHeader = styled('header')`
  // position: fixed;
  position: relative;
  top: 0;
  width: 100%;
  height: 56px;
  background-color: ${({ bgColor }) => bgColor};
  border: 0;
  border-bottom-width: ${({ border }) => border}px;
  border-style: solid;
  border-color: #eaeaea;
  padding: 0 2rem;
`;
