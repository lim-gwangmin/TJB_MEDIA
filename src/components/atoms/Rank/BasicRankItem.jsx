import React from 'react';

import icon_trophy from '@assets/icons/icon_trophy.svg';

import {
  StyledBasicRankComment,
  StyledBasicRankContent,
  StyledBasicRankImage,
  StyledBasicRankLabel,
  StyledBasicRankTitle,
  StyledBasicRankWrapper,
  StyledTrophyImage,
} from './Rank.styled';

export default function BasicRankItem({ rank = 1, schoolNm = '-' }) {
  return (
    <StyledBasicRankWrapper>
      <StyledBasicRankImage rank={rank} />
      <StyledBasicRankContent rank={rank}>
        <StyledBasicRankTitle>{rank}등</StyledBasicRankTitle>
        <StyledBasicRankLabel>{schoolNm}</StyledBasicRankLabel>
        {rank === 1 && <StyledTrophyImage src={icon_trophy} alt="트로피 이미지" />}
        {/* <StyledBasicRankComment rank={rank}>{comment}</StyledBasicRankComment> */}
      </StyledBasicRankContent>
    </StyledBasicRankWrapper>
  );
}
