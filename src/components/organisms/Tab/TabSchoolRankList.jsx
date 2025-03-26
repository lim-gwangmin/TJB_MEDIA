import React from 'react';

import { RANK_TAB_DATA } from '@constant';

import userThumnail from '@assets/images/bee_image.svg';

import { Box } from '@components/atoms/Box';
import { Text, TextPoint } from '@components/atoms/Text';
import { SectionContainer } from '@components/molecules/Layout';
import { TabSwitcher } from '@components/molecules/Tab';

import {
  ListHeader,
  NonData,
  RankListItem,
  RankListItemLeft,
  RankNumber,
  RankUserThumnail,
} from './Tab.styled';

export default function TabSchoolRankList({
  rankingData,
  isRankType,
  handleChangeRankHistory,
  pageIndex,
  pagination,
  handlePrevPage,
  handleNextPage,
}) {
  return (
    <SectionContainer paddingTop={0}>
      <TabSwitcher
        onClick={handleChangeRankHistory}
        tabList={RANK_TAB_DATA}
        style={{ marginTop: 0 }}
      />
      <Box>
        {pageIndex !== pagination.totalPageCount && (
          <ListHeader>
            {pageIndex - 1 >= pagination.firstPageNo && (
              <PrevButton type="button" onClick={handlePrevPage}>
                <img src={iconPrev} alt="이전 페이지" />
              </PrevButton>
            )}

            {pageIndex + 1 <= pagination.lastPageNo && (
              <NextButton type="button" onClick={handleNextPage}>
                <img src={iconNext} alt="다음 페이지" />
              </NextButton>
            )}
          </ListHeader>
        )}
        {rankingData.length ? (
          <ul>
            {rankingData.map((data, index) => (
              <RankListItem key={index}>
                <RankListItemLeft>
                  <RankNumber>{index + 1}</RankNumber>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      wordBreak: 'break-word',
                    }}
                  >
                    <RankUserThumnail image={userThumnail} />
                    {isRankType ? data.schoolNm : data.userId}
                  </div>
                </RankListItemLeft>
                <Text color="#3C3C3C" weight={500}>
                  <TextPoint color="#FFCD1B" size={18} weight={600}>
                    {data.pointScore}
                  </TextPoint>
                  점
                </Text>
              </RankListItem>
            ))}
          </ul>
        ) : (
          <NonData>랭킹 내역이 없습니다.</NonData>
        )}
      </Box>
    </SectionContainer>
  );
}
