import styled from '@emotion/styled';

import { pxToRem } from '@utils/pxToRem';

export const StampItemWrapper = styled('div')`
  margin-top: ${({ top }) => pxToRem(top)};
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
export const StampItem = styled('div')`
  text-align: center;
  flex: 0 0 calc(20% - 1.6rem);

  @media (max-width: 430px) {
    flex: 0 0 calc(33.3334% - 1.4rem);
  }
`;
export const StampFigure = styled('figure')`
  display: block;
  margin: 0 auto;
  width: 8.6rem;
  height: 8.6rem;
  background-color: #f5f5f6;
  border-radius: 1rem;
  padding: 1rem;
  background-position: center;
  background-size: 70%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
`;
