import React, { useCallback, useEffect, useState } from 'react';

import { RANK_TYPE_TAB_DATA } from '@constant';
import { WEEK_RANK_SCHOOL_SCHEMA } from '@schema/weekRankSchema';
import { RankService } from '@services/rankService';

import { SubmitLoader } from '@components/atoms/Loader';
import { DefaultTabMenu } from '@components/molecules/Tab';
import { Header } from '@components/organisms/Header';
import { RankingTemplate } from '@components/templates/MyPage';

import { useLoading } from '@hooks/useLoading';

import { colors } from '@styles/theme';

const THEMA_COLOR = colors.primary[700];

export default function Ranking() {
  const [rankingDataLoading, fetchRankingData] = useLoading(RankService.weekRank); // 랭킹 데이터 조회 API
  const [rankingSchema, setRankingSchema] = useState({ ...WEEK_RANK_SCHOOL_SCHEMA, pageUnit: 10 }); // 랭킹 데이터 request값
  const [pagination, setPagination] = useState({});
  const [rankingData, setRankingData] = useState([]);

  // 랭킹 데이터 조회를 위한 훅
  useEffect(() => {
    getRankingFetchData();
  }, [rankingSchema]);

  // 랭킹 데이터 조회
  const getRankingFetchData = useCallback(async () => {
    if (rankingDataLoading) return;

    try {
      // 랭킹 데이터 가져오기
      const responseRankData = await fetchRankingData({ ...rankingSchema });
      const rankDataResult = responseRankData.result;
      const { data, pagination } = rankDataResult;

      setRankingData(data);
      setPagination(pagination);
    } catch (error) {
      console.error(error);
    }
  }, [rankingSchema]);

  // 학교, 학생 랭킹 탭 메뉴 변경 함수
  const handleChangeRankType = ({ searchLankTy = 'school' }) => {
    setRankingSchema((prevSchema) => ({ ...prevSchema, pageIndex: 1, searchLankTy }));
  };

  // 이번주, 지난주 탭 메뉴 변경 함수
  const handleChangeRankHistory = (searchWeek = 'this') => {
    setRankingSchema((prevSchema) => ({ ...prevSchema, pageIndex: 1, searchWeek }));
  };

  // 이전 페이지 이동
  const handleChangePrevRank = () => {
    const { pageIndex } = rankingSchema;
    const { firstPageNo } = pagination;
    const prevPage = pageIndex - 1;
    if (prevPage < firstPageNo) return;

    setRankingSchema((prevSchema) => ({ ...prevSchema, pageIndex: prevPage }));
  };
  // 다음 페이지 이동
  const handleChangeNextRank = () => {
    const { pageIndex } = rankingSchema;
    const { lastPageNo } = pagination;
    const nextPage = pageIndex + 1;
    if (nextPage > lastPageNo) return;

    setRankingSchema((prevSchema) => ({ ...prevSchema, pageIndex: nextPage }));
  };

  return (
    <>
      <Header backButton={true} title="랭킹" subMenu={false} border={0} bgColor={THEMA_COLOR} />
      <DefaultTabMenu
        tabs={RANK_TYPE_TAB_DATA}
        data={rankingSchema}
        onClick={handleChangeRankType}
      />
      <RankingTemplate
        rankingData={rankingData}
        rankType={rankingSchema.searchLankTy}
        handleChangeRankHistory={handleChangeRankHistory}
        pageIndex={rankingSchema.pageIndex}
        pagination={pagination}
        handlePrevPage={handleChangePrevRank}
        handleNextPage={handleChangeNextRank}
      />
      {rankingDataLoading && <SubmitLoader />}
    </>
  );
}
