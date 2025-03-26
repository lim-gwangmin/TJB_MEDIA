import styled from '@emotion/styled';

import { pxToRem } from '@utils/pxToRem';

export const StyledSectionContainer = styled('section')`
  background-color: ${({ bg }) => bg};
  padding-top: ${({ paddingTop }) => pxToRem(paddingTop)};
  padding-bottom: ${({ paddingBt }) => pxToRem(paddingBt)};
`;

export const StyledCenter = styled('section')`
  display: flex;
  flex: 1;
  flex-flow: column;
  background-color: ${({ bg }) => bg};
  padding-top: ${({ paddingTop }) => pxToRem(paddingTop)};
  padding-bottom: ${({ paddingBt }) => pxToRem(paddingBt)};
`;

export const ArticleStyle = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'space-between',
  flex: 1,
  width: '100%',
};
