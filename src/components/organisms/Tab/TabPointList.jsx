import React, { useCallback, useEffect, useState } from 'react';

import { POINT_TAB_DATA } from '@constant';
import { POINT_SERVICE_SCHEMA } from '@schema';
import { PointService } from '@services/pointService';

import iconPrev from '@assets/icons/icon_arrow_back.svg';
import iconNext from '@assets/icons/icon_arrow_next.svg';

import { Box } from '@components/atoms/Box';
import { WindowInfinityScrollContainer } from '@components/atoms/Layout';
import { SubmitLoader } from '@components/atoms/Loader';
import { Text, TextPoint } from '@components/atoms/Text';
import { SectionContainer } from '@components/molecules/Layout';
import { TabSwitcher } from '@components/molecules/Tab';

import { useLoading } from '@hooks/useLoading';

import { nextMonth, prevMonth } from '@utils/dateNavigator';

import {
  ListHeader,
  NextButton,
  NonData,
  PointListItem,
  PointListItemContents,
  PrevButton,
} from './Tab.styled';

export default function TabPointList({
  pointData,
  date = '',
  handleChangePointHistoryType,
  handleChangePrevPointHistory,
  handleChangeNextPointHistory,
}) {
  // 포인트 값에 따라 형식을 반환하는 함수
  const formatPointResult = (point) => {
    return (
      <>
        <TextPoint color="#FFCD1B" weight={500}>
          {point > 0 ? `+ ${point}` : point < 0 ? `${point}` : '0'}
        </TextPoint>
        <Text size={14} color="#707070" align="center">
          {point >= 0 ? '적립' : '사용'}
        </Text>
      </>
    );
  };

  // 년월 텍스트 포맷 변경 함수
  function formatYearMonth(dateStr) {
    const year = dateStr.slice(0, 4); // 연도 추출
    const month = dateStr.slice(4); // 월 추출

    return `${year}년 ${month}월`;
  }

  return (
    <SectionContainer paddingTop={0}>
      <TabSwitcher
        onClick={handleChangePointHistoryType}
        tabList={POINT_TAB_DATA}
        style={{ marginTop: 0 }}
      />
      <Box paddingTop={0} paddingRt={0} paddingBt={0} paddingLf={0}>
        <ListHeader>
          <PrevButton type="button" onClick={handleChangePrevPointHistory}>
            <img src={iconPrev} alt="이전 달" />
          </PrevButton>
          {formatYearMonth(date)}
          <NextButton type="button" onClick={handleChangeNextPointHistory}>
            <img src={iconNext} alt="다음 달" />
          </NextButton>
        </ListHeader>
        {pointData.length ? (
          <ul>
            {pointData.map((data, index) => (
              <PointListItem key={index}>
                <PointListItemContents>
                  <Text weight={600} style={{ lineHeight: 1.3 }}>
                    {data.pointDc}
                  </Text>
                  <Text size={14} color="#707070">
                    {data.createDt.split(' ')[0]}
                  </Text>
                </PointListItemContents>
                <PointListItemContents style={{ textAlign: 'center', flex: '0 0 5rem' }}>
                  {formatPointResult(data.point)}
                </PointListItemContents>
              </PointListItem>
            ))}
          </ul>
        ) : (
          <NonData>이용 내역이 없습니다.</NonData>
        )}
      </Box>
      {/* {isLoading && <SubmitLoader />} */}
    </SectionContainer>
  );
}
