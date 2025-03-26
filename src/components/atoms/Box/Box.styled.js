import styled from '@emotion/styled';

import { pxToRem } from '@utils/pxToRem';

export const StyledBox = styled('div')`
  padding-top: ${({ paddingTop }) => pxToRem(paddingTop)};
  padding-right: ${({ paddingRt }) => pxToRem(paddingRt)};
  padding-bottom: ${({ paddingBt }) => pxToRem(paddingBt)};
  padding-left: ${({ paddingLf }) => pxToRem(paddingLf)};
  background-color: ${({ bgColor }) => bgColor};
  border-radius: ${({ radius }) => pxToRem(radius)};
  ${({ shadow }) => shadow && `box-shadow: 0px 0px 10px 3px rgba(0,0,0,0.05)`};
`;

export const StyledVisualBox = styled('div')`
  padding: 2.2rem 10rem 2.2rem 1.6rem;
  border-radius: 0.5rem;
  background-color: #ffedf0;
  background-image: url(${({ image }) => image});
  background-position: right 2rem center;
  background-repeat: no-repeat;
  background-size: auto;
  font-size: 1.6rem;
  line-height: 1.5;
`;
