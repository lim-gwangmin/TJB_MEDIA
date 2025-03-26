import styled from '@emotion/styled';

import coinImage from '@assets/images/coin_image.svg';

import { pxToRem } from '@utils/pxToRem';

export const StyledCoin = styled('b')`
  margin-top: 2.4rem;
  position: relative;
  display: inline-block;
  font-size: ${({ fontSize }) => (fontSize ? pxToRem(fontSize) : '1.6rem')};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 800)};
  margin-top: ${({ top }) => (top ? pxToRem(top) : 0)};
  color: ${({ color }) => (color ? color : '#000')};
  padding-left: 3rem;
  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 2.3rem;
    height: 2.3rem;
    background: url(${coinImage}) center / contain no-repeat;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
