import React from 'react';

import { Main } from '@components/atoms/Layout';
import { SecondaryRankContainer } from '@components/molecules/Rank';
import { TabSchoolRankList } from '@components/organisms/Tab';

import { colors } from '@styles/theme';

const THEMA_COLOR = colors.primary[700];

export default function RankingTemplate({
  rankingData = [],
  rankType = false,
  handleChangeRankHistory,
  pageIndex,
  pagination,
  handlePrevPage,
  handleNextPage,
}) {
  const isRankType = rankType === 'school' ? true : false;

  return (
    <Main bg={THEMA_COLOR}>
      <SecondaryRankContainer rankDatas={rankingData} isRankType={isRankType} />
      <TabSchoolRankList
        rankingData={rankingData}
        isRankType={isRankType}
        handleChangeRankHistory={handleChangeRankHistory}
        pageIndex={pageIndex}
        pagination={pagination}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </Main>
  );
}
