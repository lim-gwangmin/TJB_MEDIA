import styled from '@emotion/styled';

import { Box } from '@components/atoms/Box';

import theme from '@styles/theme';

export const { color } = theme;

export const StyledTotalPointBox = styled(Box)`
  margin-top: 2rem;
  text-align: right;
`;

export const StyledHeader = styled('div')`
  display: flex;
  justify-content: space-between;
  alignitems: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

export const StyledLevelComment = styled('span')`
  display: inline-block;
  padding: 0.5rem 1rem;
  text-align: center;
  font-size: 1.4rem;
  border-radius: 0.8rem;
  margin-top: 2rem;
  background-color: ${color.secondary[600]};
`;

export const StyledCards = styled('div')`
  flex-flow: wrap;
  margin-top: 1.5rem;
  display: flex;
  gap: 1.2rem;
  align-items: center;
  > div {
    flex: 16rem 1 0;
  }
`;
