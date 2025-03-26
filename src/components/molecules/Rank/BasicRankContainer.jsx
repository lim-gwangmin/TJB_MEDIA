import React from 'react';

import { BasicRankItem } from '@components/atoms/Rank';

import { StyledBasicRankContainer } from './Rank.styled';

export default function BasicRankContainer({ rankDatas = [] }) {
  // 배열이 3개보다 작으면 null로 빈 자리를 채워 3개의 배열로 만듭니다.
  const paddedRankDatas = [...rankDatas];

  while (paddedRankDatas.length <= 3) {
    paddedRankDatas.push(null);
  }

  // 2등, 1등, 3등 순으로 데이터를 재정렬합니다.
  const reorderedRanks = [
    { ...paddedRankDatas[1], rank: 2 }, // 2등
    { ...paddedRankDatas[0], rank: 1 }, // 1등
    { ...paddedRankDatas[2], rank: 3 }, // 3등
  ];

  return (
    <StyledBasicRankContainer>
      {reorderedRanks.map((data, index) => (
        <BasicRankItem
          key={index}
          rank={data ? data.rank : index + 1} // rank 데이터를 넘김
          schoolNm={data.schoolNm} // 빈 데이터일 경우 'No Data'로 표시
        />
      ))}
    </StyledBasicRankContainer>
  );
}
