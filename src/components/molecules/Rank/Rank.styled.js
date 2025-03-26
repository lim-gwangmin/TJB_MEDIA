import styled from '@emotion/styled';

export const StyledBasicRankContainer = styled('div')`
  display: flex;
  gap: 1.2rem;
  align-items: end;
  justify-content: center;
`;

export const RankItem = styled('div')`
  flex: 1 0 32.3334%;
  text-align: center;
`;
export const RankUserThumnail = styled('span')`
  display: inline-block;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ image }) => image});
  background-color: #ffcd1b;
`;
export const RankGraph = styled('div')`
  display: block;
  position: relative;
  background: linear-gradient(90deg, #ffb509 0%, #ffec99 100%);
  border-radius: 0.4rem;
  min-height: 3.4rem;
  padding-top: ${({ rank }) => {
    console.log(rank, 'rank');
    if (rank === 1) return 9;
    if (rank === 2) return 5;
  }}rem;
  &::before {
    content: '${({ rank }) => rank}';
    display: block;
    font-size: 1.6rem;
    font-weight: 500;
    color: #505050;
    position: absolute;
    width: 100%;
    bottom: 0.6rem;
    text-align: center;
  }
`;
