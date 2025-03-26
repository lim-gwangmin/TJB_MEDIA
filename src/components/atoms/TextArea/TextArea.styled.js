import styled from '@emotion/styled';

import { pxToRem } from '@utils/pxToRem';

export const StyledTextArea = styled('textarea')`
  font-size: ${({ size }) => pxToRem(size)};
  height: 30rem;
  color: #111111;
  width: 100%;
  max-width: 100%;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  background-color: #fff;
  border-width: 1px;
  border-style: solid;
  border-color: #dadada;
  &::placeholder {
    color: #d8d8d8;
  }
  &:read-only,
  &:disabled {
    background-color: #fafafa;
  }
`;
