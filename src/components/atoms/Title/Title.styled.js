import styled from '@emotion/styled';

import { pxToRem } from '@utils/pxToRem';

export const StyledHeaderTitle = styled('h1')`
  font-size: 2rem;
  flex: 1;
  font-weight: 600;
  text-align: ${({ titleAlign }) => titleAlign};
  padding-top: 0;
  padding-right: 1rem;
  padding-bottom: 0;
  padding-left: ${({ titleAlign }) => (titleAlign === 'left' ? '3rem' : '1rem')};
  line-height: 56px;
`;

export const StyledTitle = styled('h1')`
  font-size: ${({ size }) => pxToRem(size)};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  line-height: ${({ lineHeight }) => lineHeight};
  > span {
    font-size: ${({ size }) => pxToRem(size)};
    font-weight: ${({ weight }) => weight};
  }
`;
