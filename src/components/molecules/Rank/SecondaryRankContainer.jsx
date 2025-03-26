import React from 'react';

import userThumnail from '@assets/images/bee_image.svg';

import { Box } from '@components/atoms/Box';
import { SectionContainer } from '@components/molecules/Layout';

import { RankGraph, RankItem, RankUserThumnail } from './Rank.styled';

export default function SecondaryRankContainer({ rankDatas, isRankType }) {
  const paddedRankDatas = [...rankDatas];

  while (paddedRankDatas.length <= 3) {
    paddedRankDatas.push(null);
  }

  // 2등, 1등, 3등 순으로 데이터를 재정렬합니다.
  const FilterRankingData = [
    rankDatas[1] ? { ...rankDatas[1], rank: 2 } : { rank: 2, schoolNm: '-', userId: '-' }, // 2등
    rankDatas[0] ? { ...rankDatas[0], rank: 1 } : { rank: 1, schoolNm: '-', userId: '-' }, // 1등
    rankDatas[2] ? { ...rankDatas[2], rank: 3 } : { rank: 3, schoolNm: '-', userId: '-' }, // 3등
  ];

  return (
    <SectionContainer>
      <Box>
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'end' }}>
          {FilterRankingData.map((ranking) => (
            <RankItem key={ranking.rank}>
              <RankUserThumnail image={userThumnail} />
              <p style={{ fontWeight: 600, margin: ' 0.5rem 0 1rem' }}>
                {isRankType ? ranking.schoolNm : ranking.userId}
              </p>
              <RankGraph rank={ranking.rank} />
            </RankItem>
          ))}
        </div>
      </Box>
    </SectionContainer>
  );
}
