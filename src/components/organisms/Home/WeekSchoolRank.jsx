import React, { useCallback, useEffect, useState } from 'react';

import { RANK_TAB_DATA } from '@constant';
import { WEEK_RANK_SCHOOL_SCHEMA } from '@schema';
import { RankService } from '@services/rankService';

import { BasicRankContainer } from '@components/molecules/Rank';
import { TabSwitcher } from '@components/molecules/Tab';

import { useLoading } from '@hooks/useLoading';

export default function WeekSchoolRank({}) {
  const [lankLoading, fetchLankData] = useLoading(RankService.weekRank); // 주간 랭킹 API
  const [weekRankSchema, setweekRankSchema] = useState(WEEK_RANK_SCHOOL_SCHEMA); // 주간 랭킹 request값
  const [weekRankData, setweekRankData] = useState([]);

  // 주간랭킹 조회를 위한 훅
  useEffect(() => {
    getweekRankFetchData();
  }, [weekRankSchema]);

  // 주간 랭킹 데이터 조회
  const getweekRankFetchData = useCallback(async () => {
    if (lankLoading) return;
    try {
      // 주간 랭킹 데이터 가져오기
      const responseLankData = await fetchLankData({ ...weekRankSchema, pageUnit: 3 });
      const lankDataResult = responseLankData.result;
      setweekRankData(lankDataResult.data);
    } catch (error) {
      console.error(error);
    }
  }, [weekRankSchema]);

  // 주간 랭킹 변경 함수
  const handleChangeweekRank = (week = 'this') => {
    setweekRankSchema((prevSchema) => ({ ...prevSchema, searchWeek: week }));
  };

  return (
    <>
      <TabSwitcher onClick={handleChangeweekRank} tabList={RANK_TAB_DATA} />
      <BasicRankContainer rankDatas={weekRankData} isLoading={lankLoading} />
    </>
  );
}
