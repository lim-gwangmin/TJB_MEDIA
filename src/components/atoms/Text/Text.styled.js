import styled from '@emotion/styled';

import theme from '@styles/theme';

import { pxToRem } from '@utils/pxToRem';

export const defaultTextPointColor = theme.color.primary[400];

export const StyledComment = styled('p')`
  font-size: 1.6rem;
  color: #9b9798;
  line-height: 1.35;
  margin-top: ${({ top }) => pxToRem(top)};
  margin-right: ${({ right }) => pxToRem(right)};
  margin-bottom: ${({ bottom }) => pxToRem(bottom)};
  margin-left: ${({ left }) => pxToRem(left)};
`;

export const StyledText = styled('p')`
  font-size: ${({ size }) => pxToRem(size)};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
`;

export const StyledTextPoint = styled('span')`
  color: ${({ color }) => color};
  font-size: ${({ size }) => (size ? pxToRem(size) : '1.6rem')};
  font-weight: ${({ weight }) => (weight ? weight : 400)};
`;

export const StyledNonData = styled('div')`
  text-align: center;
  padding: 25% 1rem;
  color: #878787;
`;
