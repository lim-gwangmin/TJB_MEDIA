import styled from '@emotion/styled';

import bee from '@assets/images/bee_image_x3.svg';

import { colors } from '@styles/theme';

export const StyledBasicRankWrapper = styled('div')`
  text-align: center;
  flex: 0 1 21.9rem;
`;
export const StyledBasicRankContent = styled('div')`
  position: relative;
  background-color: #fff;
  box-shadow: 0 0 6px 2px rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1.5rem 0.7rem;
  margin-top: ${({ rank }) => (rank === 1 ? '-3.5rem' : '-2.5rem')};
  padding-top: ${({ rank }) => (rank === 1 ? '5rem' : '4rem')};
  padding-bottom: ${({ rank }) => (rank === 1 ? 1.5 : (4 - rank) * 2)}rem;
`;
export const StyledBasicRankImage = styled('div')`
  position: relative;
  width: ${({ rank }) => (rank === 1 ? '7rem' : '5rem')};
  height: ${({ rank }) => (rank === 1 ? '7rem' : '5rem')};
  border-radius: 100%;
  padding: 0.5rem;
  background-image: url(${bee});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.secondary[600]};
  z-index: 2;
  margin: 0 auto;
`;
export const StyledTrophyImage = styled('img')`
  display: block;
  margin: 1.2rem auto;
`;
export const StyledBasicRankTitle = styled('p')`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.primary[400]};
  margin-bottom: 0.5rem;
`;
export const StyledBasicRankLabel = styled('b')`
  font-weight: 700;
  font-size: 1.6rem;
`;
export const StyledBasicRankComment = styled('p')`
  color: #505050;
  font-size: 1.2rem;
  margin-top: ${({ rank }) => (rank === 2 ? '4.3rem' : rank === 3 ? '2.2rem' : '0')};
`;
